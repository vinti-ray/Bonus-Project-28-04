import axios from "axios";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import "./iti.css";

function User() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activities, setActivities] = useState("");
  const [accommodations, setAccommodations] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [id, setId] = useState("");
  useEffect(() => {
    let b = localStorage.getItem("id");
    setId(b);
    console.log(id);
    if (id) {
      axios.get(`http://localhost:3006/getById/${id}`).then((e) => {
        setDestination(e.data.data.destination);
        setStartDate(e.data.data.startDate);
        setEndDate(e.data.data.endDate);
        setActivities(e.data.data.activity);
        setAccommodations(e.data.data.accomodation);

        setImagePreview(e.data.data.profileImage);
      });
    }
  }, [id]);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "end" }}
        className="wethbox"
      >
        <Card className="weatherbox">
          <Card.Body>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
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
              <h1>{destination}</h1>
            </div>

            <div>
              <Row>
                <Col>
                  <h4>
                    {" "}
                    Start Date: {new Date(startDate).toLocaleDateString()}
                  </h4>
                </Col>
                <Col>
                  <h4> End Date: {new Date(endDate).toLocaleDateString()}</h4>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h4>Activity: {activities}</h4>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h4>Accommodation: {accommodations}</h4>
                </Col>
              </Row>
            </div>

            <Button variant="primary" href={"/id"} >
                  update
                </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default User;
