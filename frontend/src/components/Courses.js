import React, { useState } from 'react';
import { Card, Row, Col, Dropdown, DropdownButton, Container } from 'react-bootstrap';
import './Courses.css';
import NavbarComponent from './NavbarComponent';

const courseData = [
  {
    title: 'Web Development Bootcamp',
    category: 'Web Development',
    type: 'Certification',
    duration: '3 Months',
    img: 'https://png.pngtree.com/thumb_back/fh260/back_pic/03/76/37/2257bea537b28e6.jpg',
  },
  {
    title: 'Data Science with Python',
    category: 'Data Science',
    type: 'Free',
    duration: '6 Months',
    img: 'https://www.shutterstock.com/image-vector/digital-book-online-education-blank-260nw-1896594091.jpg',
  },
  {
    title: 'Digital Marketing Masterclass',
    category: 'Marketing',
    type: 'Certification',
    duration: '2 Months',
    img: 'https://t3.ftcdn.net/jpg/03/45/29/56/360_F_345295622_gUzV6dU09syTrk49uSabBvhaEDBlJeFp.jpg',
  },
  {
    title: 'Mobile App Development',
    category: 'Web Development',
    type: 'Certification',
    duration: '3 Months',
    img: 'https://static.vecteezy.com/system/resources/previews/001/937/563/non_2x/online-education-application-learning-worldwide-on-computer-mobile-website-background-social-distance-concept-the-classroom-training-course-library-illustration-flat-vector.jpg',
  },
  {
    title: 'Cybersecurity Fundamentals',
    category: 'Security',
    type: 'Free',
    duration: '6 Months',
    img: 'https://img.freepik.com/free-photo/network-people-digital-world_9975-23272.jpg',
  },
  {
    title: 'AI and Machine Learning',
    category: 'AI',
    type: 'Free',
    duration: '2 Months',
    img: 'https://static.vecteezy.com/system/resources/previews/001/937/735/non_2x/online-education-application-learning-worldwide-on-computer-mobile-website-background-social-distance-concept-the-classroom-training-course-library-illustration-flat-vector.jpg',
  },
  {
    title: 'Project Management (PMP Prep)',
    category: 'Management',
    type: 'Certification',
    duration: '3 Months',
    img: 'https://media.istockphoto.com/id/1360520509/photo/businessman-using-a-computer-to-webinar-online-education-on-internet-online-courses-e.jpg?s=612x612&w=0&k=20&c=Z1jqVTOjaHZkTloB-b09hIU_BcVinaUPTqcAl7ilt6E=',
  },
  {
    title: 'Cloud Computing',
    category: 'Cloud',
    type: 'Certification',
    duration: '6 Months',
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-global-e-learning-3d-word-with-world-globe-and-computer-mouse-image_3859492.jpg',
  },
  {
    title: 'UI/UX Design',
    category: 'Design',
    type: 'Free',
    duration: '2 Months',
    img: 'https://t3.ftcdn.net/jpg/03/45/29/56/360_F_345295622_gUzV6dU09syTrk49uSabBvhaEDBlJeFp.jpg',
  },
];

function Courses() {
  const [filteredCourses, setFilteredCourses] = useState(courseData);

  const handleFilter = (filterType, value) => {
    if (value === 'All') {
      setFilteredCourses(courseData);
    } else {
      setFilteredCourses(courseData.filter((course) => course[filterType] === value));
    }
  };

  return (
    <>
    <NavbarComponent />
      <h1 className="text-center mt-4">Explore Courses</h1>

      {/* Filters */}
      <div className="filters d-flex justify-content-between my-3">
        <DropdownButton title="Filter by Category" onSelect={(e) => handleFilter('category', e)}>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Web Development">Web Development</Dropdown.Item>
          <Dropdown.Item eventKey="Data Science">Data Science</Dropdown.Item>
          <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
          <Dropdown.Item eventKey="AI">AI</Dropdown.Item>
          <Dropdown.Item eventKey="Security">Security</Dropdown.Item>
          <Dropdown.Item eventKey="Management">Management</Dropdown.Item>
          <Dropdown.Item eventKey="Cloud">Cloud</Dropdown.Item>
          <Dropdown.Item eventKey="Design">Design</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Filter by Type" onSelect={(e) => handleFilter('type', e)}>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Certification">Certification</Dropdown.Item>
          <Dropdown.Item eventKey="Free">Free</Dropdown.Item>
        </DropdownButton>
      </div>

      {/* Course Cards */}
      <Container fluid>
        <Row className="course-card-container">
          {filteredCourses.map((course, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="d-flex justify-content-center">
              <Card className="custom-card mt-3">
                <Card.Img variant="top" src={course.img} alt={course.title} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>
                    <strong>Category:</strong> {course.category}
                    <br />
                    <strong>Type:</strong> {course.type}
                    <br />
                    <strong>Duration:</strong> {course.duration}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Courses;
