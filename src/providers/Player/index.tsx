import React from "react";
import { SmallPlayer } from "domains/players/SmallPlayer";
import { Track } from "services/playerCore";

interface IPlayerContext {
  setTracks: (currentTracks: Track[], startWithTrackId?: string) => void;
}

const PlayerContext = React.createContext<IPlayerContext>({
  setTracks: () => undefined,
});

export const usePlayerContext = () => React.useContext<IPlayerContext>(PlayerContext);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlayerActive, setPlayerActive] = React.useState(false);
  const [tracks, setTracks] = React.useState<Track[]>([]);
  const [startWithTrack, setStartWithTrack] = React.useState<Track>();

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

  return (
    <PlayerContext.Provider
      value={{
        setTracks: handleOnSetTracks,
      }}>
      {children}
      <SmallPlayer
        isPlayerActive={isPlayerActive}
        startWithTrack={startWithTrack}
        tracks={tracks}
      />
    </PlayerContext.Provider>
  );
}
