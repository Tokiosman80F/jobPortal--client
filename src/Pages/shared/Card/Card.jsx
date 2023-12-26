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
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            View Detail
          </button>
          <button className="btn">Apply Now</button>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal text-black" >
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{data.title}</h3>
          <p className="py-4">
            {data.description}
          </p>
          <p>{data.skills}</p>
          <p></p>
          <p></p>
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
