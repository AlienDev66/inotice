import {
  Background,
  WelcomeImage,
  Logo,
  LogoContainer,
  ButtonContainer,
} from "./styles";
import BgImg from "../../assets/images/default/bg.png";
import WelcomeImg from "../../assets/images/welcome/welcome_bg.png";
import LogoImg from "../../../../assets/logo.png";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export const Welcome = () => {
  const navigation = useNavigation();

  function navigateTo(route: string) {
    navigation.navigate(route);
  }

  return (
    <Background source={BgImg} resizeMode="cover">
      <StatusBar backgroundColor="transparent" />
      <LogoContainer>
        <Logo source={LogoImg} />
      </LogoContainer>
      <WelcomeImage source={WelcomeImg} />
      <ButtonContainer>
        <Button title="Ver notícias" onPress={() => navigateTo("Home")} />
      </ButtonContainer>
    </Background>
  );
};
