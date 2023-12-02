import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
    const navList=<>
        <li><Link to="">Home</Link></li>
        <li><Link to="">Post Job</Link></li>
        <li><Link to="">My Job</Link></li>
        <li><Link to="">All Jobs</Link></li>
        <li><Link to="">About Us</Link></li>
    </>
  return (
    <div className="navbar ">
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
        </div>
        <a className="btn btn-outline hover:bg-green-500 text-xl">JobPortal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 uppercase font-semibold">
          {navList}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-green-500 hover:bg-green-600">
          <AiOutlineUser /> Login
        </a>
      </div>
    </div>
  );
};

export default Header;
