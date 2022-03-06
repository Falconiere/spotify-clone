import { useEffect, useMemo, useRef, useState } from "react";

import {
  getProgress,
  initializePlayer,
  seekTo,
  skipToByIndex,
  startPlaying,
  togglePlayback,
} from "providers/Player/playerConfig";

import React from "react";
import PlayerCore, {
  Track,
  State,
  Event,
  useProgress,
  usePlaybackState,
  useTrackPlayerEvents,
  ProgressState,
} from "services/player";

import { SmallPlayer } from "./Small";
import { FullPlayer } from "./Full";
import { usePlayerContext } from "providers/Player";

type Props = {
  isPlayerActive: boolean;
  tracks: Track[];
  startWithTrack?: Track;
};

export type PlayerProps = {
  currentTrack?: Track;
  progress: ProgressState;
  isBuffering: boolean;
  isPlaying: boolean;
  onTogglePlayback: () => void;
};

export function Player({ isPlayerActive, startWithTrack, tracks }: Props) {
  const playerCtx = usePlayerContext();
  const [isFullPlayerOpen, setIsFullPlayerOpen] = useState(false);

  const [currentTrack, setCurrentTrack] = useState<Track>();
  const localStatePlaybackState = useRef<State>(State.Playing);
  const progress = useProgress();

  const playbackState = usePlaybackState();
  const isPlaying = playbackState === State.Playing;
  const isBuffering = playbackState === State.Buffering;
  const calculateProgress = getProgress(progress);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== undefined) {
      const track = await PlayerCore.getTrack(event.nextTrack);
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
          PlayerCore.play();
        }
      } catch (error) {
        console.error(error);
      }
    };
    startPlayer();
  }, [isPlayerActive, startWithTrack, tracks]);

  useEffect(() => {
    if (isPlaying && !isPlayerActive) {
      playerCtx.setIsActivePlayer(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentTrackIdx = useMemo(() => {
    return tracks.findIndex(({ id }) => id === currentTrack?.id);
  }, [currentTrack?.id, tracks]);

  const handleOnTogglePlayback = async () => {
    const state = await togglePlayback(playbackState);
    localStatePlaybackState.current = state;
  };

  const handleOnTogglePlayer = () => setIsFullPlayerOpen(!isFullPlayerOpen);

  const handleOnSkipByIndex = async (index: number) => {
    await skipToByIndex(index);
  };

  if (!isPlayerActive) {
    return null;
  }

  return (
    <>
      <SmallPlayer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        calculateProgress={calculateProgress}
        onTogglePlayback={handleOnTogglePlayback}
        onPress={handleOnTogglePlayer}
      />
      <FullPlayer
        isOpen={isFullPlayerOpen}
        tracks={tracks}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        progress={progress}
        onTogglePlayback={handleOnTogglePlayback}
        onClose={handleOnTogglePlayer}
        currentTrackIdx={currentTrackIdx}
        onSkip={handleOnSkipByIndex}
        onSeekTo={seekTo}
      />
    </>
  );
}
