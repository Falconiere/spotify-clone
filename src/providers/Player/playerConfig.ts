import TrackPlayer, { Capability, RepeatMode, State, Track } from "services/playerCore";

export async function initializePlayer(tracks: Track[]) {
  try {
    // if app was relaunched and music was already playing, we don't setup again.
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      return;
    }

    await TrackPlayer.stop();
    await TrackPlayer.reset();
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
        Capability.Skip,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
    });
    await TrackPlayer.add(tracks || []);
    TrackPlayer.setRepeatMode(RepeatMode.Queue);
  } catch (e) {
    console.error(e);
    // to-do handle error
  }
}

export async function togglePlayback(playbackState: State): Promise<State> {
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if (currentTrack == null) {
    // TODO: Perhaps present an error or restart the playlist?
    return State.Paused;
  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
      return State.Playing;
    } else {
      await TrackPlayer.pause();
      return State.Paused;
    }
  }
}

export async function skipTo(track: Track): Promise<Track> {
  const tracks = (await TrackPlayer.getQueue()) as Track[];
  const trackIdx = tracks.findIndex(t => t.id === track.id) || 0;
  await TrackPlayer.skip(trackIdx);
  return track;
}

export async function getCurrentTrack(): Promise<Track> {
  const trackIdx = await TrackPlayer.getCurrentTrack();
  const track = await TrackPlayer.getTrack(trackIdx);
  return track as Track;
}

export async function startPlaying(startWithTrack?: Track): Promise<Track> {
  await TrackPlayer.pause();
  const track = startWithTrack?.id
    ? await skipTo(startWithTrack)
    : await getCurrentTrack();
  return track;
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
