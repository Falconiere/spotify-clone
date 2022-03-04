import React from "react";
import { Box, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { CarouselAlbums } from "domains/home/CarouselAlbums";
import { Header } from "domains/home/Header";
import { LastAlbumsPlayed } from "domains/home/LastAlbumsPlayed";

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
        <LastAlbumsPlayed data={mockAlbums} />
      </Box>
      <CarouselAlbums
        title="Trending albums for you"
        data={mockAlbums}
        onPress={handleOnOpenPlayList}
      />
      <CarouselAlbums
        title="Your shows"
        data={mockAlbums}
        onPress={handleOnOpenPlayList}
      />
      <CarouselAlbums
        title="Recently Played"
        data={mockAlbums}
        cardSize="sm"
        onPress={handleOnOpenPlayList}
      />
    </ScrollView>
  );
}
