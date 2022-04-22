import React from "react";
import GeneralCard from "../comp1/GeneralCard";
import "./HandMadeGfts.css";
import { Link } from "react-router-dom";
import CardColumns from "react-bootstrap/CardColumns";
import windchime from "../../assets/images/windchime.jpeg";
import wooden from "../../assets/images/wooden.jpeg";
import dream from "../../assets/images/dream.jpeg";
function Homedecor() {
  return (
    <div className="container hand">
      <h1 className="heading">Home Decor</h1>
      <CardColumns style={{ margin: "15px 5px 0px 5px" }}>
        <Link to="/dreamcatcher" style={{ textDecoration: "none" }}>
          <GeneralCard image={dream} title="Dream Catcher" />
        </Link>
        <Link to="/woodendecor" style={{ textDecoration: "none" }}>
          <GeneralCard image={wooden} title="Wooden Decor" />
        </Link>
        <Link to="/windchain" style={{ textDecoration: "none" }}>
          <GeneralCard image={windchime} title="Wind Chime" />
        </Link>
      </CardColumns>
    </div>
  );
}

export default Homedecor;
