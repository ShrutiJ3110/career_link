import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseCard = ({ title, description, link }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link}>
          View Course
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
