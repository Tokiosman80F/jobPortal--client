const Card = ({ data }) => {
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>Salary: {data.salary}</p>
        <p>Job-Type: {data.jobType}</p>
        <p>DateLine:{data.date}</p>
        <div className="card-actions justify-end">
          <button
            className="btn"
            onClick={() => document.getElementById(`my_modal_${data._id}`).showModal()}
          >
            View Detail
          </button>
          <button className="btn">Apply Now</button>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id={`my_modal_${data._id}`} className="modal text-black">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{data.title}</h3>
          <p className="py-4">{data.description}</p>
          {/* <ul className="flex">
            Skills:{data.skills.map((skill,index)=><li key={index} className="li" >{skill}</li>)}
          </ul> */}
          <p>Skill: {data.skills.join(",")}</p>
          <p>Department:{data.department}</p>
          <p>Job Type:{data.jobType}</p>
          <p>DeadLine:{data.date}</p>
          <p>Salary:{data.salary}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Card;
