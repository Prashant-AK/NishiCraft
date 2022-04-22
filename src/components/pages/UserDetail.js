import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { firebaseApp } from "../../fire";
import { useStateValue } from "../../stateManagement/StateProvider";

function UserDetail({ data }) {
  const [{ userDetails }, dispatch] = useStateValue();
  const [userexist, setuserexist] = useState(false);
  const [key, setkey] = useState();
  let history = useHistory();
  const [details, setdetails] = useState({
    userid: "",
    fname: "",
    email: "",
    address: "",
    phno: "",
  });
  useEffect(() => {
    if (data) {
      if (userDetails.fname === "") {
        var dbRef = firebaseApp.database().ref("/Users");
        dbRef.on("value", (snapshot) => {
          const db = snapshot.val();
          Object.keys(db).map((key) => {
            if (db[key].userid === data.uid) {
              setuserexist(true);
              setkey(key);
              setdetails({
                ...details,
                userid: data.uid,
                email: data.email,
                fname: db[key].fname,
                address: db[key].address,
                phno: db[key].phno,
              });
            } else {
              setuserexist(false);
              setdetails({
                ...details,
                userid: data.uid,
                email: data.email,
              });
            }
          });
        });
      } else {
        setdetails({
          ...details,
          userid: data.uid,
          email: data.email,
          fname: userDetails.fname,
          address: userDetails.address,
          phno: userDetails.phno,
        });
      }
    }
  }, [data]);

  const handleChange = (e) => {
    var { name, value } = e.target;
    setdetails({
      ...details,
      [name]: value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (userexist) {
      var dbRef = firebaseApp.database().ref("/Users").child(key);
      dbRef.update(details);
      history.push("/showdetail");
    } else {
      var dbRef = firebaseApp.database().ref("/Users");
      dbRef.push(details);
      history.push("/showdetail");
    }
  };
  return (
    <div
      className="container "
      style={{
        marginTop: "5px",
        marginBottom: "10px",
      }}
    >
      <div className="card">
        <div className="card-heading ">
          <h1 style={{ textAlign: "center" }}>Details</h1>
        </div>
        <div
          className="card-body"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          <Form onSubmit={submitForm}>
            <Form.Group as={Col}>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="fname"
                value={details.fname}
                onChange={handleChange}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                plaintext
                readOnly
                name="email"
                type="text"
                defaultValue={details.email}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Phone no</Form.Label>
              <Form.Control
                name="phno"
                onChange={handleChange}
                type="number"
                placeholder="Enter Ph no"
                value={details.phno}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                onChange={handleChange}
                as="textarea"
                rows={3}
                value={details.address}
              />
            </Form.Group>
            <button
              className="btn btn-block"
              style={{ backgroundColor: "#d6c4ba", color: "white" }}
              type="submit"
            >
              Save Data
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
