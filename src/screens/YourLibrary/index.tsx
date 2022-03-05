import React from "react";
import { SafeAreaView } from "react-native";

import { ScrollView, useTheme } from "native-base";
import { Header } from "domains/yourLibrary/Header";

import { PlayListCard } from "components/PlayListCard";
import { replaceAllWhiteSpaces } from "utils/string";

import { mockPlayLists } from "services/api/mockData";

export function YourLibrary() {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.primary[50], flex: 1 }}>
      <Header />
      <ScrollView w="100%" px="2" pt="5">
        {mockPlayLists.map((item, idx) => (
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
