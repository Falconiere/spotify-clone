import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { MainScreens } from "./MainScreens";
import { ThemeProvider } from "providers/Theme";

export function Routes() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <MainScreens />
      </ThemeProvider>
    </NavigationContainer>
  );
}
