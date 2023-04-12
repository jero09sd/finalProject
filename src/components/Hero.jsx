import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[500rem] mt-[-96px] w-full text-gray-300 h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-red-500 font-bold p-2">
          UPGRADE YOUR GAMING EXPERIENCE WITH US!
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Trīstis. CAFE
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Offer you the
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 "
            strings={[
              "Best Gaming Experience",
              "Comfort of your own Home",
              "Best Internet",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
          <p className="md:text-2xl text-xl font-bold text-gray-300 justify-center text-center opacity-60">
            Have the Freedom to monitor your time credits, and use it whenever
            you want.
          </p>
        <button className="bg-red-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
