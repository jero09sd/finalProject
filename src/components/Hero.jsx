import React from "react";
import Typed from "react-typed";
import Blink from "react-blink-text";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[500rem] mt-[-96px] w-full text-gray-300 h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#1feffe] lg:flex justify-center hidden font-bold p-2">
          UPGRADE YOUR GAMING EXPERIENCE WITH US!
        </p>
        <h1 className="lg:text-7xl text-8xl font-bold md:py-6">
          <span className=" font-Untouched bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
            Triestis.
          </span>{" "}
         <span className="lg:inline-flex hidden"> GAMING CAFE</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="lg:text-5xl sm:text-4xl text-xl font-bold py-4">
            Offer you the 
          </p>

          <Typed
            className="lg:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={[
              "Best Gaming Experience!",
              "Comfort of your Home!",
              "Best Internet!",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="bg-[#2470c6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get Started
        </button>
        <div className="justify-center md:flex hidden font-bold items-center opacity-25">
          <p className="text-xl md:text-6xl font-bold py-4 pr-2">
            OPEN
          </p>
          <Blink color="#1feffe" text="24hrs!" fontSize="60px"></Blink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
