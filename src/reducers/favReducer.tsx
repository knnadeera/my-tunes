import { FAV_ADD_TRACK } from "../Constants/FavConstant";

interface Action {
  type: string;
  payload?: { track: string };
}

interface State {
  favTracks: { track: string }[];
}

export const favReducer = (
  state: State = { favTracks: [] },
  action: Action
) => {
  switch (action.type) {
    case FAV_ADD_TRACK:
      const favTrack = action.payload;

      if (favTrack) {
        const existFavTracks = state.favTracks.find(
          (x): x is { track: string } => x.track === favTrack.track
        );

        if (existFavTracks) {
          return {
            ...state,
            favTracks: state.favTracks.map((x) =>
              x.track === existFavTracks.track ? favTrack : x
            ),
          };
        } else {
          return {
            ...state,
            favTracks: [...state.favTracks, favTrack],
          };
        }
      }
      break;
    default:
      return state;
  }
};
