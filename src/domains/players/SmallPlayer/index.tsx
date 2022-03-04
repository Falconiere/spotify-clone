import React from "react";
import { Platform } from "react-native";

import { useQueryTopTracks } from "api/useQueryToTracks";
import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from "native-base";
import { Ionicons } from "@native-base/icons";

import TrackPlayer, {
  Event,
  State,
  Track,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from "react-native-track-player";
import {
  getProgress,
  initializePlayer,
  togglePlayback,
} from "providers/Player/player";

export function SmallPlayer({ isPlayerActive }: { isPlayerActive: boolean }) {
  const [currentTrack, setCurrentTrack] = React.useState<Track | undefined>();
  const { data: tracks } = useQueryTopTracks();
  const progress = useProgress();
  const playbackState = usePlaybackState();
  const isPlaying = playbackState === State.Playing;
  const thumbnail = "https://place-hold.it/50x50";
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setCurrentTrack(track);
    }
  });

  React.useEffect(() => {
    initializePlayer(tracks);
  }, [tracks]);

  React.useEffect(() => {
    if (!isPlayerActive) {
      TrackPlayer.pause();
      return;
    }
    if (isPlayerActive && tracks && tracks.length > 0 && !currentTrack) {
      (async () => {
        setCurrentTrack(tracks[0]);
        await TrackPlayer.play();
      })();
    }
  }, [currentTrack, tracks, isPlayerActive, playbackState]);

  if (!isPlayerActive) {
    return null;
  }

  return (
    <Stack
      position="absolute"
      bottom={Platform.OS === "ios" ? 20 : 50}
      marginBottom={Platform.OS === "ios" ? 1 : 0}
      p="2"
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
                  uri: String(currentTrack.artwork) || thumbnail,
                }}
                fallbackSource={{ uri: thumbnail }}
                alt="Thumbnail"
              />
            )}
          </AspectRatio>
        </Box>
        <Box flex="1" h="100%">
          <Box bg="gray.900" h="100%" w={`${getProgress(progress)}%`} />
          <Box position="absolute" pl="2" pt="1">
            <Text fontWeight="600" fontSize="sm">
              {currentTrack?.artist}
            </Text>
            <Text fontWeight="600" fontSize="xs">
              {currentTrack?.title}
            </Text>
          </Box>
        </Box>
        <IconButton
          onPress={() => togglePlayback(playbackState)}
          position="absolute"
          zIndex={1}
          right="0"
          icon={
            !isPlaying ? (
              <Icon as={Ionicons} name={"play"} color="white" size="sm" />
            ) : (
              <Icon as={Ionicons} name={"pause"} color="white" size="sm" />
            )
          }
        />
      </HStack>
    </Stack>
  );
}
