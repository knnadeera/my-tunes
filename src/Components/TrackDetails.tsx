import React from "react";
import { Button, Modal } from "react-bootstrap";
import { MusicTrack } from "../Screens/HomeScreen";
import { stateDetails } from "./Music";

interface TrackProps {
  state: stateDetails | any;
  track: MusicTrack | any;
}

const TrackDetails: React.FC<TrackProps> = ({ state, track }) => {
  console.log(state.showModal)
    return (
    <Modal onHide={state.handleModal}>
      <Modal.Header closeButton>
        <Modal.Title>{track.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={track.images.coverart}></img>
        <h6>{track.share.subject}</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={track.handleModal}>
          Close
        </Button>
        <Button variant="primary" onClick={track.handleModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrackDetails;
