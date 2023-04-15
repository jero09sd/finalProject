import React from "react";
import Lounge from "../routes/components/assets/Lounges.jpg";
import IBar from "../routes/components/assets/internet-bar.jpg";

function About() {
  return (
    <div
      className="flex justify-center mt-0 w-full  h-[55rem] bg-gradient-to-b from-transparent via-inherit to-transparent"
      style={{
        backgroundImage: `url(${Lounge})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6  min-h-max h-[49rem]">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 mt-[10rem]">
          <div
            class="md:5/12 lg:w-5/12 h-[38rem] hidden md:flex justify-center items-center rounded-md"
            style={{
              backgroundImage: `url(${IBar})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div class="md:7/12 lg:w-6/12 bg-black/25 p-5 rounded-md">
            <h1 class="font-extrabold font-Untouched text-lg lg:text-7xl  bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
            <span className=" text-gray-200 font-display">All you nee to know About</span> Triestis<span class="text-[#1feffe]">.</span> 
            </h1>
            <p class="mt-6 text-gray-200 overflow-hidden h-[20rem] md:flex">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque! Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum
              tenetur beatae unde aperiam, repellat expedita consequatur!
              Officiis id consequatur atque doloremque! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum
              tenetur beatae unde aperiam, repellat expedita consequatur!
              Officiis id consequatur atque doloremque! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum
              tenetur beatae unde aperiam, repellat expedita consequatur!
              Officiis id consequatur atque doloremque!
            </p>
            <p class="mt-4 text-gray-200">
              {" "}
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
