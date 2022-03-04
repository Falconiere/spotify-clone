export enum Routes {
  HOME_SCREENS = "HomeScreens",
  PLAYLIST = "Playlist",
}

export type RootStackParamList = {
  [Routes.HOME_SCREENS]: undefined;
  [Routes.PLAYLIST]: { playListId: string };
};
