import React from "react";
import { ScrollView, useTheme } from "native-base";
import { Header } from "domains/library/Header";
import { SafeAreaView } from "react-native";
import { mockAlbums } from "screens/Home/mockData";
import { AlbumCard } from "components/AlbumCard";
import { replaceAllWhiteSpaces } from "utils/string";

export function Library() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.primary[50], flex: 1 }}>
      <Header />
      <ScrollView w="100%" px="2" pt="5">
        {mockAlbums.map((item, idx) => (
          <AlbumCard
            key={`${idx}-${replaceAllWhiteSpaces(item.id)}`}
            cardSize="xs"
            horizontal
            {...item}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
