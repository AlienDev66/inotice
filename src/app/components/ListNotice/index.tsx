import theme from "../../global/styles/theme";

import {
  Container,
  NoticeImage,
  Gradient,
  Title,
  Description,
  Content,
} from "./styles";

interface Props {
  title: string;
  description: string;
  image: string;
  openLink: () => void;
}

export const ListNotice = ({ title, description, image, openLink }: Props) => {
  return (
    <Container onPress={openLink}>
      <NoticeImage
        source={{
          uri: image,
        }}>
        <Gradient colors={["transparent", theme.colors.primary]}>
          <Content>
            <Title>{title}</Title>
            <Description numberOfLines={2}>{description}</Description>
          </Content>
        </Gradient>
      </NoticeImage>
    </Container>
  );
};
