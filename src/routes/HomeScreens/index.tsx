import React from "react";
import { StatusBar, useTheme, Icon } from "native-base";
import { Ionicons, Feather, Entypo } from "@native-base/icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Home } from "screens/Home";
import { Search } from "screens/Search";
import { YourLibrary } from "screens/YourLibrary";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export function HomeScreens() {
  const theme = useTheme();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator
        barStyle={{
          backgroundColor: theme.colors.primary["50"],
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon as={Entypo} name="home" color={color} size="sm" />
            ),
          }}
        />
        <Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon as={Feather} name="search" color={color} size="sm" />
            ),
          }}
        />
        <Screen
          name="YourLibrary"
          component={YourLibrary}
          options={{
            tabBarLabel: "Your Library",
            tabBarIcon: ({ color }) => (
              <Icon as={Ionicons} name="library-sharp" color={color} size="sm" />
            ),
          }}
        />
      </Navigator>
    </>
  );
}
