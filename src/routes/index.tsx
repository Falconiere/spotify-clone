import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SSRProvider } from "@react-aria/ssr";

import { ThemeProvider } from "providers/Theme";
import { PlayerProvider } from "providers/Player";
import { ApiProvider } from "providers/Api";

import { MainNavigation } from "./MainNavigation";

import { StatusBar } from "native-base";

export function Router() {
  return (
    <SSRProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <ThemeProvider>
          <ApiProvider>
            <PlayerProvider>
              <MainNavigation />
            </PlayerProvider>
          </ApiProvider>
        </ThemeProvider>
      </NavigationContainer>
    </SSRProvider>
  );
}
