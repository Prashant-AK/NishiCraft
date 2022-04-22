import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
function Home() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", paddingTop: "10px" }}>Welcome Admin</h1>
      <h2 style={{ textAlign: "center", paddingTop: "5px" }}>Dash Board</h2>
      <div style={{ marginTop: "10vh" }}>
        <CardDeck>
          <Card>
            <Card.Body style={{ backgroundColor: "#feece2" }}>
              <Card.Title>Total Users</Card.Title>
              <Card.Text
                style={{
                  display: "flex",
                  height: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "60px", fontFamily: "fantasy" }}>100</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body style={{ backgroundColor: "#feece2" }}>
              <Card.Title>Subscribers</Card.Title>
              <Card.Text
                style={{
                  display: "flex",
                  height: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "60px", fontFamily: "fantasy" }}>100</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body style={{ backgroundColor: "#feece2" }}>
              <Card.Title>Querry</Card.Title>
              <Card.Text
                style={{
                  display: "flex",
                  height: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "60px", fontFamily: "fantasy" }}>100</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Home;
