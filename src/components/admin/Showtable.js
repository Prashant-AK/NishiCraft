import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../fire";
import Spinner from "react-bootstrap/Spinner";
import CreateHandProd from "./CreateHandProd";
import CreatePersonalized from "./CreatePersonalized";
import CreateHomeDeco from "./CreateHomeDeco";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
function Showtable({ heading, category }) {
  const [basicCat, setbasicCat] = useState("");
  const [editstate, seteditstate] = useState(false);
  const [list, setlist] = useState();
  const [selectid, setselectid] = useState("");
  const changestate = () => {
    seteditstate(false);
  };
  useEffect(() => {
    var dbRef;
    // console.log("category", category);
    // Hand Made Category
    if (category === "Birthday") {
      dbRef = firebaseApp.database().ref(`/Products/Handmade/${category}`);
      setbasicCat("Handmade");
    } else if (category === "Love") {
      dbRef = firebaseApp.database().ref(`/Products/Handmade/${category}`);
      setbasicCat("Handmade");
    } else if (category === "Baby") {
      dbRef = firebaseApp.database().ref(`/Products/Handmade/${category}`);
      setbasicCat("Handmade");
    } else if (category === "Anniversary") {
      dbRef = firebaseApp.database().ref(`/Products/Handmade/${category}`);
      setbasicCat("Handmade");
    } else if (category === "Book") {
      dbRef = firebaseApp.database().ref(`/Products/Handmade/${category}`);
      setbasicCat("Handmade");
    } else if (category === "Friendship") {
      dbRef = firebaseApp.database().ref(`/Products/Handmade/${category}`);
      setbasicCat("Handmade");
    }
    // Hand Made End
    // Personallized start
    else if (category === "KeyChain") {
      dbRef = firebaseApp.database().ref(`/Products/Personalized/${category}`);
      setbasicCat("Personalized");
    } else if (category === "Diary") {
      dbRef = firebaseApp.database().ref(`/Products/Personalized/${category}`);
      setbasicCat("Personalized");
    } else if (category === "PrintedCup") {
      dbRef = firebaseApp.database().ref(`/Products/Personalized/${category}`);
      setbasicCat("Personalized");
    } else if (category === "Pillow") {
      dbRef = firebaseApp.database().ref(`/Products/Personalized/${category}`);
      setbasicCat("Personalized");
    } else if (category === "TShirt") {
      dbRef = firebaseApp.database().ref(`/Products/Personalized/${category}`);
      setbasicCat("Personalized");
    } else if (category === "Wallets") {
      dbRef = firebaseApp.database().ref(`/Products/Personalized/${category}`);
      setbasicCat("Personalized");
    }
    // Personallized end
    // Home Deco start
    else if (category === "DreamCatcher") {
      dbRef = firebaseApp.database().ref(`/Products/HomeDeco/${category}`);
      setbasicCat("HomeDeco");
    } else if (category === "WoodenDeco") {
      dbRef = firebaseApp.database().ref(`/Products/HomeDeco/${category}`);
      setbasicCat("HomeDeco");
    } else {
      dbRef = firebaseApp.database().ref(`/Products/HomeDeco/${category}`);
      setbasicCat("HomeDeco");
    }

    // var dbRef = firebaseApp.database().ref("/Products/Handmade");
    dbRef.on("value", (snapshot) => {
      const db = snapshot.val();

      var arr = [];
      for (let id in db) {
        arr.push({ id, ...db[id] });
      }
      setlist(arr);
    });
  }, [category]);

  const editform = (id) => {
    setselectid(id);
    seteditstate(true);
    // console.log("id", id);
  };
  const deleteProduct = (id) => {
    var dbRef = firebaseApp
      .database()
      .ref(`/Products/${basicCat}/${category}`)
      .child(id);
    console.log("hello", dbRef);
    dbRef.remove();
  };
  if (!editstate) {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
          {heading}
        </h1>

        <>
          <div className="card-body">
            <div className="container">
              <table className="table table-bordered table-hover">
                <tr>
                  <th scope="col">Sr No.</th>
                  <th scope="col"> Image</th>
                  <th scope="col">Proudct Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Option</th>
                </tr>

                <tr>
                  <td>01</td>
                  <td>
                    <img
                      height="100"
                      width="100"
                      src="https://cdn.shopify.com/s/files/1/0370/6014/9386/products/61ManE2yRAL.jpg?v=1615957483"
                      className="img-thumbnail"
                      alt="image"
                    />
                  </td>
                  <td>Title</td>
                  <td>Price</td>
                  <td>
                    <button className="btn">Edit</button>
                  </td>
                </tr>
                {list ? (
                  list.map((db, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          height="100"
                          width="100"
                          src={db.image1[0]}
                          className="img-thumbnail"
                          alt="image"
                        />
                      </td>
                      <td>{db.title}</td>
                      <td>{db.price}</td>
                      <td>
                        <button
                          style={{
                            margin: "5px",
                            color: "white",
                            backgroundColor: "#29FFC6",
                          }}
                          onClick={() => editform(db.id)}
                          className="btn"
                        >
                          <BsPencil />
                        </button>
                        <button
                          style={{
                            margin: "5px",
                            color: "white",
                            backgroundColor: "#29FFC6",
                          }}
                          onClick={() => deleteProduct(db.id)}
                          className="btn"
                        >
                          <RiDeleteBinLine />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <Spinner animation="border" variant="success" />
                )}
              </table>
            </div>
          </div>
        </>
      </div>
    );
  } else {
    if (basicCat === "Handmade") {
      return (
        <CreateHandProd
          changestate={changestate}
          category={category}
          id={selectid}
        />
      );
    } else if (basicCat === "Personalized") {
      return (
        <CreatePersonalized
          changestate={changestate}
          category={category}
          id={selectid}
        />
      );
    } else {
      return (
        <CreateHomeDeco
          changestate={changestate}
          category={category}
          id={selectid}
        />
      );
    }
  }
}

export default Showtable;
