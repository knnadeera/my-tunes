import axios from "axios";
import { RootState } from "../store";
import { Dispatch } from "redux";
import { FAV_ADD_TRACK } from "../Constants/FavConstant";


interface TrackData {
  key: string;
  title: string;
  images: {
    coverart: {
      coverart: string;
    };
  };
}

export interface AddToFavAction {
  type: typeof FAV_ADD_TRACK;
  payload: TrackData;
}

export const addToFav = (trackData: TrackData) => async (
  dispatch: Dispatch<AddToFavAction>,
  getState: () => RootState
): Promise<void> => {

  const { coverart } = trackData.images;

  const track = {
    key: trackData.key,
    title: trackData.title,
    images: {
      coverart,
    },
  };

  dispatch({
    type: FAV_ADD_TRACK,
    payload: track,
  });

  localStorage.setItem("favTrack", JSON.stringify(getState().fav));
};

