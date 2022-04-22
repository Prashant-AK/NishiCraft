import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useStateValue } from "../../stateManagement/StateProvider";

function AddCard({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const addtocart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <Card>
      <img
        className="img-thumbnail"
        style={{ height: "350px", width: "350px" }}
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
        </Card.Text>
        <Button
          style={{ backgroundColor: "#29ffc6 !important" }}
          onClick={addtocart}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AddCard;
