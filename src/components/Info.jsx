import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { TbFreeRights } from "react-icons/tb";

const Info = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
          <div className="flex justify-center items-center">
            <TbFreeRights size={50} />
            </div>
            Free User</h2>
          <p className="text-center text-4xl font-bold">$0</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">4hrs Min Top up</p>
            <p className="py-2 border-b mx-8">Free Noodle</p>
          </div>
          <button className="bg-[#2470c6] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
          <div className="flex justify-center items-center">
            <AiFillDollarCircle color="gold" size={50} />
            </div>
            Yearly Subscription
          </h2>
          <p className="text-center text-4xl font-bold">$500</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Unlimited Time</p>
            <p className="py-2 border-b mx-8">Free Meal <span className="text-xs text-gray-500">(3 times a day)</span> </p>
            <p className="py-2 border-b mx-8">Free Seasonal Jacket</p>
            <p className="py-2 border-b mx-8">You can pack your Bag and live in Here!</p>
          </div>
          <button className="bg-black text-[#1feffe] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Buy Now
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
          <div className="flex justify-center items-center">
            <AiFillDollarCircle color="gold" size={50} />
            </div>
            Monthly Subscription
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8">Unlimited Time</p>
            <p className="py-2 border-b mx-8">Free Meal <span className="text-xs text-gray-500">(3 times a day)</span> </p>
            <p className="py-2 border-b mx-8"><span className="text-xs text-gray-500">50%  discount</span> Seasonal Jacket</p>
          </div>
          <button className="bg-[#2470c6] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
