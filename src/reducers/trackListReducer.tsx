import { TRACK_LIST_FAIL, TRACK_LIST_REQUEST, TRACK_LIST_SUCCESS } from "../Constants/trackListConstants";

interface Action {
    type: string;
    payload?: { key: string };
  }
  
  interface State {
    trackList: { key: string }[];
  }

  
export const trackListReducer = (state: State = { trackList: [] },
    action: Action) => {
    switch (action.type) {
      case TRACK_LIST_REQUEST:
        return { loading: true, trackList: [] };
      case TRACK_LIST_SUCCESS:
        return { loading: false, trackList: action.payload };
      case TRACK_LIST_FAIL:
       return { loading: false, error: action.payload };
      default:
        return state;
    }
  };