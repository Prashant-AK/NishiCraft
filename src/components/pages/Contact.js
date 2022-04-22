import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="container">
      <div className="contact">
        <div className="card" style={{ width: "20rem", padding: "10px" }}>
          <h4
            className="card-title"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            ‟CONNECT WITH US”
          </h4>
          <div className="card-body">
            <section className="card-text">
              <p style={{ lineHeight: "3vh" }}>
                <b>Email:</b> craftsistnishi@gmail.com <br />
                <b>Contact No:</b> +91 8791490894
                <br />
                <p>
                  <b>Address:</b> 253 chaiwai, Mastran Gali,
                  <p style={{ marginLeft: "66px" }}>
                    Baankhana, Kohadapir
                    <br /> Bareilly 243003
                  </p>
                </p>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
