import { useQuery } from "react-query";

export function useQueryToTracks() {
  const query = useQuery("TOP_TRACKS", () =>
    fetch(
      "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm",
    ),
  );
  return query;
}
