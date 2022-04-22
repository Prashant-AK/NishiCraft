import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { firebaseApp } from "../../fire";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Axios from "axios";
const CreateHandProd = ({ category, id, changestate }) => {
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
        .ref(`/Products/Handmade/${category}`)
        .child(id);
      dbRef.on("value", (snapshot) => {
        const db = snapshot.val();
        // console.log("check detail", db.category);
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
  // console.log("aai", values);
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
        .ref(`/Products/Handmade/${category}`)
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
        return window.alert("Select Category");
      } else if (values.category === "Birthday Theme") {
        var dbRef = firebaseApp.database().ref("/Products/Handmade/Birthday");
      } else if (values.category === "Love Theme") {
        var dbRef = firebaseApp.database().ref("/Products/Handmade/Love");
      } else if (values.category === "Baby Theme") {
        var dbRef = firebaseApp.database().ref("/Products/Handmade/Baby");
      } else if (values.category === "Anniversary Theme") {
        var dbRef = firebaseApp
          .database()
          .ref("/Products/Handmade/Anniversary");
      } else if (values.category === "Book Theme") {
        var dbRef = firebaseApp.database().ref("/Products/Handmade/Book");
      } else {
        var dbRef = firebaseApp.database().ref("/Products/Handmade/Friendship");
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
    <div className="container " style={{ marginBottom: "20px" }}>
      <h1 style={{ textAlign: "center", margin: "10px", padding: "5px" }}>
        Create HandMade Product
      </h1>
      <div className="createhomeprod_container ">
        <Form onSubmit={submit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <input
              onChange={handleChange}
              className="form-control"
              value={values.title}
              name="title"
              type="text"
              placeholder="Enter Title"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={values.category}
              name="category"
              as="select"
            >
              <option selected value="select">
                Select
              </option>
              <option>Birthday Theme</option>
              <option>Love Theme</option>
              <option>Baby Theme</option>
              <option>Anniversary Theme</option>
              <option>Book Theme</option>
              <option>Friendship Theme</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={values.description}
              name="description"
              as="textarea"
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
              id="exampleFormControlFile1"
              name="image"
              type="file"
              label="Select Image"
              onChange={handleImage}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.File
                  onChange={handleImage}
                  id="exampleFormControlFile1"
                  label="Select Sub Image"
                />
              </Form.Group>
            </Col>
            <Col>
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
              <Form.Group>
                <Form.File
                  onChange={handleImage}
                  id="exampleFormControlFile1"
                  label="Select Sub Image"
                />
              </Form.Group>
            </Col>
            <Col>
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
              onChange={handleChange}
              value={values.videolink}
              name="videolink"
              type="text"
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
};

export default CreateHandProd;
