import React from "react";
import GeneralCard from "../comp1/GeneralCard";
import "./HandMadeGfts.css";
import { Link } from "react-router-dom";
import CardColumns from "react-bootstrap/CardColumns";
import keychain from "../../assets/images/keychain.jpeg";
import diary from "../../assets/images/diary.jpeg";
import printedcup from "../../assets/images/printedcup.jpeg";
import pillow from "../../assets/images/pillow.jpeg";
import tshirts from "../../assets/images/tshirts.jpeg";
import wallets from "../../assets/images/wallets.jpeg";
function Personalized() {
  return (
    <div className="container hand">
      <h1 className="heading"> PERSONALIZED GIFTS</h1>
      <CardColumns style={{ margin: "15px 5px 0px 5px" }}>
        <Link to="/keychain" style={{ textDecoration: "none" }}>
          <GeneralCard image={keychain} title="Key Chain" />
        </Link>
        <Link to="/diary" style={{ textDecoration: "none" }}>
          <GeneralCard image={diary} title="Diary" />
        </Link>
        <Link to="/printedcup" style={{ textDecoration: "none" }}>
          <GeneralCard image={printedcup} title="Printed Cup" />
        </Link>
        <Link to="/pillow" style={{ textDecoration: "none" }}>
          <GeneralCard image={pillow} title="Pillow" />
        </Link>
        <Link to="/tshirts" style={{ textDecoration: "none" }}>
          <GeneralCard image={tshirts} title="T-Shirts" />
        </Link>
        <Link to="/wallets" style={{ textDecoration: "none" }}>
          <GeneralCard image={wallets} title="Wallets" />
        </Link>
      </CardColumns>
    </div>
  );
}

export default Personalized;
