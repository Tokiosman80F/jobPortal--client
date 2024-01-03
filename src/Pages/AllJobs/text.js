import React, { useEffect, useState } from "react";
import Card from "../shared/Card/Card";

const JobList = () => {
  const [jobCollections, setJobCollections] = useState([]);
  const [sortedJobCollections, setSortedJobCollections] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest"); // Default to newest

  const sortByDate = () => {
    const sortedData = [...jobCollections];
    sortedData.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    setSortedJobCollections(sortedData);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "newest" ? "oldest" : "newest"));
  };

  useEffect(() => {
    fetch(`http://localhost:3000/allJob`)
      .then((res) => res.json())
      .then((data) => {
        setJobCollections(data);
        setSortedJobCollections(data);
      });
  }, []); // No dependencies, fetch once on component mount

  return (
    <div className="container mx-auto my-10">
      <div className="text-center md:text-5xl font-bold my-10">
        <h1> Job List</h1>
      </div>

      {/* Sort buttons */}
      <div>
        <button onClick={sortByDate} className="btn">
          Sort by Date
        </button>
        <button onClick={toggleSortOrder} className="btn">
          Toggle Sort Order ({sortOrder})
        </button>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-3 gap-5 mt-5">
        {sortedJobCollections.map((jobCollection) => (
          <Card key={jobCollection._id} data={jobCollection}></Card>
        ))}
      </div>
    </div>
  );
};

export default JobList;
