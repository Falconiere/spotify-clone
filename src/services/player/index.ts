import {
  State,
  Event,
  Capability,
  RepeatMode,
  Track as TrackType,
} from "react-native-track-player/lib/interfaces";

export * from "react-native-track-player/lib/hooks";

export interface Track extends TrackType {
  id: string;
  artwork?: string;
}
export { State, Event, Capability, RepeatMode };

export { default } from "react-native-track-player/lib/trackPlayer";
