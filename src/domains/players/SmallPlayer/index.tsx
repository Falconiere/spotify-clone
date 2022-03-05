import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Platform } from "react-native";

import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Spinner,
  Stack,
  Text,
  useTheme,
} from "native-base";

import { Ionicons } from "@native-base/icons";

import TrackPlayer, {
  Event,
  State,
  Track,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from "services/playerCore";

import {
  getProgress,
  initializePlayer,
  startPlaying,
  togglePlayback,
} from "providers/Player/playerConfig";

type Props = {
  isPlayerActive: boolean;
  tracks: Track[];
  startWithTrack?: Track;
};

export function SmallPlayer({ isPlayerActive, startWithTrack, tracks }: Props) {
  const theme = useTheme();

  const [currentTrack, setCurrentTrack] = useState<Track>();
  const localStatePlaybackState = useRef<State>(State.Playing);
  const barWidth = useRef(new Animated.Value(0)).current;

  const progressPercent = barWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    easing: Easing.linear,
  });

  const progress = useProgress();

  const playbackState = usePlaybackState();
  const isPlaying = playbackState === State.Playing;
  const isBuffering = playbackState === State.Buffering;
  const calculateProgress = getProgress(progress);

  useEffect(() => {
    if (!isPlayerActive) {
      return;
    }
    Animated.timing(barWidth, {
      toValue: calculateProgress,
      duration: calculateProgress >= 99 ? 100 : 3000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  }, [barWidth, isPlayerActive, calculateProgress]);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== undefined) {
      barWidth.setValue(0);
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setCurrentTrack(track as Track);
    }
  });

  useEffect(() => {
    if (!isPlayerActive) {
      return;
    }
    const startPlayer = async () => {
      try {
        await initializePlayer(tracks);
        const _currentTrack = await startPlaying(startWithTrack);
        setCurrentTrack(_currentTrack);
        if (localStatePlaybackState.current === State.Playing) {
          TrackPlayer.play();
        }
      } catch (error) {
        console.error(error);
      }
    };
    startPlayer();
  }, [isPlayerActive, startWithTrack, tracks]);

  const handleOnTogglePlayback = async () => {
    const state = await togglePlayback(playbackState);
    localStatePlaybackState.current = state;
  };

  if (!isPlayerActive) {
    return null;
  }

  return (
    <Stack
      position="absolute"
      bottom={Platform.OS === "ios" ? 20 : 50}
      marginBottom={Platform.OS === "ios" ? 1 : 0}
      p="4"
      w="100%">
      <HStack
        alignItems="center"
        bg="primary.100"
        shadow={2}
        rounded="md"
        overflow="hidden">
        <Box w="50px">
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
        </Box>
        <Box flex="1" h="100%">
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
        </Box>
        <IconButton
          onPress={handleOnTogglePlayback}
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
    </Stack>
  );
}
