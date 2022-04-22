import React, { useEffect, useState } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import AddCard from "../../comp1/AddCard";
import { firebaseApp } from "../../../fire";
import Spinner from "react-bootstrap/Spinner";
function Birthday() {
  const [data, setdata] = useState({});
  useEffect(() => {
    var dbRef = firebaseApp.database().ref("/Products/Handmade/Birthday");
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
        <h1 style={{ textAlign: "center" }}> BIRTHDAY ITEMS </h1>
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
            {/* <AddCard
           id="98685472"
           title="Product 2"
           price={34}
           image="https://5.imimg.com/data5/WS/ER/BO/SELLER-14116032/happy-birthday-banners-500x500.jpg"
         />
         <AddCard
           id="98685473"
           title="Product 3"
           price={54}
           image="https://5.imimg.com/data5/PJ/PB/AG/SELLER-99436579/happy-birthday-foil-500x500.jpg"
         />
         <AddCard
           id="98685474"
           title="Product 4"
           price={32}
           image="https://5.imimg.com/data5/SELLER/Default/2021/3/NN/IH/LG/98015841/vkb-multi-colour-printed-birthday-name-balloons-vkb-500x500.jpg"
         />
         <AddCard
           id="98685475"
           title="Product 5"
           price={45}
           image="https://m.media-amazon.com/images/I/91tPppQTurL._AC_SS450_.jpg"
         />
         <AddCard
           id="98685476"
           title="Product 6"
           price={54}
           image="https://fcity.in/images/products/9808314/74cf9_512.jpg"
         /> */}
          </CardColumns>
        ) : (
          soon
        )}
      </Container>
    </>
  );
}

export default Birthday;
