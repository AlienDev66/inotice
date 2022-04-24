import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View.attrs({
  paddingHorizontal: 26,
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
`;
export const LogoContainer = styled.View`
  margin-top: ${getStatusBarHeight() + 20}px;
  margin-bottom: 37px;
`;
export const Logo = styled.Image`
  width: 121px;
  height: 26px;
`;
