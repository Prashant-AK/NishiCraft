import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
function HomeDeco() {
  return (
    <div className="container" style={{ marginTop: "20px", padding: "10px" }}>
      <h1 style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
        Home Decoration
      </h1>

      <Link to="/admin/createhomedecoproduct">
        <button
          style={{
            padding: "10px",
            // textAlign: "center",
            // width: "30%",
            border: "none",
            backgroundColor: " #78ffd6",
            color: "white",
            marginBottom: "10px",
          }}
        >
          Add new Item
        </button>
      </Link>

      <Table bordered hover responsive="md">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Category</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Dream Catcher</td>
            <td>
              <button
                style={{
                  padding: "10px",
                  textAlign: "center",
                  width: "100%",
                  border: "none",
                  backgroundColor: " #78ffd6",
                  color: "white",
                }}
              >
                View
              </button>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Wooden Deco</td>
            <td>
              <button
                style={{
                  padding: "10px",
                  textAlign: "center",
                  width: "100%",
                  border: "none",
                  backgroundColor: " #78ffd6",
                  color: "white",
                }}
              >
                View
              </button>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Wind Chime</td>
            <td>
              <button
                style={{
                  padding: "10px",
                  textAlign: "center",
                  width: "100%",
                  border: "none",
                  backgroundColor: " #78ffd6",
                  color: "white",
                }}
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default HomeDeco;
