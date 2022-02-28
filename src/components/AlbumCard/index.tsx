import React from "react";
import { AspectRatio, Box, Image, Text, Pressable } from "native-base";

export type AlbumCardProps = {
  thumbnail: string;
  title: string;
  subTitle?: string;
  cardSize?: "sm" | "md" | "lg";
  id: string;
  onPress?: () => void;
};
const _cardSize = {
  sm: "100px",
  md: "150px",
  lg: "200px",
};
export function AlbumCard(props: AlbumCardProps) {
  const {
    thumbnail = "https://place-hold.it/150x150",
    title,
    subTitle,
    cardSize = "md",
    onPress,
  } = props;

  return (
    <Pressable onPress={onPress}>
      {({ isHovered, isFocused, isPressed }) => (
        <Box
          w={_cardSize[cardSize]}
          m="1"
          opacity={isHovered || isFocused || isPressed ? 0.8 : 1}>
          <AspectRatio w="100%" ratio={1} shadow={2} bg="gray.400">
            <Image source={{ uri: thumbnail }} alt="Thumbnail" />
          </AspectRatio>
          <Box>
            <Text fontSize="xs" fontWeight="900">
              {title}
            </Text>
            {subTitle && <Text fontSize="xs">{subTitle}</Text>}
          </Box>
        </Box>
      )}
    </Pressable>
  );
}
