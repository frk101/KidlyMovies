import { MOVIES_MOVIE, MOVIES_MOVIE_URL } from "../types/movies";

export function movie(movieId) {
  return {
    type: MOVIES_MOVIE,
    payload: {
      request: {
        url: `${MOVIES_MOVIE_URL}/${movieId}`,
      },
    },
  };
}
