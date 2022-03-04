import { Track } from "react-native-track-player";
import { useQuery } from "react-query";
import { tracks } from "./mockData";

// https://developer.napster.com/examples

// Look up to the future
// https://developer.napster.com/examples
// export type ITrackResponse = {
//   id: string;
//   albumId: string;
//   previewURL: string;
//   albumName: string;
//   artistName: string;
//   name: string;
// };

// const getAlbumImage = (albumId: string) => {
//   return `https://direct.rhapsody.com/imageserver/v2/albums/${albumId}/images/300x300.jpg`;
// };

export function useQueryTopTracks() {
  const query = useQuery<Track[]>("TOP_TRACKS", (): Track[] => tracks);
  return query;
}
