import React from "react";
import "./CenterBox.css";
function PrivacyPolicy() {
  return (
    <div className="container centerbox">
      <h1>Privacy Policy</h1>
      <div className="card" style={{ padding: "20px" }}>
        <div className="card-body text">
          <ul>
            <li>
              <p>
                We are commited to ensureing that your Privacy is protected with
                us. We collected personally identificable information from our
                registerd customer.
              </p>
            </li>
            <li>
              <p>
                Our Privacy Policy is subjected to change from time to time
                without notice. To make sure you are aware of any changes.
                please review this policy time to time.
              </p>
            </li>
          </ul>
          <div className="container">
            <h4 style={{ textAlign: "left" }}>
              We want the following information from you
            </h4>
            <ul>
              <li>
                <p>Your good name and date of birth.</p>
              </li>
              <li>
                <p>Your full contact information (Ph no, E-mail, Address).</p>
              </li>
              <li>
                <p>Demographic information and other required information.</p>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <p>
                A cookie is small piece of information stored by a Servoer on a
                browser, so our website place both permanent and temporary
                cookie in your computer hard drive.
              </p>
            </li>
            <li>
              <p>
                We are commited to ensuteing that your information is safe with
                us. In order to prevent unauthorized access or disclosure we
                have put in place suitable physical, secure the information we
                collect.
              </p>
            </li>
            <li>
              <p>
                We require your information to understand your needs. We may use
                the information to the improvement contact you for market
                research purpose.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
