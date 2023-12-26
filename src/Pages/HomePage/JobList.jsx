import  { useEffect, useState } from "react";

const JobList = () => {
  const [activeTab, setActiveTab] = useState("remote");
  const [jobCollections, setJobCollections] = useState([]);

 

  const handleToggle = (btn) => {
    setActiveTab(btn);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/allJob`)
      .then((res) => res.json())
      .then((data) => {
        console.log("this is data",data);
        const result=data?.filter(job=>job.jobType===activeTab)
        console.log("result =>",result);
        setJobCollections(result);
      });
  }, [activeTab]);

  
  return (
    <div className="container mx-auto my-10">
      <div className="text-center md:text-5xl font-bold my-10">
        <h1> Job List</h1>
      </div>

      {/*-----------Toogle btn  */}
      <div className="flex items-center justify-center gap-10 ">
        <button
          onClick={() => handleToggle(`remote`)}
          className={activeTab === "remote" ? "toggleBtn" : ""}
        >
          REMOTE
        </button>
        <button
          onClick={() => handleToggle(`onsite`)}
          className={activeTab === "onsite" ? " toggleBtn" : ""}
        >
          ON-SITE
        </button>
      </div>

    {/* job Card  */}
      <div className="grid grid-cols-3 gap-5 mt-5">
        {jobCollections.map((jobCollection) => (
          <div
            className="card w-96 bg-primary text-primary-content"
            key={jobCollection._id}
          >
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
