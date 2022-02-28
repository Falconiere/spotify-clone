import { AlbumCardProps } from "components/AlbumCard";
import { HorizontalAlbumCard } from "components/HorizontalAlbumCard";
import { HStack } from "native-base";

import React from "react";

type Props = {
  data: Array<AlbumCardProps>;
};
export function LastAlbumsPlayed(props: Props) {
  const { data } = props;
  return (
    <HStack flexWrap="wrap">
      {data.map(item => (
        <HorizontalAlbumCard {...item} key={item.id} />
      ))}
    </HStack>
  );
}
