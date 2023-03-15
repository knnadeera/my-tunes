import React from "react";
import { Col, Row } from "react-bootstrap";
import Music from "../Components/Music";

const FavouritesScreen = () => {
  const favTracks = localStorage.getItem("favTrack")
    ? JSON.parse(localStorage.getItem("favTrack")!)
    : [];

  return (
    <>
      <Row className="mt-4">
        {favTracks.map((track: any) => (
          <Col key={track.key} sm={12} md={6} lg={4} xl={3}>
            <Music track={track} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FavouritesScreen;
