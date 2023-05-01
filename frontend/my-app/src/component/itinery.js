import React, { useState } from "react";
import { Form, Button, Container,Card } from "react-bootstrap";
import axios from "axios";
import "./iti.css"

const NewItineraryForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activities, setActivities] = useState("");
  const [accommodations, setAccommodations] = useState("");

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   let data={
    destination:destination,
    startDate:startDate,
    endDate:endDate,
   activity:activities,
     accomodation:accommodations

   }
   console.log(data)
   axios.post("http://localhost:3006/createiti",data).then((e)=>alert("data uploaded successfully"))
  };


  return (
    <div>
<div
        style={{ display: "flex", justifyContent: "center" }}
        className="wethbox"
      >
        <Card className="weatherbox">
          <Card.Body>
        <Form  onSubmit={handleSubmit} >
      <Form.Group controlId="formDestination">
        <Form.Label>Destination</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={handleDestinationChange}
        />
      </Form.Group>

      <Form.Group controlId="formStartDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter start date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </Form.Group>

      <Form.Group controlId="formEndDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter end date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </Form.Group>
      <Form.Group controlId="formEndDate">
        <Form.Label>Activity</Form.Label>
        <Form.Control
     as="textarea"
//   rows={4}
          placeholder="Enter activity"
          value={activities}
          onChange={(e)=>setActivities(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formEndDate">
        <Form.Label>Accommodation</Form.Label>
        <Form.Control
    as="textarea"
        //   rows={4}
          placeholder="Enter accomodation"
          value={accommodations}
          onChange={(e)=>setAccommodations(e.target.value)}
        />
      </Form.Group>


      <Button style={{

          margin: "20px 10px 20px 250px",
        }} variant="primary" type="submit">
        Create Itinerary
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </div>

    </div>
  );
};

export default NewItineraryForm;
