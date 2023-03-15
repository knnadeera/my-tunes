import axios from "axios";
import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { addToFav, AddToFavAction } from "../actions/favActions";
import { MusicProps } from "../Screens/HomeScreen";
import { RootState } from "../store";
import { stateDetails } from "./Music";

type AddToFavAsyncAction = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  AddToFavAction
>;

interface TrackProps {
  handleModal: stateDetails | any;
  track: MusicProps | any;
}

const TrackDetails: React.FC<TrackProps> = ({ handleModal, track }) => {
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();

  const trackData = {
    key: track.key,
    title: track.title,
    images: { coverart: track.images.coverart },
  };

  const favHandler = () => {
    // const action: AddToFavAsyncAction = addToFav(trackData);
    // dispatch(action);
    setFav(true);
    console.log(trackData);
  };

  const favRemoveHandler = () => {
    console.log(track.key);
    setFav(false);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{track.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img alt={track.title} src={track.images.coverart}></img>
          <h6>{track.share.subject}</h6>
        </div>
        <Container>{!fav && (
          <i
            className="fa-sharp fa-regular fa-star"
            style={{ cursor: "pointer" }}
            onClick={favHandler}
          ></i>
        )}
        {fav && (
          <i
            className="fa-sharp fa-solid fa-star"
            style={{ cursor: "pointer" }}
            onClick={favRemoveHandler}
          ></i>
        )}</Container>
        <br />
        <a href={track.url} target="_blank">
          Click here to listen {">>"}
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModal}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
};

export default TrackDetails;
