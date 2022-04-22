import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { firebaseApp } from "../../../fire";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import AddCard from "../../comp1/AddCard";
function WindChain() {
  const [data, setdata] = useState({});
  useEffect(() => {
    var dbRef = firebaseApp.database().ref("/Products/HomeDeco/WindChime");
    dbRef.on("value", (snapshot) => {
      setdata(snapshot.val());
    });
  }, []);

  const soon = (
    <div className="container" style={{ padding: "40px 0px" }}>
      <div className="card ">
        <div className="card-body">
          <div className="cart-title" style={{ textAlign: "center" }}>
            <Spinner animation="border" variant="success" />
            <h1>Products Coming Soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}> Wind Chains </h1>
        {data ? (
          <CardColumns>
            {Object.keys(data).map((key) => (
              <AddCard
                id={key}
                title={data[key].title}
                price={parseInt(data[key].price)}
                image={data[key].image1[0]}
              />
            ))}
          </CardColumns>
        ) : (
          soon
        )}
      </Container>
    </>
  );
}

export default WindChain;
