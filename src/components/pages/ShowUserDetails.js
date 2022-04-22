import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import { firebaseApp } from "../../fire";
function UserDetail({ data }) {
  const [details, setdetails] = useState({
    userid: "",
    fname: "",
    email: "",
    address: "",
    phno: "",
  });
  // console.log(user, userDetails);
  useEffect(() => {
    if (data) {
      var dbRef = firebaseApp.database().ref("/Users");

      dbRef.on("value", (snapshot) => {
        const db = snapshot.val();
        var arr = [];
        Object.keys(db).map((key) => arr.push(db[key]));
        arr.map((val) => {
          if (val.userid === data.uid) {
            setdetails({
              ...details,
              userid: data.uid,
              fname: val.fname,
              address: val.address,
              phno: val.phno,
              email: data.email,
            });
          }
        });
      });
    }
  }, [data]);
  // console.log("Showuser Details", details);
  return (
    <div
      className="container "
      style={{
        height: "55vh",
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
          {details.fname === "" ? (
            <Card>
              <Card.Body>
                <Card.Title>
                  <h2>
                    <b>Welcome {details.fname}</b>
                  </h2>
                </Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <h4>Update Your details </h4>
                    </Col>
                  </Row>
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    <button type="button" class="btn btn-link">
                      <Link
                        to="/userdetail"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <BsPencil />
                        Update
                      </Link>
                    </button>
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <Card>
              <Card.Body>
                <Card.Title>
                  <h2>
                    <b>Welcome {details.fname}</b>
                  </h2>
                </Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <h4>Your Name: </h4>
                    </Col>
                    <Col>
                      <h5>{details.fname}</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4>Your E-mail: </h4>
                    </Col>
                    <Col>
                      <h5>{details.email}</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4>Your Phone No: </h4>
                    </Col>
                    <Col>
                      <h5>{details.phno}</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4>Your Address: </h4>
                    </Col>
                    <Col>
                      <h5>{details.address}</h5>
                    </Col>
                  </Row>
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    <button type="button" class="btn btn-link">
                      <Link
                        to="/userdetail"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <BsPencil />
                        Edit
                      </Link>
                    </button>
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
