import React from "react";
import { AspectRatio, Box, HStack, Image, Text, Pressable } from "native-base";

import { AlbumCardProps } from "components/AlbumCard";

type Props = AlbumCardProps;
export function HorizontalAlbumCard(props: Props) {
  const { title, thumbnail, onPress } = props;
  return (
    <Pressable w="1/2" onPress={onPress}>
      {({ isHovered, isFocused, isPressed }) => (
        <HStack
          alignItems="center"
          space="1"
          m="1"
          bg="primary.100"
          rounded="md"
          overflow="hidden"
          opacity={isHovered || isFocused || isPressed ? "0.8" : "1"}>
          <Box w="50px">
            <AspectRatio w="100%" ratio={1} bg="gray.400">
              <Image source={{ uri: thumbnail }} alt="Thumbnail" />
            </AspectRatio>
          </Box>
          <Text>{title}</Text>
        </HStack>
      )}
    </Pressable>
  );
}
