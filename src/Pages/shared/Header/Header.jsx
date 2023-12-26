import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("sign out successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
  // console.log(user.email);
  const navList = (
    <>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="/postJob">Post Job</Link>
      </li>
      <li>
        <Link to="">My Job</Link>
      </li>
      <li>
        <Link to="/all-job">All Jobs</Link>
      </li>
      <li>
        <Link to="">About Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <a className="btn btn-outline hover:bg-green-500 text-xl">JobPortal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 uppercase font-semibold">
          {navList}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <>
            <button className="bg-gray-600 text-white p-2 rounded-2xl">
              {user?.email}
            </button>
            <Link
              onClick={handleLogout}
              className="btn bg-green-500 hover:bg-green-400 "
            >
              <AiOutlineUser /> Logout
            </Link>
          </>
        ) : (
          <Link to="/login" className="btn bg-green-500 hover:bg-green-400 ">
            <AiOutlineUser /> Login
          </Link>
        )}
        {/* <Link to="/login" className="btn bg-green-500 hover:bg-green-400 ">
            <AiOutlineUser /> Login
          </Link> */}
      </div>
    </div>
  );
};

export default Header;
