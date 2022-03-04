import { SmallPlayer } from "domains/players/SmallPlayer";
import React from "react";

type IPlayerContext = {
  isPlayerActive: boolean;
  togglePlayer: () => void;
};

const PlayerContext = React.createContext<IPlayerContext>({
  isPlayerActive: false,
  togglePlayer: () => undefined,
});

export const usePlayerContext = () => React.useContext<IPlayerContext>(PlayerContext);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlayerActive, setPlayerActive] = React.useState(false);
  return (
    <PlayerContext.Provider
      value={{
        isPlayerActive,
        togglePlayer: () => {
          setPlayerActive(!isPlayerActive);
        },
      }}>
      {children}
      <SmallPlayer isPlayerActive={isPlayerActive} />
    </PlayerContext.Provider>
  );
}
