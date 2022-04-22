import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../fire";
import logo from "../../assets/logo.jpeg";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIN = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        // if(email)
        history.push("./");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={logo} />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIN} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the ###### #### Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login_registerButton">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
