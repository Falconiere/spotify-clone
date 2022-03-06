import { Track } from "services/player";

export interface IPlayList {
  id: string;
  title: string;
  subTitle: string;
  artwork: string;
  tracks: Track[];
}
