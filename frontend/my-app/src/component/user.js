import axios from "axios";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


 import "./iti.css";

function HomePage() {
    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [activities, setActivities] = useState("");
    const [accommodations, setAccommodations] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
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
    


  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0px 20px 0px",
        }}
        className="search"
      >
        <Form className="d-flex" onSubmit={HandleSubmit}>
          <Form.Control
            type="text"
            placeholder="Search"
            aria-label="Search"
            style={{
              width: "130%",
              borderRadius: "10px",
              borderColor: "aqua",
              border: "2px solid #ccc",
              boxShadow: "5px 5px 5px 5px rgba(13, 129, 218, 0.5)",
              marginRight:"20px"
            }}
            value={inputbox}
            onChange={(e) => setInputbox(e.target.value)}
          />{" "}
          <Button
            variant="warning"
            style={{ borderRadius: "10px" }}
            type="submit"
          >
            Search...
          </Button>
        </Form>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="wethbox"
      >
        <Card className="weatherbox">
          <Card.Body>

          </Card.Body>
        </Card>
      </div>
      {/* </Col>
      </Row> */}
    </div>
  );
}
export default HomePage;