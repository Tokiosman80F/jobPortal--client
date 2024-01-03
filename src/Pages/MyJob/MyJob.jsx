import React from "react";

const MyJob = () => {
  return (
    <div >
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
          <input type="text" className="border-2 border-gray-500 rounded-md px-2 py-1" />
          <button className="bg-green-500 px-6 py-2 rounded-md ">Search </button>
        </div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-xl uppercase">
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
            {/* row 1 */}
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJob;
