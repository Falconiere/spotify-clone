import React, { useEffect } from "react";

import playerCore, { Track } from "services/playerCore";
import { Player } from "domains/playerProvider";

interface IPlayerContext {
  setTracks: (currentTracks: Track[], startWithTrackId?: string) => void;
  setTabBarHeight: (tabHeight: number) => void;
  tabBarHeight: number;
}

const PlayerContext = React.createContext<IPlayerContext>({
  setTracks: () => undefined,
  setTabBarHeight: () => undefined,
  tabBarHeight: 40,
});

export const usePlayerContext = () => React.useContext<IPlayerContext>(PlayerContext);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlayerActive, setPlayerActive] = React.useState(false);
  const [tracks, setTracks] = React.useState<Track[]>([]);
  const [startWithTrack, setStartWithTrack] = React.useState<Track>();
  const [tabBarHeight, setTabBarHeight] = React.useState(40);

  const handleOnSetTracks = (currentTracks: Track[], startWithTrackId?: string) => {
    if (!currentTracks || !startWithTrackId) {
      return;
    }
    if (startWithTrackId && startWithTrack?.id !== startWithTrackId) {
      setStartWithTrack(currentTracks.find(({ id }) => id === startWithTrackId));
    }
    setTracks(currentTracks);
    setPlayerActive(true);
  };

  useEffect(() => {
    const resumeFromBackground = async () => {
      try {
        const _tracks = (await playerCore.getQueue()) as Track[];
        const _startWithTrackId = await playerCore.getCurrentTrack();
        handleOnSetTracks(_tracks, _tracks[_startWithTrackId]?.id);
      } catch (error) {
        console.error(error);
      }
    };
    resumeFromBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        setTracks: handleOnSetTracks,
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
