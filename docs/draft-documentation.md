
## Notes before we start
 Make sure you have these same files with the same content
 * eslintrc.js
 * prettierrc.js
 * tsconfig.json
 * metro.config.js
 * babel.config.js

 Install the dependencies:
  * ```yarn add react-native-typescript-transformer```
  * ```yarn add babel-plugin-module-resolver```
  * ```yarn add metro-react-native-babel-preset```

## Getting Started
So, let's code a Spotify clone with react-native

The first step you have to config your environment to support react-native. React-native
has a very good documentation. For this project, we will use the react-native-cli.

* Set up the environment with react-native: https://reactnative.dev/docs/environment-setup

Once you have installed everything, you can start the project. Run this command on your terminal:

```
npx react-native init SpotifyClone --template react-native-template-typescript  
```

<==============================>


For this clone we will use the [nativebase.io](https://docs.nativebase.io/) as the framework for the UI

```
// Install the nativebase.io for existing project
yarn add native-base react-native-svg react-native-safe-area-context
```

```
// Run Pod install
cd ios/
pod install
```


<==============================>

# Folder structure:

```
root/
  src/
    providers/
      Theme/index.tsx
    routes/
      index.tsx
    components/
      Button/
        index.tsx
    screens/
      Home/
        index.tsx
        styles.ts
```

Lets start creating the ThemeProvider.


```src/providers/Theme/index.tsx```

```javascript
  import React from "react";
  import { NativeBaseProvider } from "native-base";

  export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <NativeBaseProvider>{children}</NativeBaseProvider>;
  }
```

Now as we have the basic configuration for the theme, we can start creating the screens. Let's start with the Home, Search and Library screens.

```src/screens/Home/index.tsx```
```javascript
import React from "react";
import { Text } from "native-base";

export function Home() {
  return <Text>Home</Text>;
}
```


```src/screens/Search/index.tsx```
```javascript
import React from "react";
import { Text } from "native-base";

export function Search() {
  return <Text>Search</Text>;
}
```
```src/screens/Library/index.tsx```
```javascript
import React from "react";
import { Text } from "native-base";

export function Library() {
  return <Text>Library</Text>;
}
```

These are the main screens of the app. The next step is to create the bottom navigation for them. For that task, we need to install the base [reactnavigation](https://reactnavigation.org/docs/getting-started]) and [the Material Bottom Tabs](https://reactnavigation.org/docs/material-bottom-tab-navigator/). After that, we can create the bottom navigation. Remember to run pod install on the ios folder or ```npx pod-install ios```.


```src/routes/MainScreens/index.tsx```

```javascript
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Home } from "screens/Home";
import { Search } from "screens/Search";
import { Library } from "screens/Library";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export function MainScreens() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Library" component={Library} />
    </Navigator>
  );
}
```

After that, lets create the index fo routes and import the MainNavigation.

```src/routes/index.tsx```
```javascript
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
```

Then we can modify the ```root/index.js``` file to include the Routes.

```javascript
/**
 * @format
 */

import { AppRegistry } from "react-native";
import { Routes as App } from "./src/routes";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
```
Rebuild the app and we can see the main screens with the bottom navigation.

<img src="./assets/created-first-ui-for-the-main-screens.png" width="300" alt="Main Screens screen shot" />


The next step is to change the bottom navigation styles to have the same color and the icons.


Let update the theme provider to contain the main colors

```src/providers/Theme/index.tsx```
```javascript
import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#121212",
    },
    secondary: {
      50: "#65d46e",
    },
  },
});
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
}
```

After that, we need install the react-native-vector-icons.
Make sure you have the following [documentation](https://github.com/oblador/react-native-vector-icons):
```
yarn add react-native-vector-icons
```

Once we have the vector icons, we can update the bottom navigation for the main screens.

```src/routes/MainScreens/index.tsx```
```javascript
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

```
<img src="./assets/updated-navigation-bottom.png" width="300" alt="Main Screens screen shot with the background and icons" />

Perfect, the clone is starting getting more shape. Lets continue to the components from the home screen.

The first component we will start to build, is the albums card. The component contains the thumbnail, the title and the artist.

```src/components/AlbumsCard/index.tsx```
