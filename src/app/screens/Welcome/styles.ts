import styled from "styled-components/native";
import { ImageBackgroundProps } from "react-native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";

export const Background = styled.ImageBackground<ImageBackgroundProps>`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const WelcomeImage = styled.Image`
  width: 421px;
  height: 434px;
`;
export const Logo = styled.Image`
  width: 197px;
  height: 44px;
`;
export const LogoContainer = styled.View`
  margin-top: ${getStatusBarHeight() + 20}px;
`;
export const ButtonContainer = styled.View`
  margin-bottom: ${getBottomSpace() + 20}px;
`;
