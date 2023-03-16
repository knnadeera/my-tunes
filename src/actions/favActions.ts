import axios from "axios";
import { RootState } from "../store";
import { Dispatch } from "redux";
import { FAV_ADD_TRACK, FAV_REMOVE_TRACK } from "../Constants/FavConstants";

interface TrackData {
  key: string;
  title: string;
  images: {
    coverart: {
      coverart: string;
    };
  };
  url: string;
  share: {
    subject: {
      subject: string;
    };
  };
}

interface TrackKey {
  key: String;
}

export interface AddToFavAction {
  type: typeof FAV_ADD_TRACK;
  payload: TrackData;
}

export interface RemoveFromFavAction {
  type: typeof FAV_REMOVE_TRACK;
  payload: TrackKey;
}

export const addToFav =
  (trackData: TrackData) =>
  async (
    dispatch: Dispatch<AddToFavAction>,
    getState: () => RootState
  ): Promise<void> => {
    const { coverart } = trackData.images;
    const { subject } = trackData.share;

    const track = {
      key: trackData.key,
      title: trackData.title,
      images: {
        coverart,
      },
      share: {
        subject,
      },
      url: trackData.url,
    };

    dispatch({
      type: FAV_ADD_TRACK,
      payload: track,
    });

    localStorage.setItem("favTrack", JSON.stringify(getState().fav?.favTracks));
  };

export const removeFromFav =
  (trackKey: TrackKey) =>
  async (
    dispatch: Dispatch<RemoveFromFavAction>,
    getState: () => RootState
  ): Promise<void> => {
    dispatch({
      type: FAV_REMOVE_TRACK,
      payload: trackKey,
    });

    localStorage.setItem("favTrack", JSON.stringify(getState().fav?.favTracks));
  };
