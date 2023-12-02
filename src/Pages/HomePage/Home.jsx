import React from "react";
import Lottie from "lottie-react";
import bannerAnimation from "../../assets/images/banner.json";
const Home = () => {
  return (
    <div className=" container mx-auto h-[90vh] flex flex-col-reverse md:flex-row items-center  ">
      <div className="space-y-4 " >
        <h1 className="capitalize font-bold  text-4xl md:text-7xl md:w-2/3">
          Find A <span className="text-green-500 underline">job</span> that <span className="text-green-500 underline">matches</span> your passios
        </h1>
        <p className=" font-semibold text-gray-600 text-xl">
          Hand-picked opportunities to work from home, remotely, freelance,
          full-time, part-time, contract and internships.
        </p>
      </div>
      <div>
        <Lottie animationData={bannerAnimation} className="h-full"></Lottie>
      </div>
    </div>
  );
};

export default Home;
