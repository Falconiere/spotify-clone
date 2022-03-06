import React from "react";
import { FlatList, View } from "native-base";

import { useRoute } from "@react-navigation/native";

import { PlayListRouteProp } from "routes/types";
import { Header } from "domains/playList/Header";
import { mockPlayLists } from "services/api/mockData";
import { TrackCard } from "components/TrackCard";
import { usePlayerContext } from "providers/Player";
import { Track } from "services/player";

export const PlayList: React.VFC = () => {
  const { playListId } = useRoute<PlayListRouteProp["route"]>().params;

  const playList = mockPlayLists.find(({ id }) => id === playListId);
  const playerCtx = usePlayerContext();

  const handlePressTrack = (track: Track) => {
    if (!playList?.tracks) {
      return;
    }
    playerCtx.setTracks(playList?.tracks, track);
  };

  return (
    <View bg="primary.50" flex={1}>
      <Header />
      <FlatList
        data={playList?.tracks}
        renderItem={({ item }) => (
          <TrackCard key={item.id} {...item} onPress={() => handlePressTrack(item)} />
        )}
      />
    </View>
  );
};
