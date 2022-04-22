import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { firebaseApp } from "../../fire";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Axios from "axios";
function CreatePersonalized({ category, id, changestate }) {
  const [values, setvalues] = useState({
    title: "",
    category: "",
    description: "",
    picture: "",
    price: "",
    videolink: "",
    image1: [],
  });
  useEffect(() => {
    if (id) {
      var dbRef = firebaseApp
        .database()
        .ref(`/Products/Personalized/${category}`)
        .child(id);
      dbRef.on("value", (snapshot) => {
        const db = snapshot.val();
        setvalues({
          ...values,
          title: db.title,
          category: db.category,
          description: db.description,
          picture: db.picture,
          price: db.price,
          videolink: db.videolink,
          image1: db.image1,
        });
      });
    }
  }, [id]);
  // **************Image handle****************
  const handleImage = (e) => {
    // console.log("mei chala");
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "a8m2awyk");
    Axios.post(
      "https://api.cloudinary.com/v1_1/di4hthzbz/image/upload",
      formdata
    )
      .then((res) => {
        setvalues({ ...values, image1: [...values.image1, res.data.url] });
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  // **************Value handle****************
  const handleChange = (e) => {
    var { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };
  // **************Submit handle****************
  const submit = (e) => {
    e.preventDefault();
    if (id) {
      var dbRef = firebaseApp
        .database()
        .ref(`/Products/Personalized/${category}`)
        .child(id);
      dbRef.update(values);
      setvalues({
        title: "",
        category: "",
        description: "",
        picture: "",
        price: "",
        videolink: "",
        image1: [],
      });
      changestate();
    } else {
      if (values.category === "") {
        // return <Alert variant="danger">Select Category</Alert>;
        return window.alert("Select Category");
      } else if (values.category === "Key Chain") {
        var dbRef = firebaseApp
          .database()
          .ref("/Products/Personalized/KeyChain");
      } else if (values.category === "Diary") {
        var dbRef = firebaseApp.database().ref("/Products/Personalized/Diary");
      } else if (values.category === "Printed Cup") {
        var dbRef = firebaseApp
          .database()
          .ref("/Products/Personalized/PrintedCup");
      } else if (values.category === "Pillow") {
        var dbRef = firebaseApp.database().ref("/Products/Personalized/Pillow");
      } else if (values.category === "T-Shirts") {
        var dbRef = firebaseApp.database().ref("/Products/Personalized/TShirt");
      } else {
        var dbRef = firebaseApp
          .database()
          .ref("/Products/Personalized/Wallets");
      }
      dbRef.push(values);
      setvalues({
        title: "",
        category: "",
        description: "",
        picture: "",
        price: "",
        videolink: "",
        image1: [],
      });
    }
  };

  return (
    <div className="container" style={{ marginBottom: "20px" }}>
      <h1 style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
        Create Personalized Product
      </h1>
      <div className="CreatePersonalized_container ">
        <Form onSubmit={submit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              placeholder="Enter Title"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              as="select"
              value={values.category}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>Key Chain</option>
              <option>Diary</option>
              <option>Printed Cup</option>
              <option>Pillow</option>
              <option>T-Shirts</option>
              <option>Wallets</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              value={values.description}
              onChange={handleChange}
              rows={3}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Picture Requirement</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={values.picture}
                  name="picture"
                  type="number"
                  placeholder="Enter "
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={values.price}
                  name="price"
                  type="number"
                  placeholder="Enter Price"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.File
              onChange={handleImage}
              id="exampleFormControlFile1"
              label="Select Image"
            />
          </Form.Group>
          <Row>
            <Col>
              {" "}
              <Form.Group>
                <Form.File
                  onChange={handleImage}
                  id="exampleFormControlFile1"
                  label="Select Sub Image"
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group>
                <Form.File
                  onChange={handleImage}
                  id="exampleFormControlFile1"
                  label="Select Sub Image"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <Form.Group>
                <Form.File
                  onChange={handleImage}
                  id="exampleFormControlFile1"
                  label="Select Sub Image"
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group>
                <Form.File
                  onChange={handleImage}
                  id="exampleFormControlFile1"
                  label="Select Sub Image"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Video Link</Form.Label>
            <Form.Control
              name="videolink"
              type="text"
              value={values.videolink}
              onChange={handleChange}
              placeholder="Video Link"
            />
          </Form.Group>
          <Button type="submit" variant="primary" size="lg" block>
            {id ? "Edit Product" : "Add product"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreatePersonalized;
