import React, { useState } from "react";
import "./CenterBox.css";
import { firebaseApp } from "../../fire";
function ConatactUs() {
  const [data, setData] = useState({
    fname: "",
    phno: "",
    email: "",
    querry: "",
  });
  const SubmitForm = (e) => {
    e.preventDefault();
    const dbREf = firebaseApp.database().ref("/Querries");
    dbREf.push(data);
    setData({
      fname: "",
      phno: "",
      email: "",
      querry: "",
    });
  };
  const handleInput = (e) => {
    var { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="container centerbox">
      <h1>
        <u>
          <b>Contact Us</b>
        </u>
      </h1>
      <div className="card " style={{ padding: "20px" }}>
        <div className="card-body ">
          <form onSubmit={SubmitForm}>
            <div className="form-group">
              <label for="exampleFormControlInput1">Your Name</label>
              <input
                onChange={handleInput}
                value={data.fname}
                name="fname"
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Good Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Phone No</label>
              <input
                onChange={handleInput}
                value={data.phno}
                type="number"
                name="phno"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone No"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                value={data.email}
                onChange={handleInput}
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">Your Message</label>
              <textarea
                name="querry"
                value={data.querry}
                onChange={handleInput}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button
              className="btn btn-block"
              style={{ backgroundColor: "#d6c4ba", color: "white" }}
              type="submit"
            >
              Send Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConatactUs;
