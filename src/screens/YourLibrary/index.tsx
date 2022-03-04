import React from "react";

import { ScrollView, useTheme } from "native-base";
import { Header } from "domains/yourLibrary/Header";
import { SafeAreaView } from "react-native";
import { mockAlbums } from "screens/Home/mockData";
import { PlayListCard } from "components/PlayListCard";
import { replaceAllWhiteSpaces } from "utils/string";

export function YourLibrary() {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.primary[50], flex: 1 }}>
      <Header />
      <ScrollView w="100%" px="2" pt="5">
        {mockAlbums.map((item, idx) => (
          <PlayListCard
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
