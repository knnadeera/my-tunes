import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import FavouritesScreen from "./Screens/FavouritesScreen";
import HomeScreen from "./Screens/HomeScreen";

export interface MessageProps {
  variant: string;
  children: string;
}
export interface FormContainerProps {
  children: string;
}
export interface LoaderProps {
  size: string;
}


function App() {
  const [updatedFav, setUpdatedFav] = useState([]);
  const [favUpdated, setFavUpdated] = useState(null);

  const updated = (updatedList: any) => {
    setFavUpdated(updatedList);
  };

  useEffect(() => {
    if (favUpdated !== null) {
      setUpdatedFav(favUpdated);
    } else if (favUpdated === null) {
      const favTracks = localStorage.getItem("favTrack")
        ? JSON.parse(localStorage.getItem("favTrack")!)
        : [];
      setUpdatedFav(favTracks);
    }
  }, [favUpdated]);

  return (
    <>
      <>
        <Row>
          <Col md={2}>
            <NavigationBar />
          </Col>
          <Col md={10}>
            <Header />
            <Routes>
              <Route
                path="/my-tunes"
                element={
                  <HomeScreen updatedFav={updatedFav} updated={updated} />
                }
              />
              <Route
                path="/favourites"
                element={
                  <FavouritesScreen updatedFav={updatedFav} updated={updated} />
                }
              />
            </Routes>
          </Col>
        </Row>
      </>
    </>
  );
}

export default App;
