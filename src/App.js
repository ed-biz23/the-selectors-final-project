import React, { Fragment, useState, useEffect } from 'react';
import JobDetails from './component/JobDetails'
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetch(`https://data.cityofnewyork.us/resource/kpav-sd4t.json?$limit=20&$offset=${offset}`)
      .then(response => response.json())
      .then(data => {
        setJobs(data); // set users in state
    });
  }, [offset]); 

  return (
    <Fragment>
      <div className="App">
        <h1>Jobs in NYC</h1>
        {jobs.map(job => (
          <JobDetails job={job} />
        ))}
        <button onClick={() => setOffset(offset + 20)}>Next</button>
      </div>
    </Fragment>
  );
}

export default App;
