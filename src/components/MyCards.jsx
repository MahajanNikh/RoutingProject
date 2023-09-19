import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCards() {
  return (
    <div className="d-flex justify-content-center my-2">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?t=st=1695142467~exp=1695146067~hmac=9044c683723236ca2837f2d522626361e8b70bdd5e58cbedba099560727d290e&w=740" />
    <Card.Body>
      <Card.Title>Mustage Car</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default MyCards
