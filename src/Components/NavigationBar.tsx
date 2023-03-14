import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  const h5Css = {
    container: {
      color: "#aeaefe",
      "@media (maxWidth: 1440px)": {
        fontSize: "0.8rem",
      },
      "@media (maxWidth: 1024px)": {
        fontSize: "0.5rem",
      },
    },
  };

  const navStyle = {
    textDecoration: "none",
    marginBottom: "1rem",
    marginTop: "1rem",
  };

  return (
    <Navbar bg="purple" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <Col>
          <Row>
            <NavLink to="/my-tunes" style={navStyle}>
              <h5 style={h5Css.container}>
                <i className="fa-solid fa-bars-staggered"></i>
                Home
              </h5>
            </NavLink>
          </Row>
          <Row>
            <NavLink to="/search" style={navStyle}>
              <h5 style={h5Css.container}>
                <i className="fa-solid fa-magnifying-glass"></i>
                Search
              </h5>
            </NavLink>
          </Row>
          <Row>
            <NavLink to="/favourites" style={navStyle}>
              <h5 style={h5Css.container}>
                <i className="fa-solid fa-heart"></i>
                Favourites
              </h5>
            </NavLink>
          </Row>
          <Row>
            <NavLink to="/playlist" style={navStyle}>
              <h5 style={h5Css.container}>
                <i className="fa-solid fa-circle-play"></i>
                Playlist
              </h5>
            </NavLink>
          </Row>
        </Col>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
