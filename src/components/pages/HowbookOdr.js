import React from "react";
import "./CenterBox.css";
function HowbookOdr() {
  return (
    <div className="container centerbox">
      <h1> How to book Order</h1>
      <div className="card " style={{ padding: "20px" }}>
        <div className="card-body text">
          <ul>
            <li>
              <p>
                You can book your order, online and make Payment through Paytm,
                Google pay or bank transfer. If you donot place your order
                online you can book your order by whatsapp.
              </p>
            </li>
            <li>
              <p>You can mail us your Picture at (craftsistnishi@gmail.com).</p>
            </li>

            <li>
              <p>
                You will get the product in 10-12 days after you confirm your
                order.
              </p>
            </li>
            <li>
              <p>In case still you have any querry contact us.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HowbookOdr;
