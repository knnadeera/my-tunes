import React from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import HeaderImage from "../Assets/Untitled.png";

function Header() {
  return (
    <CardHeader
      style={{
        backgroundColor: "#ffb5a8",
        marginLeft: "-1.5rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img alt="headerImage" src={HeaderImage} style={{ scale: "1.15" }} />
        <strong
          style={{
            margin: "1rem",
            textAlign: "right",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          Your favourite tunes <br />
          All <i
            className="fa-solid fa-sun"
            style={{ color: "yellow" }}
          ></i>{" "}
          and all{" "}
          <i
            className="fa-solid fa-moon"
            style={{ color: "rgba(60,60,60,255)" }}
          ></i>
        </strong>
      </div>
    </CardHeader>
  );
}

export default Header;
