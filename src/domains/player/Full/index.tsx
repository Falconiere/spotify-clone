import React, { useEffect, useRef } from "react";
import Carousel from "react-native-snap-carousel";
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Modal,
  Slider,
  Stack,
  Text,
  View,
} from "native-base";
import { Ionicons, Entypo } from "@native-base/icons";

import { PlayerProps } from "../index";
import { Track } from "services/player";
import { Dimensions } from "react-native";

type Props = PlayerProps & {
  onClose: () => void;
  isOpen: boolean;
  currentTrackIdx: number;
  tracks: Track[];
  onSkip: (index: number) => void;
  onSeekTo: (position: number) => void;
};

const { width } = Dimensions.get("window");

const SLIDER_WIDTH = width - 12;
const ITEM_SLIDER_WIDTH = SLIDER_WIDTH;

export const FullPlayer: React.VFC<Props> = ({
  onClose,
  isOpen,
  onSkip,
  currentTrack,
  currentTrackIdx,
  tracks,
  progress,
  onSeekTo,
}) => {
  const sliderRef = useRef<typeof Slider>(null);
  const carouselRef = useRef<Carousel<Track>>(null);

  const { position, duration } = progress;

  useEffect(() => {
    carouselRef.current?.snapToItem(currentTrackIdx);
  }, [currentTrackIdx]);

  return (
    <Modal
      isOpen={isOpen}
      bg="primary.50"
      animationPreset="slide"
      safeArea
      onClose={onClose}>
      <View flex="1" width="100%" height="100%" p="2">
        <HStack alignItems="center" justifyContent="space-between">
          <IconButton
            onPress={onClose}
            icon={<Icon as={Ionicons} name="chevron-down" color="white" size="md" />}
          />
          <Heading size="sm">{currentTrack?.title}</Heading>
          <IconButton
            icon={
              <Icon as={Entypo} name="dots-three-horizontal" color="white" size="sm" />
            }
          />
        </HStack>
        <Stack>
          {tracks?.length && (
            <Carousel
              ref={carouselRef}
              data={tracks}
              onSnapToItem={onSkip}
              renderItem={({ item }) => (
                <View p="2">
                  <Box w="100%">
                    <AspectRatio w="100%" ratio={1}>
                      <Image source={{ uri: item.artwork }} alt="artwork" />
                    </AspectRatio>
                  </Box>
                </View>
              )}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_SLIDER_WIDTH}
              itemHeight={ITEM_SLIDER_WIDTH}
            />
          )}
        </Stack>
        <Box p="2">
          <Heading>{currentTrack?.title}</Heading>
          <Text>{currentTrack?.artist}</Text>
        </Box>
        <Box p="3">
          <Slider
            ref={sliderRef}
            w="100%"
            defaultValue={0}
            minValue={0}
            maxValue={duration}
            value={position}
            onChangeEnd={onSeekTo}
            accessibilityLabel="Track slider progress">
            <Slider.Track>
              <Slider.FilledTrack bg="white" />
            </Slider.Track>
            <Slider.Thumb bg="white" />
          </Slider>
        </Box>
      </View>
    </Modal>
  );
};
