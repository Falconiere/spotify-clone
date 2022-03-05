import React from "react";

import { AspectRatio, Column, HStack, Image, Pressable, Text } from "native-base";
import { Track } from "services/playerCore";

type Props = {
  onPress: () => void;
};

export const TrackCard: React.VFC<Track & Props> = props => {
  const { title, artist, artwork, onPress } = props;
  return (
    <Pressable onPress={onPress}>
      <HStack space="2" alignItems="center" p="2">
        <Column w="50px">
          <AspectRatio w="100%" ratio={1}>
            {artwork && <Image source={{ uri: artwork }} alt={artist} />}
          </AspectRatio>
        </Column>
        <Column>
          <Text fontSize="sm">{title}</Text>
          <Text fontWeight="200" fontSize="xs">
            {artist}
          </Text>
        </Column>
      </HStack>
    </Pressable>
  );
};
