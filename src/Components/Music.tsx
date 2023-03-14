import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MusicProps } from "../Screens/HomeScreen";
import TrackDetails from "./TrackDetails";

interface PropsFromHome {
  track: MusicProps | any;
}

export interface stateDetails {
  handleModal: boolean;
}

const Music: React.FC<PropsFromHome> = ({ track }) => {
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
      <Modal show={showModal} onHide={handleModal}>
        <TrackDetails handleModal={handleModal} track={track} />
      </Modal>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          alt={track.title}
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
