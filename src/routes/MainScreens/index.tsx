import React from "react";
import { useTheme } from "native-base";

import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Home } from "screens/Home";
import { Search } from "screens/Search";
import { Library } from "screens/Library";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export function MainScreens() {
  const theme = useTheme();
  return (
    <Navigator
      barStyle={{
        backgroundColor: theme.colors.primary["50"],
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={20} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={20} />
          ),
        }}
      />
      <Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: "Your Library",
          tabBarIcon: ({ color }) => (
            <Ionicons name="library-sharp" color={color} size={20} />
          ),
        }}
      />
    </Navigator>
  );
}
