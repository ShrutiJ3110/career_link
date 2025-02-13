import React, { useState } from 'react';
import { Card, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import './Jobs.css';

const jobData = [
  {
    title: 'Frontend Developer',
    description: 'Build dynamic and responsive user interfaces.',
    location: 'Delhi',
    category: 'Development',
    type: 'Full-time',
    img: 'https://media.istockphoto.com/id/1360520509/photo/businessman-using-a-computer-to-webinar-online-education-on-internet-online-courses-e.jpg?s=612x612&w=0&k=20&c=Z1jqVTOjaHZkTloB-b09hIU_BcVinaUPTqcAl7ilt6E=',
  },
  {
    title: 'Backend Developer',
    description: 'Develop server-side logic and manage databases.',
    location: 'Mumbai',
    category: 'Development',
    type: 'Full-time',
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20241128/pngtree-e-learning-platform-on-laptop-with-educational-icons-and-bright-colors-image_16693579.jpg',
  },
  {
    title: 'Data Analyst',
    description: 'Analyze datasets to derive meaningful insights.',
    location: 'Bangalore',
    category: 'Data Science',
    type: 'Full-time',
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-online-education-3d-render-of-a-computer-on-a-wooden-table-image_3792188.jpg',
  },
  {
    title: 'Full Stack Developer',
    description: 'Work on both frontend and backend development.',
    location: 'Chennai',
    category: 'Development',
    type: 'Part-time',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/009/260/470/small_2x/financial-report-data-of-business-operations-balance-sheet-and-income-statement-as-fintech-concept-business-operations-balance-sheet-and-income-statement-and-diagram-working-photo.jpg',
  },
  {
    title: 'UI/UX Designer',
    description: 'Design user interfaces and improve user experiences.',
    location: 'Pune',
    category: 'Design',
    type: 'Internship',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZanoPPoN6sHy7OTcNOde3wYRWWAy8XrwFg&s',
  },
  {
    title: 'Mobile App Developer',
    description: 'Create and maintain mobile applications.',
    location: 'Hyderabad',
    category: 'Development',
    type: 'Full-time',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN2usAxgpDMAvV24_Hiy4cg9pDj7fuYyFbw&s',
  },
  {
    title: 'Cybersecurity Specialist',
    description: 'Ensure the security of network systems.',
    location: 'Noida',
    category: 'Development',
    type: 'Full-time',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3WBakyAF653GT3l04GUJ4HVyk1LJwKdC9NgHon9zK4tz-vTLpdPkZ1kkq8RxNPbUJp8&usqp=CAU',
  },
  {
    title: 'Cloud Engineer',
    description: 'Manage cloud infrastructure and services.',
    location: 'Kolkata',
    category: 'Data Science',
    type: 'Full-time',
    img: 'https://www.shutterstock.com/image-illustration/2d-rendering-cloud-computing-concept-260nw-1222556311.jpg',
  },
  {
    title: 'Project Manager',
    description: 'Plan, execute, and oversee project deliveries.',
    location: 'Gurgaon',
    category: 'Management',
    type: 'Part-time',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww',
  },
];

function Jobs() {
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleFilter = (filterType, value) => {
    if (value === 'All') {
      setFilteredJobs(jobData);
    } else {
      setFilteredJobs(jobData.filter((job) => job[filterType] === value));
    }
  };

  return (
    <>
      <h1 className="text-center mt-4">Explore Job Opportunities</h1>

      {/* Filters */}
      <div className="filters d-flex justify-content-between my-3">
        <DropdownButton title="Filter by Location" onSelect={(e) => handleFilter('location', e)}>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Delhi">Delhi</Dropdown.Item>
          <Dropdown.Item eventKey="Mumbai">Mumbai</Dropdown.Item>
          <Dropdown.Item eventKey="Bangalore">Bangalore</Dropdown.Item>
          <Dropdown.Item eventKey="Pune">Pune</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Filter by Category" onSelect={(e) => handleFilter('category', e)}>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Development">Development</Dropdown.Item>
          <Dropdown.Item eventKey="Data Science">Data Science</Dropdown.Item>
          <Dropdown.Item eventKey="Design">Design</Dropdown.Item>
          <Dropdown.Item eventKey="Management">Management</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Filter by Type" onSelect={(e) => handleFilter('type', e)}>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Full-time">Full-time</Dropdown.Item>
          <Dropdown.Item eventKey="Part-time">Part-time</Dropdown.Item>
          <Dropdown.Item eventKey="Internship">Internship</Dropdown.Item>
        </DropdownButton>
      </div>

      {/* Job Cards */}
      <Row className="job-card-container">
        {filteredJobs.map((job, index) => (
          <Col sm={12} md={4} key={index}>
            <Card className="custom-card mt-3">
              <Card.Img variant="top" src={job.img} alt={job.title} />
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {job.location}
                  <br />
                  <strong>Category:</strong> {job.category}
                  <br />
                  <strong>Type:</strong> {job.type}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Jobs;
