import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

import {
  AspectRatio,
  Box,
  Column,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Pressable,
  Spinner,
  Stack,
  Text,
  useTheme,
} from "native-base";

import { Ionicons } from "@native-base/icons";
import { PlayerProps } from "../index";
import { usePlayerContext } from "providers/Player";

type Props = PlayerProps & {
  onPress: () => void;
};

export const SmallPlayer: React.VFC<Props> = ({
  currentTrack,
  progress,
  isBuffering,
  isPlaying,
  onTogglePlayback,
  onPress,
}) => {
  const { tabBarHeight } = usePlayerContext();
  const theme = useTheme();
  const barWidth = useRef(new Animated.Value(progress)).current;

  const progressPercent = barWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    easing: Easing.linear,
  });

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: progress,
      duration: progress >= 99 ? 100 : 3000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  }, [progress, barWidth]);

  return (
    <Stack position="absolute" bottom={0} marginBottom={tabBarHeight} w="100%">
      <Pressable onPress={onPress}>
        <HStack alignItems="center" bg="primary.100" shadow={2} overflow="hidden">
          <Column w="50px">
            <AspectRatio w="100%" ratio={1} bg="gray.400">
              {currentTrack?.artwork && (
                <Image
                  source={{
                    uri: currentTrack.artwork,
                  }}
                  alt="Thumbnail"
                />
              )}
            </AspectRatio>
          </Column>
          <Column flex="1" h="100%">
            <Animated.View
              style={[
                {
                  flex: 1,
                  height: "100%",
                  backgroundColor: theme.colors.gray[500],
                },
                {
                  width: progressPercent,
                },
              ]}
            />
            <Box position="absolute" pl="2" pt="1">
              <Text fontWeight="600" fontSize="sm">
                {currentTrack?.title}
              </Text>
              <Text fontSize="xs">{currentTrack?.artist}</Text>
            </Box>
          </Column>
          <IconButton
            onPress={onTogglePlayback}
            position="absolute"
            zIndex={1}
            right="0"
            disabled={isBuffering}
            icon={
              <>
                {!isPlaying && !isBuffering && (
                  <Icon as={Ionicons} name={"play"} color="white" size="sm" />
                )}
                {isPlaying && !isBuffering && (
                  <Icon as={Ionicons} name={"pause"} color="white" size="sm" />
                )}
                {!isPlaying && isBuffering && (
                  <HStack space={2} justifyContent="center">
                    <Spinner accessibilityLabel="Loading posts" />
                    <Heading color="primary.500" fontSize="md">
                      Loading
                    </Heading>
                  </HStack>
                )}
              </>
            }
          />
        </HStack>
      </Pressable>
    </Stack>
  );
};
