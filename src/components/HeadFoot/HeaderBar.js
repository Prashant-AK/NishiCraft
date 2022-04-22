import React from "react";
import "./HeaderBar.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <div className="headerbar">
      <div className="headerbar_container">
        <div className="headerbar_iconscontainer">
          <a href="https://www.facebook.com/CraftsistNishi-102967258611378/">
            <div className="headerbar_icons">
              <FacebookIcon />
            </div>
          </a>
          <a href=" https://www.youtube.com/channel/UCt6xGF40lA9cpXtbqDarhuw">
            <div className="headerbar_icons">
              <YouTubeIcon />
            </div>
          </a>
          <a href="https://www.instagram.com/craftsistnishi?r=nametag">
            <div className="headerbar_icons">
              <InstagramIcon />
            </div>
          </a>
          <span>
            <b>Call US On : +91 87914 90894</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
