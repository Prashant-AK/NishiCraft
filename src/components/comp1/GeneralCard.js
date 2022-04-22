import React from "react";
import "./GeneralCard.css";

import Card from "react-bootstrap/Card";
function HomeCard({ title, image }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
