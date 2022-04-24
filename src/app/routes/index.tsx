import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "./main/main.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}
