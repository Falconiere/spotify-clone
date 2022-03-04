import React from "react";
import { Box, ScrollView } from "native-base";

import { CarouselAlbums } from "domains/home/CarouselAlbums";
import { Header } from "domains/home/Header";
import { LastAlbumsPlayed } from "domains/home/LastAlbumsPlayed";

import { gradientBoxBg } from "./styles";
import { mockAlbums } from "./mockData";

import { usePlayerContext } from "providers/Player";

export function Home() {
  const playerCtx = usePlayerContext();
  return (
    <ScrollView bg="primary.50">
      <Box safeAreaTop p="2" bg={gradientBoxBg}>
        <Header />
        <LastAlbumsPlayed data={mockAlbums} />
      </Box>
      <CarouselAlbums
        title="Trending albums for you"
        data={mockAlbums}
        onPress={() => playerCtx.togglePlayer()}
      />
      <CarouselAlbums
        title="Your shows"
        data={mockAlbums}
        onPress={() => playerCtx.togglePlayer()}
      />
      <CarouselAlbums
        title="Recently Played"
        data={mockAlbums}
        cardSize="sm"
        onPress={() => playerCtx.togglePlayer()}
      />
    </ScrollView>
  );
}
