import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Welcome to Car World</h1>
          <p>Your one-stop destination for the best cars!</p>
          <Button className='btn btn-light btn-lg' as={Link} to="/about">Learn More</Button>
        </Container>
      </section>

      {/* Featured Car Listings */}
      <section className="py-5">
        <Container>
          <h2>Featured Cars</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/bmw-is-parked-beach-front-palm-trees_903974-2.jpg?w=740" alt="Car 1" />
                <Card.Body>
                  <Card.Title>Car Model 1</Card.Title>
                  <Card.Text>Price: $30,000</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-718.jpg?w=740" alt="Car 2" />
                <Card.Body>
                  <Card.Title>Car Model 2</Card.Title>
                  <Card.Text>Price: $25,000</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/red-mini-coupe-driving-highway-with-high-speed_114579-4060.jpg?w=740&t=st=1695158650~exp=1695159250~hmac=fec853f0f3d195323f1fd03d4102b66fdd4652f84fd4f8a625d09c2a0e7f25db" alt="Car 3" />
                <Card.Body>
                  <Card.Title>Car Model 3</Card.Title>
                  <Card.Text>Price: $35,000</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="bg-light py-5">
        <Container>
          <h2>Contact Us</h2>
          <p>Have questions or want to schedule a test drive?</p>
          <Button variant="primary" to="RoutingProject/cards">Contact Us</Button>
        </Container>
      </section>
    </div>
  )
}

export default Home
