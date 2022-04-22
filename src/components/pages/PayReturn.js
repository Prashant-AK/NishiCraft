import React from "react";
import "./CenterBox.css";
function PayReturn() {
  return (
    <div className="container centerbox">
      <h1>Payment and Return Policy</h1>
      <div className="card " style={{ padding: "20px" }}>
        <div className="card-body text">
          <ul>
            <li>
              <p>
                Return of the Product will not be accepted once you purchased.
                In case there is any damage here is how you can get a
                replacement.
              </p>
            </li>
            <li>
              <p>
                Product will be replaced only in case of a manufacturing defact
                or damage. You may notify us with in 24 hours from the date of
                delivery and ship the product back to us.
              </p>
            </li>
            <li>
              <p>
                We require proof of defect in Product into the form of a photo.
              </p>
            </li>
          </ul>

          <ul>
            <h6>Note:- We have an exchange policy not a return Policy. </h6>

            <li>
              <p>All Payment are in Indian Nation Rupee.</p>
            </li>
            <li>
              <p>
                We accept payments by PhonePay, Google Pay and Bank Transfer.
              </p>
            </li>
            <li>
              <p>Shipping charges to be borne by the customer.</p>
            </li>
            <li>
              <p>The order will be purchased after the payment is clear.</p>
            </li>
            <li>
              <p>
                You have to keep proofs of your product with you until the order
                is successfully delivered.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PayReturn;
