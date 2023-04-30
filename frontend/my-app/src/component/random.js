import { Container, Row, Col } from 'react-bootstrap';

function Itinerary() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Destination: Paris, France</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Travel Dates: June 1, 2023 - June 7, 2023</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Activities:</h4>
          <ul>
            <li>Visit the Eiffel Tower</li>
            <li>Explore the Louvre Museum</li>
            <li>Take a river cruise on the Seine River</li>
            <li>Stroll through the Luxembourg Gardens</li>
            <li>Enjoy a picnic at Champ de Mars</li>
            <li>Shop for souvenirs at Le Marais</li>
            <li>See the Palace of Versailles</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Accommodations:</h4>
          <ul>
            <li>Hotel de Crillon</li>
            <li>Le Bristol Paris</li>
            <li>The Ritz Paris</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Itinerary;
