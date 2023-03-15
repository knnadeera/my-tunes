import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { favReducer } from "./reducers/favReducer";
import { trackListReducer } from "./reducers/trackListReducer";

const reducer = combineReducers({
  fav: favReducer,
  trackList: trackListReducer,
});

const favTracksFromLocalStorage = localStorage.getItem("favTrack")
  ? JSON.parse(localStorage.getItem("favTrack")!)
  : [];

const initialState = {
  fav: {
    favTracks: favTracksFromLocalStorage,
  },
};

const middleware = [thunk];

export type RootState = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
