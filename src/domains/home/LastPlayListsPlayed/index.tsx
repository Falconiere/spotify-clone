import React from "react";
import { PlayListCardProps } from "components/PlayListCard";
import { HorizontalPlayListCard } from "components/HorizontalPlayListCard";
import { HStack } from "native-base";

type Props = {
  data: Array<PlayListCardProps>;
};

export function LastPlayListsPlayed(props: Props) {
  const { data } = props;
  return (
    <HStack flexWrap="wrap">
      {data.map(item => (
        <HorizontalPlayListCard {...item} key={item.id} />
      ))}
    </HStack>
  );
}
