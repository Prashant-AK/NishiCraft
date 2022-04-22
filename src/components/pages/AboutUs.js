import React from "react";
import "./CenterBox.css";
function AboutUs() {
  return (
    <div className="container centerbox">
      <h1> EXPLORE</h1>
      <div className="card " style={{ padding: "20px" }}>
        <div className="card-body text">
          <div>
            <h3>
              <u>About Us</u>
            </h3>
            <p>
              Hello!
              <br />
              We are glad you are here, welcome to our creative handmade world.
            </p>
          </div>
          <div>
            <h3>
              <u>About Founder</u>
            </h3>
            <p>
              Nishi Saxena founder of craftsistnishi. She always been passionate
              about crafts since her childhood. Opening a arts and crafts
              business is her dream.
              <br />
              In 2019, she turned her dream into reality. She is involved in
              each and every phase of the making of product from the selection
              of the material, thinking of the design the colors that go with
              them, to the assembling of the Product All is done by her. She
              want some love to all of you guyzz for this small business for
              head.
            </p>
          </div>
        </div>

        <div class="card w-50">
          <div class="card-body">
            <h5 class="card-title">CONNECT WITH US</h5>
            <aside class="card-text">
              <b>Email -</b> craftsistnishi@gmail.com
              <br />
              <b>Contact No -</b> 87914 90894
              <br />
              <b>Address -</b> 253 Chaiwai, Mastran Gali, Baankhana, Kohadapir
              Bareilly, 243003
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
