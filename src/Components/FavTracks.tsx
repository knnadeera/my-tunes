import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Music from "../Components/Music";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";

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

const FavTracks = () => {
  const favTracks = localStorage.getItem("favTrack")
    ? JSON.parse(localStorage.getItem("favTrack")!)
    : [];

  return (
    <div>
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
        {favTracks.map((track:any) => (
          <Card
            style={{
              width: "152px",
              border: "none",
            }}
            key={track.key}
          >
            <Music track={track} />
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default FavTracks;
