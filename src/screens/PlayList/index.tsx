import { Header } from "domains/playList/Header";
import { ScrollView, Text } from "native-base";
import React from "react";

export function PlayList() {
  return (
    <ScrollView bg="primary.50" stickyHeaderIndices={[0]}>
      <Header />
      <Text>Play List</Text>
    </ScrollView>
  );
}
