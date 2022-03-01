import { Box, Pressable, Text } from "native-base";
import React from "react";

type Props = {
  title: string;
  color: string;
  onPress?: () => void;
};

export function GenreCard(props: Props) {
  const { title, color, onPress } = props;
  return (
    <Pressable w="50%" p="1" onPress={onPress}>
      {({ isHovered, isFocused, isPressed }) => (
        <Box
          bg={color}
          h="80px"
          rounded="sm"
          p="2"
          opacity={isHovered || isFocused || isPressed ? 0.8 : 1}>
          <Text fontSize="sm" fontWeight="700">
            {title}
          </Text>
        </Box>
      )}
    </Pressable>
  );
}
