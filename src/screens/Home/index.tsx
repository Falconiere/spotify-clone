import React from "react";
import { ScrollView } from "native-base";

import { CarouselAlbums } from "domains/home/CarouselAlbums";
import { Header } from "domains/home/Header";

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
];

export function Home() {
  return (
    <ScrollView bg="primary.50">
      <Header />
      <CarouselAlbums title="Trending albums for you" data={mockData} />
      <CarouselAlbums title="Your shows" data={mockData} />
      <CarouselAlbums title="Recently Played" data={mockData} cardSize="sm" />
    </ScrollView>
  );
}
