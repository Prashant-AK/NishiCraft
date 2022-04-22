import React from "react";
import GeneralCard from "../comp1/GeneralCard";
import "./HandMadeGfts.css";
import { Link } from "react-router-dom";
import CardColumns from "react-bootstrap/CardColumns";
import birthday from "../../assets/images/birthday.jpeg";
import love from "../../assets/images/love.jpeg";
import baby from "../../assets/images/baby.jpeg";
import anniversary from "../../assets/images/anniversary.jpeg";
import bookmark from "../../assets/images/bookmark.jpeg";
import friendship from "../../assets/images/friendship.jpeg";

function HandMadeGfts() {
  return (
    <div className="container hand">
      <h1 className="heading"> HANDMADE GIFTS</h1>
      <CardColumns style={{ margin: "15px 5px 0px 5px" }}>
        <Link to="/birthday_theme" style={{ textDecoration: "none" }}>
          <GeneralCard image={birthday} title="Birthday Theme" />
        </Link>
        <Link to="/love_theme" style={{ textDecoration: "none" }}>
          <GeneralCard image={love} title="Love Theme" />
        </Link>
        <Link to="/baby_theme" style={{ textDecoration: "none" }}>
          <GeneralCard image={baby} title="Baby Theme" />
        </Link>
        <Link to="/anniversary_theme" style={{ textDecoration: "none" }}>
          <GeneralCard image={anniversary} title="Anniversary Theme" />
        </Link>
        <Link to="/book_theme" style={{ textDecoration: "none" }}>
          <GeneralCard image={bookmark} title="Book Theme" />
        </Link>
        <Link to="/friendship_theme" style={{ textDecoration: "none" }}>
          <GeneralCard image={friendship} title="Friendship Theme" />
        </Link>
      </CardColumns>
    </div>
  );
}

export default HandMadeGfts;
