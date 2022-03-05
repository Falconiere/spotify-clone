import { Track } from "services/playerCore";

export interface IPlayList {
  id: string;
  title: string;
  subTitle: string;
  artwork: string;
  tracks: Track[];
}
