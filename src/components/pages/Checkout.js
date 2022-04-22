import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../stateManagement/StateProvider";
import { getBasketTotal } from "../../stateManagement/reducer";
import CheckoutProduct from "../comp1/CheckoutProduct";
import Card from "react-bootstrap/Card";
import { firebaseApp } from "../../fire";
import { initPayment } from "../../paykun";
function Checkout() {
  const [{ basket, user, userDetails }, dispatch] = useStateValue();

  const prductCheckout = () => {
    // var dbRef = firebaseApp.database().ref(`/Orders/${user.uid}`);
    // console.log(basket);
    // dbRef.push(basket);
    // console.log("checkout");
    initPayment();
  };

  return (
    <div className="container">
      <h3>Hello, {user?.email}</h3>
      <div className="row">
        <div className="col col-md-5">
          <Card style={{ width: "250px" }}>
            <Card.Body style={{ backgroundColor: "#f4e2d8" }}>
              <Card.Title>
                Subtotal
                <small>
                  ({basket?.length} items):₹{getBasketTotal(basket)}
                </small>
              </Card.Title>
              <Card.Text>
                <button onClick={prductCheckout} className="checkoutbtn">
                  Proceed to Checkout
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col col-md-7">
          <h2 className="">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
