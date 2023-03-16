import axios from "axios";
import { Dispatch } from "redux";
// import data from "../Assets/data";
import {
  TRACK_LIST_FAIL,
  TRACK_LIST_REQUEST,
  TRACK_LIST_SUCCESS,
} from "../Constants/trackListConstants";

interface CustomError extends Error {
  response?: {
    data: {
      message: string;
    };
  };
}

export const listTracks =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: TRACK_LIST_REQUEST });

        const response = await fetch(
          "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "c5f01b49b1msh260f71874aca913p150a01jsncb5ddeb5b53d",
              "X-RapidAPI-Host": "shazam.p.rapidapi.com",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

      dispatch({ type: TRACK_LIST_SUCCESS, payload: data });
    } catch (error: unknown) {
      if (isCustomError(error)) {
        const errorMessage =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: TRACK_LIST_FAIL, payload: errorMessage });
      } else {
        dispatch({ type: TRACK_LIST_FAIL, payload: "Unknown error" });
      }
    }

    function isCustomError(error: unknown): error is CustomError {
      return (
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof (error as CustomError).message === "string"
      );
    }
  };
