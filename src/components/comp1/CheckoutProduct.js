import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../stateManagement/StateProvider";
function CheckoutProduct({ id, title, price, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "Remove_From_Basket",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={removeFromBasket}> Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
