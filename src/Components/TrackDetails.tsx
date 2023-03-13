import React from "react";
import { Button, Modal } from "react-bootstrap";
import { MusicTrack } from "../Screens/HomeScreen";
import { stateDetails } from "./Music";

interface TrackProps {
  handleModal: stateDetails | any;
  track: MusicTrack | any;
}

const TrackDetails: React.FC<TrackProps> = ({ handleModal, track }) => {
  const favHandler = () => {
    console.log(track);
  };
  const favRemoveHandler = () => {
    console.log(track);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{track.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img alt={track.title} src={track.images.coverart}></img>
        <h6>{track.share.subject}</h6>
        <i
          className="fa-sharp fa-regular fa-star"
          style={{ cursor: "pointer" }}
          onClick={favHandler}
        ></i>
        <i
          className="fa-sharp fa-solid fa-star"
          style={{ cursor: "pointer" }}
          onClick={favRemoveHandler}
        ></i>
        <br />
        <a href={track.url} target="_blank">
          Click here to listen {">>"}
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModal}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </>
  );
};

export default TrackDetails;
