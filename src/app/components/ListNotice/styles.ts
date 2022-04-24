import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 100%;
  border-radius: 11px;
  margin-bottom: 18px;
`;
export const NoticeImage = styled.ImageBackground.attrs({
  borderRadius: 11,
})`
  height: 207px;
`;
export const Gradient = styled(LinearGradient)`
  flex: 1;
  justify-content: flex-end;
  border-radius: 11px;
`;
export const Title = styled.Text`
  font-size: 13px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.bold};
  margin-bottom: 9px;
`;
export const Description = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  margin-bottom: 10px;
`;
export const Content = styled.View.attrs({
  paddingHorizontal: 13,
})``;
