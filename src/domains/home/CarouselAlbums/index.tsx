import React from "react";
import { AlbumCard, AlbumCardProps } from "components/AlbumCard";
import { Box, FlatList, Text } from "native-base";

type Props = {
  title: string;
  data: Array<AlbumCardProps>;
  cardSize?: AlbumCardProps["cardSize"];
  onPress?: (id: AlbumCardProps["id"]) => void;
};

export function CarouselAlbums(props: Props) {
  const { title, data, cardSize, onPress } = props;
  return (
    <Box p="2">
      <Text fontWeight="700" fontSize="xl">
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <AlbumCard
            {...item}
            key={item.id}
            cardSize={cardSize}
            onPress={() => onPress?.(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
      />
    </Box>
  );
}
