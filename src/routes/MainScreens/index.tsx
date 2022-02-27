import React from "react";
import { StatusBar, useTheme, Icon } from "native-base";

import { Ionicons, Feather, Entypo } from "@native-base/icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Home } from "screens/Home";
import { Search } from "screens/Search";
import { Library } from "screens/Library";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export function MainScreens() {
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
          name="Library"
          component={Library}
          options={{
            tabBarLabel: "Your Library",
            tabBarIcon: ({ color }) => (
              <Icon
                as={Ionicons}
                name="library-sharp"
                color={color}
                size="sm"
              />
            ),
          }}
        />
      </Navigator>
    </>
  );
}
