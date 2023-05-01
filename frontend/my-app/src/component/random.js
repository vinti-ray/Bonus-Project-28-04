import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import axios from "axios";
function Itinerary() {
  const [iti, setIti] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3006/getIti`).then((responce) => {
      setIti(responce.data.data);
    });
  },[]);
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>My Blog</h1>
        </Col>
      </Row>
      <Row className="my-4" style={{height:"300px"}}>
        {iti.map((book) => (
          <Col md={4} key={book._id}>
            <Card>
              <Card.Img
                variant="top"
                src={book.profileImage?book.profileImage:"https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
              <Card.Body>
                <Card.Title>Destination: {book.destination}</Card.Title>
                <Card.Text>
                 Start Date:  {new Date(book.startDate).toLocaleDateString()}
                </Card.Text>
                <Card.Text>
                  End Date: {new Date(book.endDate).toLocaleDateString()}
                </Card.Text>
                <Card.Text>Activity: {book.activity}</Card.Text>
                <Card.Text>Accomodation: {book.accomodation}</Card.Text>

                <Button variant="primary" href={"/user"} onClick= {localStorage.setItem("id",book._id)}>
                  Add
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
   
    </Container>
  );
}

export default Itinerary;
