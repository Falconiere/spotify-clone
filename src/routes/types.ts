import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum Routes {
  HOME_SCREENS = "HomeScreens",
  PLAYLIST = "Playlist",
}

export type RootStackParamList = {
  [Routes.HOME_SCREENS]: undefined;
  [Routes.PLAYLIST]: { playListId: string };
};

export type PlayListRouteProp = NativeStackScreenProps<
  RootStackParamList,
  Routes.PLAYLIST
>;
export type MainScreensNavigationProp = MaterialBottomTabScreenProps<RootStackParamList>;
