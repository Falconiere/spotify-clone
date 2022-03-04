import React from "react";
import { PlayListCard, PlayListCardProps } from "components/PlayListCard";
import { Box, FlatList, Text } from "native-base";

type Props = {
  title: string;
  data: Array<PlayListCardProps>;
  cardSize?: PlayListCardProps["cardSize"];
  onPress: (id: PlayListCardProps["id"]) => void;
};

export function CarouselPlayLists(props: Props) {
  const { title, data, cardSize, onPress } = props;
  return (
    <Box p="2">
      <Text fontWeight="700" fontSize="xl">
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PlayListCard
            {...item}
            key={item.id}
            cardSize={cardSize}
            onPress={() => onPress(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
      />
    </Box>
  );
}
