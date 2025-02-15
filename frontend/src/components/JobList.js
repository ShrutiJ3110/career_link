import React from 'react';
import JobCard from './JobCard';
import jobs from './jobData';

export default function JobList() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          location={job.location}
          description={job.description}
        />
      ))}
    </div>
  );
}
