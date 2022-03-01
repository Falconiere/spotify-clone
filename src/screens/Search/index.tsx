import React from "react";
import { Box, HStack, ScrollView, Text, useTheme } from "native-base";
import { cards } from "./mockData";
import { GenreCard } from "domains/search/GenreCard";
import { replaceAllWhiteSpaces } from "utils/string";
import { SearchInput } from "domains/search/SearchInput";
import { SafeAreaView } from "react-native";

export function Search() {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.primary[50] }}>
      <ScrollView bg="primary.50" stickyHeaderIndices={[1]}>
        <Text fontWeight="700" p="2" fontSize="xl">
          Search
        </Text>
        <SearchInput />
        {cards.map(({ title, items }, idx) => (
          <Box key={`${idx}-${replaceAllWhiteSpaces(title)}`}>
            <Text py="3" px="2">
              {title}
            </Text>
            <HStack flexWrap="wrap" p="1">
              {items.map((item, idy) => (
                <GenreCard
                  {...item}
                  key={`${idy}-${replaceAllWhiteSpaces(item.title)}`}
                />
              ))}
            </HStack>
          </Box>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
