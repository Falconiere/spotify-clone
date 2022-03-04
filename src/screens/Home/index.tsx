import React from "react";
import { Box, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { CarouselPlayLists } from "domains/home/CarouselPlayLists";
import { Header } from "domains/home/Header";
import { LastPlayListsPlayed } from "domains/home/LastPlayListsPlayed";

import { gradientBoxBg } from "./styles";
import { mockAlbums } from "./mockData";

import { RootStackParamList, Routes } from "routes/types";

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnOpenPlayList = (playListId: string) => {
    navigation.navigate(Routes.PLAYLIST, { playListId });
  };

  return (
    <ScrollView bg="primary.50">
      <Box safeAreaTop p="2" bg={gradientBoxBg}>
        <Header />
        <LastPlayListsPlayed data={mockAlbums} />
      </Box>
      <CarouselPlayLists
        title="Trending albums for you"
        data={mockAlbums}
        onPress={handleOnOpenPlayList}
      />
      <CarouselPlayLists
        title="Your shows"
        data={mockAlbums}
        onPress={handleOnOpenPlayList}
      />
      <CarouselPlayLists
        title="Recently Played"
        data={mockAlbums}
        cardSize="sm"
        onPress={handleOnOpenPlayList}
      />
    </ScrollView>
  );
}
