import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const userName=form.name.value
    const email = form.email.value;
    const password = form.password.value;
    const loginInfo = { userName,email, password };

    // ----firebase
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // sweet alert modal
        if(user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Register",
            showConfirmButton: false,
            timer: 1500
          });
        }
        console.log(user);
      })
      .catch((error) => {
        console.log("Main error",error);
        console.log("Error Message =>", error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.code,
          showConfirmButton: false,
          timer: 2500
        });
      });

    console.log(loginInfo);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <img src={loginImage} alt="" />
      </div>
      <form className="w-full max-w-xl  my-10  " onSubmit={handleRegister}>
        <h1 className="text-5xl font-semibold text-center mb-10">
          Register Form
        </h1>
        <div className="w-full mb-6 md:mb-3">
          <label className="formLabel">Name</label>
          <input
            className=" w-full bg-gray-200 text-gray-700 border  py-3 px-4   focus:outline-none focus:bg-white"
            required
            type="text"
            name="name"
          />
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
        <div className="w-full mb-6 md:mb-3">
          <label className="formLabel">Password</label>
          <input
            className=" w-full bg-gray-200 text-gray-700 border  py-3 px-4   focus:outline-none focus:bg-white"
            required
            type="password"
            name="password"
          />
        </div>

        <input
          type="submit"
          value="Register"
          className=" w-full bg-green-400  py-3 px-4  font-bold border border-gray-400 rounded-md cursor-pointer ease-in-out duration-200  hover:bg-green-500"
        />

        <div className="text-gray-700 mt-5">
          Already Have An Account ?
          <Link to="/login" className="underline font-semibold text-green-600">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
