import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Music from "../Components/Music";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";
import data from "../Assets/data";

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

const HomeScreen: React.FC = () => {
  const [music, setMusic] = useState<MusicTrack[]>([]);

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = (): void => {
    console.log('a')
    fetch(
      "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c5f01b49b1msh260f71874aca913p150a01jsncb5ddeb5b53d",
          "X-RapidAPI-Host": "shazam.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setMusic(data.tracks))
      .catch((err) => console.error(err));
      console.log('a',data)
  };
  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      style={{
        marginLeft: "-9rem",
        marginTop: "1rem",
        width: "100rem",
      }}
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
        itemClass="carousel-item-padding-40-px"
      >
        {music.map((track) => (
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
