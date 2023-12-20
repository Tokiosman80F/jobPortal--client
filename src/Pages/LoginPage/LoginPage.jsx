import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    const form= e.target
    const email=form.email.value
    const password=form.password.value
    const loginInfo={email,password}
    console.log(loginInfo);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <img src={loginImage} alt="" />
      </div>
      <form className="w-full max-w-xl  my-10  " onSubmit={handleLogin}>
        <h1 className="text-5xl font-semibold text-center mb-10">Login Form</h1>
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
        <div className="flex justify-between items-center">
          <input
            type="submit"
            value="Login with Email"
            className="bg-green-400  py-3 px-4  font-bold border border-gray-400 rounded-md cursor-pointer ease-in-out duration-200  hover:bg-green-500"
          />
          <p className="text-gray-500 font-bold   ">Or</p>
          <button className="py-3 px-4 border border-gray-400 rounded-md cursor-pointer ease-in-out duration-200 flex items-center bg-black text-white gap-2">Login in Google <FcGoogle /></button>
        </div>
        <div className="text-gray-700 mt-5">New here ? <Link to="/register" className="underline font-semibold text-green-600">Register Now</Link> </div>
      </form>
    </div>
  );
};

export default LoginPage;
