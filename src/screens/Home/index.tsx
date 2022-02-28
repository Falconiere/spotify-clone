import React from "react";
import { Box, ScrollView } from "native-base";

import { CarouselAlbums } from "domains/home/CarouselAlbums";
import { Header } from "domains/home/Header";
import { LastAlbumsPlayed } from "domains/home/LastAlbumsPlayed";

import { gradientBoxBg } from "./styles";
import { mockData } from "./mockData";

import { usePlayerContext } from "providers/Player";

export function Home() {
  const playerCtx = usePlayerContext();
  return (
    <ScrollView bg="primary.50">
      <Box safeAreaTop p="2" bg={gradientBoxBg}>
        <Header />
        <LastAlbumsPlayed data={mockData} />
      </Box>
      <CarouselAlbums
        title="Trending albums for you"
        data={mockData}
        onPress={() => playerCtx.togglePlay()}
      />
      <CarouselAlbums
        title="Your shows"
        data={mockData}
        onPress={() => playerCtx.togglePlay()}
      />
      <CarouselAlbums
        title="Recently Played"
        data={mockData}
        cardSize="sm"
        onPress={() => playerCtx.togglePlay()}
      />
    </ScrollView>
  );
}
