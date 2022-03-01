import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { MainScreens } from "./MainScreens";

import { ThemeProvider } from "providers/Theme";
import { PlayerProvider } from "providers/Player";
import { ApiProvider } from "providers/Api";

export function Routes() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <ApiProvider>
          <PlayerProvider>
            <MainScreens />
          </PlayerProvider>
        </ApiProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
