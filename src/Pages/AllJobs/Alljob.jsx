import { useEffect, useState } from "react";
import Card from "../shared/Card/Card";

const Alljob = () => {
  const [allJobCollection,setAllJobCollection]=useState([])
  useEffect(()=>{fetch(`http://localhost:3000/allJob`).then(response=>response.json()).then(data=>{
    console.log(data);
    setAllJobCollection(data)
  }).catch(error=>{
    console.error(error)
  })},[])
  
  return (
    <div>
      <div className="  bg-gradient-to-br from-lime-500 via-green-400 to-emerald-500  ">
        <p className="font-semibold text-2xl py-10 ml-10">All Job's Here</p>
      </div>
      <div className="container mx-auto">
        <div className="bg-base-300 ">
        </div>

        <div className="grid grid-cols-4 gap-3 ">
          {allJobCollection.map((job) => (
            <Card key={job._id} data={job}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alljob;
