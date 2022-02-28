import React from "react";
import { Box, ScrollView } from "native-base";

import { CarouselAlbums } from "domains/home/CarouselAlbums";
import { Header } from "domains/home/Header";
import { LastAlbumsPlayed } from "domains/home/LastAlbumsPlayed";

const mockData = [
  {
    id: "album-1",
    thumbnail: "https://place-hold.it/150x150",
    title: "Album 1",
    subTitle: "Artist 1",
  },
  {
    id: "album-2",
    thumbnail: "https://place-hold.it/150x150",
    title: "Album 1",
    subTitle: "Artist 1",
  },
  {
    id: "album-3",
    thumbnail: "https://place-hold.it/150x150",
    title: "Album 1",
    subTitle: "Artist 1",
  },
  {
    id: "album-4",
    thumbnail: "https://place-hold.it/150x150",
    title: "Album 1",
    subTitle: "Artist 1",
  },
  {
    id: "album-5",
    thumbnail: "https://place-hold.it/150x150",
    title: "Album 1",
    subTitle: "Artist 1",
  },
  {
    id: "album-6",
    thumbnail: "https://place-hold.it/150x150",
    title: "Album 1",
    subTitle: "Artist 1",
  },
];

export function Home() {
  return (
    <ScrollView bg="primary.50">
      <Box
        safeAreaTop
        p="2"
        bg={{
          linearGradient: {
            colors: ["gray.600", "gray.700", "primary.50"],
            start: [0, 0.25],
            end: [0.5, 1.0],
            // @ts-ignore
            locations: [0, 0.25, 0.5],
          },
        }}>
        <Header />
        <LastAlbumsPlayed data={mockData} />
      </Box>
      <CarouselAlbums title="Trending albums for you" data={mockData} />
      <CarouselAlbums title="Your shows" data={mockData} />
      <CarouselAlbums title="Recently Played" data={mockData} cardSize="sm" />
    </ScrollView>
  );
}
