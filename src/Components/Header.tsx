import React from "react";
import { Container, ModalHeader, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import HeaderImage from "../Assets/Untitled.png";

function Header() {
  return (
    <CardHeader style={{backgroundColor:"#ffb5a8", marginLeft:'-1.5rem'}}>
      <img src={HeaderImage} style={{scale:'1.15'}}/>
    </CardHeader>
  );
}

export default Header;
