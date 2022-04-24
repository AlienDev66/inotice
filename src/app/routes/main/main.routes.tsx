import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../../screens/Welcome";
import { Home } from "../../screens/Home";

type MainRoutesTypes = {
  Welcome: String;
  Home: String;
};

const { Navigator, Screen, Group } =
  createNativeStackNavigator<MainRoutesTypes>();

export function MainRoutes() {
  return (
    <Navigator initialRouteName="Welcome">
      <Group screenOptions={{ headerShown: false }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Home" component={Home} />
      </Group>
    </Navigator>
  );
}
