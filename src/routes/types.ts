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
