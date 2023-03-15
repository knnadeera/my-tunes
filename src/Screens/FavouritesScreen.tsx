import React from "react";
import { Col, Row } from "react-bootstrap";
import Music from "../Components/Music";
import { MusicProps } from "../Screens/HomeScreen";

interface FavScreenProps{
  updated:MusicProps|any
  updatedFav:any
}

const FavouritesScreen:React.FC<FavScreenProps> = ({updated, updatedFav}) => {
  const favTracks = localStorage.getItem("favTrack")
    ? JSON.parse(localStorage.getItem("favTrack")!)
    : [];

  return (
    <>
      <Row className="mt-4">
        {updatedFav.map((track: any) => (
          <Col key={track.key} sm={12} md={6} lg={4} xl={3}>
            <Music track={track} updated={updated} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FavouritesScreen;
