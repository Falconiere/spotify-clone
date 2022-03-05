import React from "react";
import { useTheme, Icon } from "native-base";
import { Ionicons, Feather, Entypo } from "@native-base/icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "screens/Home";
import { Search } from "screens/Search";
import { YourLibrary } from "screens/YourLibrary";
import { Routes } from "routes/types";
import { PlayList } from "screens/PlayList";

const BottomStack = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NestedScreens = (
  <Stack.Group>
    <Stack.Screen name={Routes.PLAYLIST} component={PlayList} />
  </Stack.Group>
);

const NestedHome = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    {NestedScreens}
  </Stack.Navigator>
);

const NestedSearch = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Search" component={Search} />
    {NestedScreens}
  </Stack.Navigator>
);

const NestedLibrary = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="YourLibrary" component={YourLibrary} />
    {NestedScreens}
  </Stack.Navigator>
);

export function HomeScreens() {
  const theme = useTheme();
  return (
    <>
      <BottomStack.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.primary["50"],
            borderTopColor: theme.colors.primary["50"],
          },
          tabBarActiveTintColor: theme.colors.white,
          headerShown: false,
        }}>
        <BottomStack.Screen
          name="NestedHome"
          component={NestedHome}
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Icon as={Entypo} name="home" color={color} size="sm" />
            ),
          }}
        />
        <BottomStack.Screen
          name="NestedSearch"
          component={NestedSearch}
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => (
              <Icon as={Feather} name="search" color={color} size="sm" />
            ),
          }}
        />
        <BottomStack.Screen
          name="NestedLibrary"
          component={NestedLibrary}
          options={{
            title: "Your Library",
            tabBarIcon: ({ color }) => (
              <Icon as={Ionicons} name="library-sharp" color={color} size="sm" />
            ),
          }}
        />
      </BottomStack.Navigator>
    </>
  );
}
