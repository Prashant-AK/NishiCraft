import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../fire";

function Querries() {
  const [quries, setQuries] = useState({});

  useEffect(() => {
    const dbRef = firebaseApp.database().ref("/Querries");
    dbRef.on("value", (snapshot) => {
      setQuries(snapshot.val());
    });
  }, []);

  console.log(quries);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
        Querries
      </h1>
      <div className="card">
        <table className="table table-bordered ">
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Mob No.</th>
            <th>E-mail</th>
            <th>Querry</th>
          </tr>

          {Object.keys(quries)
            .map((key, index) => (
              <tr key={key}>
                <td>{index + 1}</td>
                <td>{quries[key].fname}</td>
                <td>{quries[key].phno}</td>
                <td>{quries[key].email}</td>
                <td>
                  <p>{quries[key].querry}</p>
                </td>
              </tr>
            ))
            .reverse()}
        </table>
      </div>
    </div>
  );
}

export default Querries;
