const PostJob = () => {
  return (
    <div className="bg">
      <div className="  bg-gradient-to-br from-lime-500 via-green-400 to-emerald-500  ">
        <p className="font-semibold text-2xl py-10 ml-10">Post Your Job Here</p>
      </div>
      <form className="w-full max-w-2xl mx-auto my-10 p-2 bottom-2">
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="formLabel">Job title</label>
            <input
              className=" w-full bg-gray-200 text-gray-700 border  py-3 px-4 focus:outline-none focus:bg-white"
              required
              type="text"
              name="jobname"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="formLabel">Salary</label>
            <input
              className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
              required
              type="number"
              name="salary"
            />
          </div>
        </div>

        <div className="w-full mb-6 md:mb-3">
          <label className="formLabel">Email</label>
          <input
            className=" w-full bg-gray-200 text-gray-700 border  py-3 px-4   focus:outline-none focus:bg-white"
            required
            type="email"
            name="email"
          />
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="formLabel">department</label>
            <div className="relative">
              <select
                className=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required
                name="department"
              >
                <option>Software Enginner</option>
                <option>Web Developer</option>
                <option>System Network</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="formLabel">Job Types</label>
            <div className="relative">
              <select
                className=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required
                name="jobtype"
              >
                <option>Remote</option>
                <option>On-site</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className=" uppercase  text-gray-700 text-xs font-bold mb-2">
              Date
            </label>
            <input
              className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
              type="date"
              name="date"
            />
          </div>
        </div>
        <div className="w-full  mb-6 md:mb-0">
          <label className="formLabel">skills</label>
          <input
            className=" w-full bg-gray-200 text-gray-700 border  py-3 px-4   focus:outline-none focus:bg-white"
            required
            type="text"

          />
        </div>
        <div className="w-full mb-6 md:mb-0">
          <label className="formLabel">Description</label>
          <textarea
            rows="5"
            className=" w-full bg-gray-200 text-gray-700 border  py-3 px-4   focus:outline-none focus:bg-white"
            required
            type="text"
            name="description"
          />
        </div>
        <input
          type="submit"
          value="Post It"
          className="bg-green-400 w-full py-3 px-4 uppercase font-bold border border-gray-400 rounded-md cursor-pointer ease-in-out duration-200  hover:bg-green-500"
        />
      </form>
    </div>
  );
};

export default PostJob;
