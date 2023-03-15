import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import FavouritesScreen from "./Screens/FavouritesScreen";
import HomeScreen from "./Screens/HomeScreen";
import KeycloakAuth from "./Auth/KeycloakAuth";

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
  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   const client = KeycloakAuth

  //   client
  //     .init({ onLoad: "login-required" })
  //     .then((res) => setIsLogin(res))
  //     .catch((err) => console.error(err));
  // }, [setIsLogin]);
  // console.log(isLogin);

  return (
    <>
      {/* {isLogin && ( */}
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
      {/* )} */}
    </>
  );
}

export default App;
