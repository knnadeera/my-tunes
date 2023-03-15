import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Music from "../Components/Music";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";
import FavTracks from "../Components/FavTracks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { listTracks } from "../actions/trackListAction";

export interface MusicProps {
  artists: [];
  hub: {};
  images: {};
  key: string;
  layout: string;
  share: {};
  subtitle: string;
  title: string;
  type: string;
  url: string;
  updatedFav: any;
  updated: any;
}

interface HomeProps {
  updated: any;
  updatedFav: any;
}
const responsive = {
  xldesktop: {
    breakpoint: { max: 1920, min: 1441 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 5,
  },
  tablet2: {
    breakpoint: { max: 768, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const HomeScreen: React.FC<HomeProps> = ({ updated, updatedFav }) => {
  const dispatch = useDispatch();

  const tracks = useSelector((state: any) => state.trackList);
  const { loading, error, trackList } = tracks;

  useEffect(() => {
    const action: any = listTracks();
    dispatch(action);
  }, [dispatch]);

  return (
    <div
      style={{
        marginTop: "1rem",
        maxWidth: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h6 style={{ width: "20%", color: "gray" }}>Released this week</h6>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#93a5b2",
            marginLeft: "1rem",
          }}
        ></div>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // server-side rendering fallback
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-0-px"
      >
        {trackList.map((track: any) => (
          <Card
            style={{
              width: "152px",
              border: "none",
            }}
            key={track.key}
          >
            <Music track={track} updated={updated} />
          </Card>
        ))}
      </Carousel>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h6 style={{ width: "20%", color: "gray" }}>Featured Playlists</h6>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#93a5b2",
            marginLeft: "1rem",
          }}
        ></div>
      </div>
      <FavTracks updatedFav={updatedFav} updated={updated} />
    </div>
  );
};

export default HomeScreen;
