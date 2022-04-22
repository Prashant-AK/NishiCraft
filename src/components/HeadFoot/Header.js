import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from "../../assets/logo.jpeg";
import { useStateValue } from "../../stateManagement/StateProvider";
import { auth } from "../../fire";
import Dropdown from "react-bootstrap/Dropdown";
import { BsPersonSquare } from "react-icons/bs";
function Header() {
  const [state, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (state.user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} />
      </Link>
      <div className="header_container">
        <div className="header_search">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to={!state.user && "/login"}>
            {/* <Link to="/login"> */}
            <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionLineOne">
                hello {!state.user ? "Guest" : state.user.email}
                {/* hello Guest */}
              </span>
              <span className="header_optionLineTwo">
                {state.user ? "Sign Out" : "Sign In"}
                {/* Sign In */}
              </span>
            </div>
          </Link>
          {state.user ? (
            <Dropdown style={{ marginRight: "10px" }}>
              <Dropdown.Toggle
                // className="header_dropdown"
                style={{
                  backgroundColor: "#fff",
                  color: "black",
                  border: "none",
                }}
                id="dropdown-basic"
              >
                <BsPersonSquare />
              </Dropdown.Toggle>

              <Dropdown.Menu className="header_dropdown">
                <Dropdown.Item className="header_dropdown">
                  <Link
                    to="/myorders"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    My Orders
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item className="header_dropdown">
                  <Link
                    to="/userdetail"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    My Profile
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <div></div>
          )}
          <Link to="/checkout">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLineTwo header_basketCount">
                {state.basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
