import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 class="font-extrabold font-Untouched text-lg lg:text-3xl  bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
        Triestis<span class="text-[#1feffe]">.</span>
      </h1>
      <ul className="hidden text-gray-400 font-semibold md:flex">
        <li className="p-4"><Link to="/">Home</Link></li>
        <li className="p-4"><Link to="/About">About </Link></li>
        <li className="p-4"><Link to="/Contact">Contact</Link></li>
        <li className="p-4 border-b border-[#1feffe]">Sign in</li>
        <li className="p-4">Register</li>
      </ul>
      <div  onClick={handleNav} className=' block md:hidden'>
      {nav ? <AiOutlineClose size={20} color="white" /> : <AiOutlineMenu size={20} color="white" />}
      </div>
      <ul className={nav ? 'fixed min-h-full left-0 top-0 w-[60%] text-white border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-600 fixed left-[-100%]'}>
      <h1 class="mx-4 mt-4 w-full font-extrabold font-Untouched text-lg lg:text-3xl bg-gradient-to-br from-[#2470c6]  via-[#1feffe] to-white bg-clip-text text-transparent">
      Triestis<span class="text-[#1feffe]">.</span></h1>
        <li className="p-4 border-b border-gray-200 hover:border-gray-800 ease-out transition-all"> <Link to="/">Home</Link></li>
        <li className="p-4 "><Link to="/About"> About </Link></li>
        <li className="p-4 "><Link to="/Contact"> Contact</Link></li>
        <li className="p-4 ">Sign in</li>
        <li className="p-4 ">Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
