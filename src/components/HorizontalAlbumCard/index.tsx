import { AspectRatio, Box, HStack, Image, Text } from "native-base";
import React from "react";

import { AlbumCardProps } from "components/AlbumCard";

type Props = AlbumCardProps;
export function HorizontalAlbumCard(props: Props) {
  const { title, thumbnail } = props;
  return (
    <HStack
      alignItems="center"
      space="1"
      bg="primary.100"
      rounded="md"
      m="1"
      w="47.5%">
      <Box w="50px">
        <AspectRatio w="100%" ratio={1} bg="gray.400" rounded="md">
          <Image source={{ uri: thumbnail }} alt="Thumbnail" />
        </AspectRatio>
      </Box>
      <Box alignItems="center">
        <Text>{title}</Text>
      </Box>
    </HStack>
  );
}
