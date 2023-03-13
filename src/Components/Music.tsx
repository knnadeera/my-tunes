import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MusicTrack } from "../Screens/HomeScreen";
import TrackDetails from "./TrackDetails";

interface MusicProps {
  track: MusicTrack | any;
}

export interface stateDetails {
  state: boolean;
}

const Music: React.FC<MusicProps> = ({ track }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {/* <TrackDetails state={showModal} track={track} /> */}
      <Modal show={showModal} onHide={handleModal}>
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
      <div
        style={{
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          width: "151px",
          transition: "transform 0.5s ease-out",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          cursor: "pointer",
        }}
        onClick={handleModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={track.images.coverart}
          width="150px"
          style={{ borderRadius: "5px" }}
        />
        <p>{track.title}</p>
      </div>
    </>
  );
};

export default Music;
