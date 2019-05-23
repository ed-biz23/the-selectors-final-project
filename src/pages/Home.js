import React, { useState, useEffect } from 'react';
import JobDetails from '../components/JobDetails';

function Home() {
    const [jobs, setJobs] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetch(`https://data.cityofnewyork.us/resource/kpav-sd4t.json?$limit=10&$offset=${offset}`)
          .then(response => response.json())
          .then(data => {
            setJobs(data);
        });
    }, [offset]); 

    return (
      <div>
        {jobs.map(job => (
          <JobDetails job={job} />
        ))}
        <button onClick={() => setOffset(offset + 105)}>Next</button>
        <p />
      </div>
    );
}

export default Home;