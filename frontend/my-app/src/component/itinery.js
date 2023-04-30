import React, { useState } from "react";
import { Form, Button, Container,Card } from "react-bootstrap";

const NewItineraryForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activities, setActivities] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleAddActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  const handleRemoveActivity = (index) => {
    const newActivities = [...activities];
    newActivities.splice(index, 1);
    setActivities(newActivities);
  };

  const handleAddAccommodation = (accommodation) => {
    setAccommodations([...accommodations, accommodation]);
  };

  const handleRemoveAccommodation = (index) => {
    const newAccommodations = [...accommodations];
    newAccommodations.splice(index, 1);
    setAccommodations(newAccommodations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API endpoint to create new itinerary in database
  };
  const handleActivityChange = (e, index) => {
    e.preventDefault();
    //
  };

  const handleAccommodationChange = (e, index) => {
    e.preventDefault();
    //
  };

  return (
    <Container className="container">
        <Card>
    <Form onSubmit={handleSubmit} >
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

<Form.Group controlId="formActivities">
        <Form.Label>Activities</Form.Label>
        {activities.map((activity, index) => (
          <div key={index}>
            <Form.Control
              type="text"
              placeholder="Enter activity"
              value={activity}
              onChange={(e) => handleActivityChange(e, index)}
            />
            <Button
              variant="danger"
              onClick={() => handleRemoveActivity(index)}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button variant="success" onClick={() => handleAddActivity("")}>
          Add Activity
        </Button>
      </Form.Group>

      <Form.Group controlId="formAccommodations">
        <Form.Label>Accommodations</Form.Label>
        {accommodations.map((accommodation, index) => (
          <div key={index}>
            <Form.Control
              type="text"
              placeholder="Enter accommodation"
              value={accommodation}
              onChange={(e) => handleAccommodationChange(e, index)}
            />
            <Button
              variant="danger"
              onClick={() => handleRemoveAccommodation(index)}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button variant="success" onClick={() => handleAddAccommodation("")}>
          Add Accommodation
        </Button>
      </Form.Group> 

      <Button variant="primary" type="submit">
        Create Itinerary
      </Button>
    </Form>
    </Card>
    </Container>
  );
};

export default NewItineraryForm;
