import { useEffect, useState, useCallback, useRef } from "react";
import { ListNotice } from "../../components/ListNotice";
import LogoImg from "../../../../assets/logo.png";
import { Container, LogoContainer, Logo } from "./styles";
import api from "../../services/api";
import {
  FlatList,
  RefreshControl,
  Linking,
  Animated,
  Dimensions,
} from "react-native";

interface NoticeTypes {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

const { height } = Dimensions.get("screen");

export const Home = () => {
  const [data, setData] = useState<NoticeTypes[]>([] as NoticeTypes[]);
  const [refreshing, setRefreshing] = useState(false);
  const [noticeTime, setNoticeTime] = useState("");
  const scrollY = useRef(new Animated.Value(0)).current;

  function getDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const time =
      year +
      "-" +
      (month < 10 ? "0" + month : month) +
      "-" +
      (day < 10 ? "0" + day : day);

    setNoticeTime(time);
    console.log("TIME ======>>>><", time);
  }

  async function getNotices() {
    const response = await api.get(
      `/everything?q=apple&from=${noticeTime}&to=${noticeTime}&sortBy=popularity&apiKey=16bc5553304b41e28943bd9f5b8450c9`
    );
    setData(response.data.articles);
  }

  const openNotice = (url: string) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item, index }: { item: NoticeTypes }) => {
    const inputRange = [
      -1,
      0,
      (height * 0.2 + 50) * index,
      (height * 0.3 + 50) * (index + 3),
    ];
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const Offset = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, 0, 500],
    });

    return (
      <Animated.View
        style={{ transform: [{ translateX: Offset }], opacity: opacity }}>
        <ListNotice
          title={item.title}
          description={item.description}
          image={item.urlToImage}
          openLink={() => openNotice(item.url)}
        />
      </Animated.View>
    );
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getNotices();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getNotices();
    getDateTime();
  }, []);

  return (
    <Container>
      <LogoContainer>
        <Logo source={LogoImg} />
      </LogoContainer>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={(item) => item.urlToImage}
      />
    </Container>
  );
};
