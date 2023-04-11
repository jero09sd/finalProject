import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <h1 class="font-extrabold text-lg lg:text-3xl bg-gradient-to-br from-[#ff0070] via-[#790909] to-white bg-clip-text text-transparent">
        Trīstis<span class="text-[#df9b84]">.</span>
      </h1>
      <ul className="hidden text-gray-400 font-semibold md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Sign in</li>
        <li className="p-4">Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
