import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 299px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.bold};
`;
