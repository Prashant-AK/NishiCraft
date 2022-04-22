import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../fire";
function Subscribers() {
  const [emails, setEmails] = useState({});

  useEffect(() => {
    const dbRef = firebaseApp.database().ref("/Subscribed");
    dbRef.on("value", (snapshot) => {
      setEmails(snapshot.val());
    });
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
        Suscribers
      </h1>
      <div className="card">
        <table className="table table-bordered ">
          <tr>
            <th>Sr No.</th>
            <th>Email</th>
          </tr>

          {Object.keys(emails).map((key, index) => (
            <tr key={key}>
              <td>{index + 1}</td>
              <td>{emails[key].email}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Subscribers;
