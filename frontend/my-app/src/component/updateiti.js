import React, { useEffect, useState, useCallback, useRef } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./update.css";
import { NavLink } from "react-router-dom";
// import faviconUpdate from "../faviconIcon.json/icon";

// import Dropzone from 'react-dropzone';

// import ProfileImageUpload from "./profileImagetwo";

function ShowUser() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activities, setActivities] = useState("");
  const [accommodations, setAccommodations] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);

    if (event.target.files[0]) {
      setImagePreview(URL.createObjectURL(event.target.files[0]));
    }

    //URL.createObjectURL is a built-in JavaScript function that creates a URL for a given object in memory.
  };

  // let token = localStorage.getItem("token");
  

  const [id, setId] = useState("");
//   const ab=useParams()
//   setId(ab)
//   console.log(id);
  let navigate = useNavigate();

  // const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!token) {
  //       navigate("/login");
  //     }
  //     return () => {};
  //   }, []);

  useEffect(() => {
    let b=localStorage.getItem("id")
    setId(b)
    if(id){


    axios.get(`http://localhost:3006/getById/${id}`).then((e) => {

      setDestination(e.data.data.destination);
      setStartDate(e.data.data.startDate);
      setEndDate(e.data.data.endDate);
      setActivities(e.data.data.activity);
      setAccommodations(e.data.data.accomodation);

      setImagePreview(e.data.data.profileImage);
    })
    
};
  }, [id]);

  const HandleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("profileImage", selectedImage);
    formData.append("destination", destination);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("activity", activities);
    formData.append("accomodation", accommodations);

    axios
      .put(`http://localhost:3006/updateIti/${id}`, formData)
      .then(() => {
        alert("profile updated successfully");
        //   navigate("/organisationprofile");
      })
      .catch((e) => {
        //   setEmailError(e.response.data.message);
      });
  };

  return (
    <div>
      {" "}

      {/* <faviconUpdate icon={imagePreview}/> */}
      <div className="main-content">
        <Card className="organisationcard">
          <div className="img">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Selected Profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/16/16363.png"
                alt="Selected Profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            )}

            <input type="file" accept="image/*" onChange={handleImageSelect} />
          </div>

          <Form onSubmit={HandleSubmit}>
            <Form.Group controlId="formBasicName" className="mb-3">
              <Form.Label style={{ color: "black" }}>Destination</Form.Label>

              <Form.Control
    
                style={{ width: "50%" }}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label style={{ color: "black" }}>Start Date:</Form.Label>

              <Form.Control
                style={{ width: "50%" }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicName" className="mb-3">
              <Form.Label style={{ color: "black" }}>End date</Form.Label>

              <Form.Control
                style={{ width: "50%" }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicName" className="mb-3">
              <Form.Label style={{ color: "black" }}>Activity:</Form.Label>

              <Form.Control
               as="textarea"
                style={{ width: "50%" }}
                value={activities}
                onChange={(e) => setActivities(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicName" className="mb-3">
              <Form.Label style={{ color: "black" }}>Accommodation</Form.Label>

              <Form.Control
               as="textarea"
                style={{ width: "50%" }}
                value={accommodations}
                onChange={(e) => setAccommodations(e.target.value)}
              />
            </Form.Group>



         

            <Row>
              <Col>
                <Button
                  variant="outline-danger"
                  type="submit"
                  className="buttonShowOrg"
                >
                  Update
                </Button>
 
              </Col>
              
            </Row>
          </Form>
        </Card>
      </div>
    </div>
  );
}
export default ShowUser;
