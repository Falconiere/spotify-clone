/**
 * @format
 */
import TrackPlayer from "react-native-track-player";
import { AppRegistry } from "react-native";
import { Router as App } from "./src/routes";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() =>
  require("./src/services/playerCore/TrackPlayerService"),
);
