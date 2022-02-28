import React from "react";
import { AspectRatio, Box, HStack, Image, Pressable } from "native-base";
import { Platform } from "react-native";

type IPlayerContext = {
  isPlaying: boolean;
  togglePlay: () => void;
};

const PlayerContext = React.createContext<IPlayerContext>({
  isPlaying: false,
  togglePlay: () => undefined,
});
export const usePlayerContext = () =>
  React.useContext<IPlayerContext>(PlayerContext);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const thumbnail = "https://place-hold.it/50x50";
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        togglePlay: () => setIsPlaying(!isPlaying),
      }}>
      {children}
      {isPlaying && (
        <Pressable
          position="absolute"
          bottom={Platform.OS === "ios" ? 20 : 50}
          marginBottom={Platform.OS === "ios" ? 1 : 0}
          p="2"
          w="100%">
          <HStack bg="primary.100" shadow={2} rounded="md" overflow="hidden">
            <Box w="50px">
              <AspectRatio w="100%" ratio={1} bg="gray.400">
                <Image source={{ uri: thumbnail }} alt="Thumbnail" />
              </AspectRatio>
            </Box>
          </HStack>
        </Pressable>
      )}
    </PlayerContext.Provider>
  );
}
