import React from "react";
import { AspectRatio, Box, Image, Text } from "native-base";
import { TouchableOpacity } from "react-native";

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
    <TouchableOpacity onPress={onPress}>
      <Box w={_cardSize[cardSize]} m="1">
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
    </TouchableOpacity>
  );
}
