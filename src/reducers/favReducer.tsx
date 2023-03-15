import { FAV_ADD_TRACK, FAV_REMOVE_TRACK } from "../Constants/FavConstant";

interface Action {
  type: string;
  payload?: { key: string };
}

interface State {
  favTracks: { key: string }[];
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
          (x) => x.key === favTrack.key
        );

        if (existFavTracks) {
          return {
            ...state,
            favTracks: state.favTracks.map((x) =>
              x.key === existFavTracks.key ? favTrack : x
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
    case FAV_REMOVE_TRACK:
      return {
        ...state,
        favTracks: state.favTracks.filter((x:any) => x.key !== action.payload),
      };

    default:
      return state;
  }
};
