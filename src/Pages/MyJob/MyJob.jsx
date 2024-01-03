import React, { useContext, useEffect, useState } from "react";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";
import { data } from "autoprefixer";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
const MyJob = () => {
  const { user } = useContext(AuthContext);
  const [myjobs, setMyjob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/myjob/${user?.email}`)
      .then((response) => response.json())
      .then((data) => setMyjob(data))
      .catch((error) => console.error(error));
  }, [user?.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        {/* 
search bar 
----------------
table      
1. title
2.category
3. salary
4. job-type
5. date 
6.edit btn
7.delete btn

*/}
        <div className="flex  items-center justify-center gap-2">
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md px-2 py-1"
          />
          <button className="bg-green-500 px-6 py-2 rounded-md text-white">
            Search
          </button>
        </div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-xl uppercase ">
              <th>Sl</th>
              <th>Title</th>
              <th>category</th>
              <th>salary</th>
              <th>job-type</th>
              <th>date</th>
              <th>Update Info</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myjobs.map((myjob, index) => (
              <tr key={myjob._id} >
                <th>{index + 1}</th>
                <td>{myjob.title}</td>
                <td>{myjob.department}</td>
                <td>$ {myjob.salary}</td>
                <td>{myjob.jobType}</td>
                <td>{myjob.date}</td>
                <td>
                  <button className="bg-blue-500 text-white p-3 rounded-md flex items-center gap-2 justify-center ">
                    <span>Update</span> <GrUpdate />
                  </button>
                </td>
                <td>
                  <button className="bg-red-400 text-white p-3 rounded-md flex items-center gap-2 justify-center ">
                    <span>Delete</span> <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJob;
