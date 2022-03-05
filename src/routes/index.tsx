import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ThemeProvider } from "providers/Theme";
import { PlayerProvider } from "providers/Player";
import { ApiProvider } from "providers/Api";

import { HomeScreens } from "./HomeScreens";
import { PlayList } from "screens/PlayList";
import { RootStackParamList, Routes } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const options = { headerShown: false };
export function Router() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <ApiProvider>
          <PlayerProvider>
            <Navigator>
              <Screen
                name={Routes.HOME_SCREENS}
                component={HomeScreens}
                options={options}
              />
              <Screen name={Routes.PLAYLIST} component={PlayList} options={options} />
            </Navigator>
          </PlayerProvider>
        </ApiProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
