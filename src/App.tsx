import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <>
      <Row>
        <Col md={2}>
          <NavigationBar />
        </Col>
        <Col md={10}>
          <Header/>
          <Container>
            <Routes>
              <Route path="/" Component={HomeScreen} />
            </Routes>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default App;
