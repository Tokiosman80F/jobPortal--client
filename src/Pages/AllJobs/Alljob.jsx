import { useEffect, useState } from "react";
import Card from "../shared/Card/Card";

const Alljob = () => {
  const [allJobs, setAlljobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/allJob`)
      .then((res) => res.json())
      .then((data) => setAlljobs(data));
  }, []);
  return (
    <div>
      <div className="  bg-gradient-to-br from-lime-500 via-green-400 to-emerald-500  ">
        <p className="font-semibold text-2xl py-10 ml-10">All Job's Here</p>
      </div>
      <div className="container mx-auto">
        <div className="bg-base-300 ">
          <p> No of Job:{allJobs.length}</p>
          <p>Date:</p>
        </div>

        <div className="grid grid-cols-4 gap-3 ">
          {allJobs.map((job) => (
            <Card key={job._id} data={job}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alljob;
