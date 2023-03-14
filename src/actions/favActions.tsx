import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../store";
import { FAV_ADD_TRACK } from "../Constants/FavConstant";

interface AddToFavAction {
  type: typeof FAV_ADD_TRACK;
  payload: {
    track: string;
    name: string;
    image: string;
  };
}

type FavActionTypes = AddToFavAction;

export const addToFav = (trackData: TrackData): Promise<void> => {
  return async (dispatch: Dispatch<FavActionTypes>, getState: () => RootState) => {
    const { data } = trackData

    const track = {
      name: trackData.title,
      image: trackData.images.coverart,
      track: data,
    };

    dispatch({
      type: FAV_ADD_TRACK,
      payload: track,
    });

    const { favTracks } = getState().fav;
    localStorage.setItem("favTracks", JSON.stringify(favTracks));
  };
};
