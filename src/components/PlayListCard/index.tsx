import React from "react";
import { AspectRatio, Box, Image, Text, Pressable, Stack } from "native-base";

import { IPlayList } from "services/api/types";
export interface PlayListCardProps extends IPlayList {
  cardSize?: "xs" | "sm" | "md" | "lg";
  id: string;
  onPress?: () => void;
  horizontal?: boolean;
}

const _cardSize = {
  xs: "50px",
  sm: "100px",
  md: "150px",
  lg: "200px",
};

export const PlayListCard: React.VFC<PlayListCardProps> = props => {
  const { artwork, title, subTitle, cardSize = "md", horizontal, onPress } = props;
  return (
    <Pressable onPress={onPress}>
      {({ isHovered, isFocused, isPressed }) => (
        <Stack
          m="1"
          direction={horizontal ? "row" : "column"}
          alignItems={horizontal ? "center" : "flex-start"}
          space="2"
          opacity={isHovered || isFocused || isPressed ? 0.8 : 1}>
          <Box w={_cardSize[cardSize]}>
            <AspectRatio w="100%" ratio={1} shadow={2} bg="gray.400">
              {artwork && <Image source={{ uri: artwork }} alt="Thumbnail" />}
            </AspectRatio>
          </Box>
          <Stack flexWrap="nowrap">
            <Text fontSize="xs" fontWeight="900">
              {title}
            </Text>
            {subTitle && <Text fontSize="xs">{subTitle}</Text>}
          </Stack>
        </Stack>
      )}
    </Pressable>
  );
};
