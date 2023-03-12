import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MusicTrack } from "../Screens/HomeScreen";

interface MusicProps {
  track: MusicTrack | any;
}

const Music: React.FC<MusicProps> = ({ track }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{track.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={track.images.coverart}></img>
            <h6>{track.share.subject}</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        style={{
          width: "152px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={handleModal}
      >
        <img src={track.images.coverart} width="150px" />
        <p>{track.title}</p>
      </div>
    </>
  );
};

export default Music;
