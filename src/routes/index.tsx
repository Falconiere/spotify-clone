import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { MainScreens } from "./MainScreens";
import { ThemeProvider } from "providers/Theme";
import { PlayerProvider } from "providers/Player";

export function Routes() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <PlayerProvider>
          <MainScreens />
        </PlayerProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
