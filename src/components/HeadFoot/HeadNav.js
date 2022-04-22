import React from "react";
import { Link } from "react-router-dom";
import "./HeadNav.css";
import { FaBars } from "react-icons/fa";
function HeadNav() {
  function myFunction() {
    var x = document.getElementById("example-collapse");
    if (x.className === "headnav_container") {
      x.className += " responsive";
    } else {
      x.className = "headnav_container";
    }
  }
  function removeFunction() {
    var x = document.getElementById("example-collapse");
    if (x.className === "headnav_container") {
      x.className += " responsive";
    } else {
      x.className = "headnav_container";
    }
  }
  return (
    <div className="headnav">
      <div className="headnav_container" id="example-collapse">
        <div className="headnav_btn">
          <Link
            onClick={removeFunction}
            to="/"
            style={{ textDecoration: "none" }}
          >
            <strong className="headnav_btninfo">HOME</strong>
          </Link>
        </div>
        <section className="headnav_btn">
          <div class="dropdown">
            <strong className="headnav_btninfo">HANDMADE</strong>
            <div class="dropdown-content">
              <Link onClick={removeFunction} to="/birthday_theme">
                Birthday Theme
              </Link>
              <Link onClick={removeFunction} to="/baby_theme">
                Baby Theme
              </Link>
              <Link onClick={removeFunction} to="/book_theme">
                Book Theme
              </Link>
              <Link onClick={removeFunction} to="/love_theme">
                Love Theme
              </Link>
              <Link onClick={removeFunction} to="/anniversary_theme">
                Anniversary Theme
              </Link>
              <Link onClick={removeFunction} to="/friendship_theme">
                Friendship Theme
              </Link>
            </div>
          </div>
        </section>
        <section className="headnav_btn">
          <div class="dropdown">
            <strong className="headnav_btninfo">PERSONALIZED</strong>
            <div class="dropdown-content">
              <Link onClick={removeFunction} to="/keychain">
                Key Chain
              </Link>
              <Link onClick={removeFunction} to="/printedcup">
                Printed Cup
              </Link>
              <Link onClick={removeFunction} to="/tshirts">
                T-Shirts
              </Link>
              <Link onClick={removeFunction} to="/diary">
                Diary
              </Link>
              <Link onClick={removeFunction} to="/pillow">
                Pillow
              </Link>
              <Link onClick={removeFunction} to="/wallets">
                Wallets
              </Link>
            </div>
          </div>
        </section>
        <section className="headnav_btn">
          <div class="dropdown">
            <strong className="headnav_btninfo">HOME DECOR</strong>
            <div class="dropdown-content">
              <Link onClick={removeFunction} to="/dreamcatcher">
                Dream Catcher{" "}
              </Link>
              <Link onClick={removeFunction} to="/woodendecor">
                Wooden Deco{" "}
              </Link>
              <Link onClick={removeFunction} to="/windchain">
                Wind Chime{" "}
              </Link>
            </div>
          </div>
        </section>
        <section className="headnav_btn">
          <Link
            onClick={removeFunction}
            to="/aboutus"
            style={{ textDecoration: "none" }}
          >
            <strong className="headnav_btninfo">ABOUT US</strong>
          </Link>
        </section>
        <section className="headnav_btn">
          <Link
            onClick={removeFunction}
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            <strong className="headnav_btninfo">Contact</strong>
          </Link>
        </section>
      </div>

      <div className=" icon" onClick={myFunction}>
        <strong className="headnav_btninfo">
          <FaBars />
        </strong>
      </div>
    </div>
  );
}

export default HeadNav;
