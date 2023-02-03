import React from "react";
import { useNavigate } from "react-router-dom";

const Front = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black bg-opacity-40 w-full h-screen z-20 flex flex-row">
      <div className="flex justify-center items-center md:items-start flex-col pt-16 px-4 md:pl-16 md:w-[60%]">
        <div className="flex justify-center md:justify-start my-0 py-0 font-exo tracking-wide font-semibold text-5xl md:text-8xl">
          <p className="text-teal-300">EL</p>
          <p className="text-teal-600">ECTRICAL</p>
        </div>
        <div className="flex justify-center md:justify-start my-0 py-0 font-exo tracking-wide font-semibold text-5xl md:text-8xl">
          <p className="text-teal-300">SOC</p>
          <p className="text-teal-600">IETY</p>
        </div>
        <h2 className="text-center font-semibold md:text-left text-white text-2xl md:text-2xl my-16 md:my-8">
          Society for the Promotion of diverse technical and social <br />{" "}
          culture of the Department of Electrical Engineering
        </h2>
        <div className="flex justify-center md:block">
          <button
            className="px-4 py-2 text-white font-semibold text-2xl border-4 border-teal-700 hover:border-white hover:bg-teal-700 rounded-[24px]"
            onClick={() => navigate("about")}
          >
            Explore More
          </button>
        </div>
      </div>
      {/* <div className="bg-bgFront bg-cover bg-no-repeat opacity-40 hidden md:block md:w-[40%]"></div> */}
    </div>
  );
};

export default Front;
