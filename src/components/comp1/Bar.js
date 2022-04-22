import React from "react";
import Container from "react-bootstrap/Container";
function Bar() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f4e2d8",
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "center",
        fontFamily: "fantasy",
      }}
    >
      <h1> 20% OFF UPTO 999 </h1>
    </Container>
  );
}

export default Bar;
