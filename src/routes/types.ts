import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum Routes {
  MAIN_NAVIGATION = "MAIN_NAVIGATION",
  PLAYLIST = "Playlist",
}

export type RootStackParamList = {
  [Routes.MAIN_NAVIGATION]: undefined;
  [Routes.PLAYLIST]: { playListId: string };
};

export type PlayListRouteProp = NativeStackScreenProps<
  RootStackParamList,
  Routes.PLAYLIST
>;
