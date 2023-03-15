import { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToFav, removeFromFav } from "../actions/favActions";
import { MusicProps } from "../Screens/HomeScreen";
import { stateDetails } from "./Music";

interface TrackProps {
  handleModal: stateDetails | any;
  track: MusicProps | any;
  updated: any;
}

const TrackDetails: React.FC<TrackProps> = ({
  handleModal,
  track,
  updated,
}) => {
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();

  const favTracks = localStorage.getItem("favTrack")
    ? JSON.parse(localStorage.getItem("favTrack")!)
    : [];

  useEffect(() => {
    if (favTracks) {
      const existFavTracks = favTracks.find((x: any) => x.key === track.key);
      if (existFavTracks) {
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }, [favTracks]);

  const trackData = {
    key: track.key,
    title: track.title,
    images: { coverart: track.images.coverart },
    share: { subject: track.share.subject },
    url: track.url,
  };

  const favHandler = () => {
    const action: any = addToFav(trackData);
    dispatch(action);
    setFav(true);
    const favTracks = localStorage.getItem("favTrack")
      ? JSON.parse(localStorage.getItem("favTrack")!)
      : [];
    updated(favTracks);
  };

  const favRemoveHandler = () => {
    const action: any = removeFromFav(trackData.key);
    dispatch(action);
    setFav(false);
    const favTracks = localStorage.getItem("favTrack")
      ? JSON.parse(localStorage.getItem("favTrack")!)
      : [];
    updated(favTracks);
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
        <Container>
          {!fav && (
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
          )}
        </Container>
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
