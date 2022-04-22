import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
function HandMade() {
  return (
    <div className="container" style={{ marginTop: "20px", padding: "10px" }}>
      <h1 style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
        Hand Made Gifts
      </h1>
      <Link to="/admin/createhandmadeproduct">
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
            <td>Birthday Theme</td>
            <td>
              <Link to="/admin/display/birthday">
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
              </Link>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Love Theme</td>
            <td>
              <Link to="/admin/display/love">
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
              </Link>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Baby Theme</td>
            <td>
              <Link to="/admin/display/baby">
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
              </Link>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>Anniversary Theme</td>
            <td>
              <Link to="/admin/display/anniversary">
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
              </Link>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Book Mark</td>
            <td>
              <Link to="/admin/display/book">
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
              </Link>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Friendship Theme</td>
            <td>
              <Link to="/admin/display/friendship">
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
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default HandMade;
