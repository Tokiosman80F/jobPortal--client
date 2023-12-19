import React, { useState } from "react";

const JobList = () => {
  const [active, setActive] = useState("remote");
  const handleToggle=(btn)=>{
    setActive(btn)
  }
  return (
    <div className="container mx-auto my-10">
      <div className="text-center md:text-5xl font-bold my-10">
        <h1> Job List</h1>
      </div>
      <div className="flex items-center justify-center gap-10 ">
        <button onClick={()=>handleToggle(`remote`)} className={active==='remote'? 'toggleBtn ': ""}>REMOTE</button>
        <button onClick={()=>handleToggle(`onsite`)} className={active==='onsite'?' toggleBtn':""}>
          ON-SITE
        </button>
      </div>
    </div>
  );
};

export default JobList;
