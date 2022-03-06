import React from "react";

import { Player } from "domains/player";
import { Track } from "services/player";

interface IPlayerContext {
  setTracks: (currentTracks: Track[], _startWithTrack?: Track) => void;
  setTabBarHeight: (tabHeight: number) => void;
  setIsActivePlayer: (isActivePlayer: boolean) => void;
  tabBarHeight: number;
}

const PlayerContext = React.createContext<IPlayerContext>({
  setTracks: () => undefined,
  setTabBarHeight: () => undefined,
  setIsActivePlayer: () => undefined,
  tabBarHeight: 40,
});

export const usePlayerContext = () => React.useContext<IPlayerContext>(PlayerContext);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlayerActive, setIsActivePlayer] = React.useState(false);
  const [tracks, setTracks] = React.useState<Track[]>([]);
  const [startWithTrack, setStartWithTrack] = React.useState<Track>();
  const [tabBarHeight, setTabBarHeight] = React.useState(40);

  const handleOnSetTracks = (currentTracks: Track[], _startWithTrack?: Track) => {
    if (!currentTracks || !_startWithTrack) {
      return;
    }

    if (_startWithTrack && _startWithTrack?.id !== startWithTrack?.id) {
      setStartWithTrack(_startWithTrack);
    }
    setTracks(currentTracks);
    setIsActivePlayer(true);
  };

  return (
    <PlayerContext.Provider
      value={{
        setTracks: handleOnSetTracks,
        setIsActivePlayer,
        setTabBarHeight,
        tabBarHeight,
      }}>
      {children}
      <Player
        isPlayerActive={isPlayerActive}
        startWithTrack={startWithTrack}
        tracks={tracks}
      />
    </PlayerContext.Provider>
  );
}
