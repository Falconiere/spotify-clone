import TrackPlayer, {
  Capability,
  RepeatMode,
  State,
  Track,
} from "react-native-track-player";

export async function initializePlayer(tracks?: Track[]) {
  try {
    // if app was relaunched and music was already playing, we don't setup again.
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      return;
    }

    await TrackPlayer.destroy();
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
    });

    await TrackPlayer.add(tracks || []);
    TrackPlayer.setRepeatMode(RepeatMode.Queue);
  } catch (e) {
    console.log(e);
    // to-do handle error
  }
}

export async function togglePlayback(playbackState: State) {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {
    // TODO: Perhaps present an error or restart the playlist?
  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
}

export function getProgress({
  position,
  duration,
}: {
  position: number;
  duration: number;
}) {
  if (!duration) {
    return 0;
  }
  return Math.floor((position / duration) * 100);
}
export function secondsToHHMMSS(seconds: number | string) {
  // credits - https://stackoverflow.com/a/37096512
  seconds = Number(seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : "";
  const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : "00:";
  const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : "00";
  return `${hrs}${mins}${scnds}`;
}
