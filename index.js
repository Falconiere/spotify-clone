/**
 * @format
 */

import { AppRegistry } from "react-native";
import { Routes as App } from "./src/routes";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
