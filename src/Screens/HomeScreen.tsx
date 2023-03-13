import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Music from "../Components/Music";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";
import data from "../Assets/data";
import './HomeScreen.css'

export interface MusicTrack {
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
    breakpoint: { max: 1440, min: 1024},
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


const HomeScreen: React.FC = () => {
  // const [music, setMusic] = useState<MusicTrack[]>([]);]
  
  // useEffect(() => {
  //   fetchMusic();
  // }, []);

  // const fetchMusic = (): void => {
  //   fetch(
  //     "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US",
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "c5f01b49b1msh260f71874aca913p150a01jsncb5ddeb5b53d",
  //         "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setMusic(data.tracks))
  //     .catch((err) => console.error(err));
  // };

  return (
    <div
      className="home"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h6 style={{ width: "16%", color: "gray" }}>Released this week</h6>
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
        {data.map((track) => (
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

export default HomeScreen;
