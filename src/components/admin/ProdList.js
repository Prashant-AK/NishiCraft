import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import handmade from "../../assets/images/anniversary.jpeg";
import persona from "../../assets/images/love.jpeg";
import home from "../../assets/images/wooden.jpeg";
function ProdList() {
  return (
    <div className="container" style={{ marginTop: "20px", padding: "10px" }}>
      <h1 style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
        Product Category
      </h1>
      <CardDeck>
        <Card style={{ border: "2px solid #78ffd6 " }}>
          <Card.Img variant="top" src={handmade} />
          <Card.Body>
            <Card.Title>Handmade Gifts</Card.Title>
            <Card.Text>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/admin/handmade">
              <button
                style={{
                  padding: "10px",
                  textAlign: "center",
                  width: "100%",
                  border: "none",
                  backgroundColor: " #78ffd6",
                  color: "white",
                }}
              >
                View
              </button>
            </Link>
          </Card.Footer>
        </Card>
        <Card style={{ border: "2px solid #78ffd6 " }}>
          <Card.Img variant="top" src={persona} />
          <Card.Body>
            <Card.Title>Personalized Gifts</Card.Title>
            <Card.Text>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/admin/personalized">
              <button
                style={{
                  padding: "10px",
                  textAlign: "center",
                  width: "100%",
                  border: "none",
                  backgroundColor: " #78ffd6",
                  color: "white",
                }}
              >
                View
              </button>
            </Link>
          </Card.Footer>
        </Card>
        <Card style={{ border: "2px solid #78ffd6 " }}>
          <Card.Img variant="top" src={home} />
          <Card.Body>
            <Card.Title>Home Decoration</Card.Title>
            <Card.Text>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/admin/homedeco">
              <button
                style={{
                  padding: "10px",
                  textAlign: "center",
                  width: "100%",
                  border: "none",
                  backgroundColor: " #78ffd6",
                  color: "white",
                }}
              >
                View
              </button>
            </Link>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default ProdList;
