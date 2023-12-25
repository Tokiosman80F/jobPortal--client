import React, { useEffect, useState } from "react";

const JobList = () => {
  const [active, setActive] = useState("remote");
  const [jobCollections, setJobCollections] = useState([]);
  const handleToggle = (btn) => {
    setActive(btn);
  };
  console.log(jobCollections);
  useEffect(() => {
    fetch(`http://localhost:3000/allJob`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobCollections(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-10">
      <div className="text-center md:text-5xl font-bold my-10">
        <h1> Job List</h1>
      </div>
      <div className="flex items-center justify-center gap-10 ">
        <button
          onClick={() => handleToggle(`remote`)}
          className={active === "remote" ? "toggleBtn " : ""}
        >
          REMOTE
        </button>
        <button
          onClick={() => handleToggle(`onsite`)}
          className={active === "onsite" ? " toggleBtn" : ""}
        >
          ON-SITE
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-5 mt-5">
      {jobCollections.map((jobCollection) => (
        <div className="card w-96 bg-primary text-primary-content" key={jobCollection._id}>
          <div className="card-body">
            <h2 className="card-title">{jobCollection.title}</h2>
            <p>Salary: {jobCollection.salary}</p>
            <p>Job-Type: {jobCollection.jobType}</p>
            <p>DateLine:{jobCollection.date}</p>
            <div className="card-actions justify-end">
              <button className="btn">View Detail</button>
              <button className="btn">Apply Now</button>
            </div>
          </div>
        </div>
      ))}
      </div>
  
    </div>
  );
};

export default JobList;
