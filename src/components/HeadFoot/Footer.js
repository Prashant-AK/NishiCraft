import React, { useRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaRegEnvelope,
} from "react-icons/fa";
import { firebaseApp } from "../../fire";
function Footer() {
  const refEmail = useRef();
  const submitEmail = (e) => {
    e.preventDefault();
    const dbRef = firebaseApp.database().ref("/Subscribed");
    dbRef.push({ email: refEmail.current.value });
    refEmail.current.value = "";
  };
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_sec1">
          <div className="footer_sec_head">
            <h2>EXPLORE</h2>
          </div>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            <div className="footer_sec_content">
              <strong>About Us</strong>
            </div>
          </Link>

          <Link to="/contactus" style={{ textDecoration: "none" }}>
            <div className="footer_sec_content">
              <strong>Contact Us</strong>
            </div>
          </Link>
          <Link to="/termcond" style={{ textDecoration: "none" }}>
            <div className="footer_sec_content">
              <strong>Terms & Condition</strong>
            </div>
          </Link>
        </div>
        <div className="footer_sec2">
          <div className="footer_sec_head">
            <h2>NEED HELP</h2>
          </div>
          <Link to="/howbookodr" style={{ textDecoration: "none" }}>
            <div className="footer_sec_content">
              <strong>How To Book Your Order</strong>
            </div>
          </Link>
          <Link to="/paymentreturnpolicy" style={{ textDecoration: "none" }}>
            <div className="footer_sec_content">
              <strong>Payment and Return Policy</strong>
            </div>
          </Link>
          <Link to="/privacypolicy" style={{ textDecoration: "none" }}>
            <div className="footer_sec_content">
              <strong>Privacy Policy</strong>
            </div>
          </Link>
        </div>
        <div className="footer_sec3">
          <div className="footer_sec_head">
            <h2>SIGN UP AND SAVE</h2>
          </div>
          <div className="footer_sec3_subhead">
            <p>
              Subscribe to get special <br />
              offers, and free giveaways
            </p>
          </div>
          <div className="footer_sec_input">
            <form onSubmit={submitEmail}>
              <div className="row">
                <div className="col-10">
                  <input
                    className="footer_searchInput"
                    ref={refEmail}
                    type="email"
                  />
                </div>
                <div className="col-2" style={{ padding: "0px" }}>
                  <button
                    style={{ borderRadius: "40%", padding: "2px" }}
                    type="submit"
                  >
                    <FaRegEnvelope className="footer_searchIcon" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="footer_sec_icon_container">
            <a
              href="https://www.facebook.com/CraftsistNishi-102967258611378/"
              style={{ textDecoration: "none" }}
            >
              <div className="footer_sec_icon">
                <FaFacebookSquare />
              </div>
            </a>
            <a
              href="https://www.instagram.com/craftsistnishi?r=nametag"
              style={{ textDecoration: "none" }}
            >
              <div className="footer_sec_icon">
                <FaInstagram />
              </div>
            </a>
            <a
              href=" https://www.youtube.com/channel/UCt6xGF40lA9cpXtbqDarhuw"
              style={{ textDecoration: "none" }}
            >
              <div className="footer_sec_icon">
                <FaYoutube />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
