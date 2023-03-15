import React from "react";
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
                <Route path="/my-tunes" Component={HomeScreen} />
                <Route path="/favourites" Component={FavouritesScreen} />
              </Routes>
            </Col>
          </Row>
        </>
    </>
  );
}

export default App;
