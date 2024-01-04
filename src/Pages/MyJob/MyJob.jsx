import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import Modal from "./Modal";
const MyJob = () => {
  const { user } = useContext(AuthContext);
  const [myjobs, setMyjob] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResultMessage, setSearchResultMessage] = useState("");
  
  // -----  for loading user data -----
  useEffect(() => {
    fetch(`http://localhost:3000/myjob/${user?.email}`)
      .then((response) => response.json())
      .then((data) => setMyjob(data))
      .catch((error) => console.error(error));
  }, [user?.email]);

  // -----  for searching -----
  const handleSearch = () => {
    console.log("clicked");
    fetch(`http://localhost:3000/jobSearching/${searchText}`)
      .then((response) => response.json())
      .then((data) => {
        setMyjob(data);
        setSearchResultMessage(data.length === 0 ? "No data found" : "");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex  items-center justify-center gap-2">
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md px-2 py-1"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 px-6 py-2 rounded-md text-white"
          >
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
            {myjobs.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center text-2xl">
                  {searchResultMessage ||
                    "No data available. Refresh the page "}
                </td>
              </tr>
            ) : (
              myjobs.map((myjob, index) => (
                <tr key={myjob._id}>
                  <th>{index + 1}</th>
                  <td>{myjob.title}</td>
                  <td>{myjob.department}</td>
                  <td>$ {myjob.salary}</td>
                  <td>{myjob.jobType}</td>
                  <td>{myjob.date}</td>
                  <td>
                    <button
                      onClick={()=>document.getElementById('my_modal_3').showModal()}
                      className="bg-blue-500 text-white p-3 rounded-md flex items-center gap-2 justify-center "
                    >
                      <span>Update</span> <GrUpdate />
                    </button>
                    <Modal />
                  </td>

                  <td>
                    <button className="bg-red-400 text-white p-3 rounded-md flex items-center gap-2 justify-center ">
                      <span>Delete</span> <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJob;
