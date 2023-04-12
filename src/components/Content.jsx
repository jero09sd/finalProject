import React from 'react';
import Cafe from '../assets/cafe.jpg'

const Content = () => {
    return(
        <div className='w-full min-h-max h-[49rem] text-gray-300 py-16 px-4' style={{backgroundImage:`url(${Cafe})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className='max-w-[1240px] my-[15rem] mx-auto grid md:grid-cols-2'>
          <div className='flex flex-col justify-center backdrop-blur-sm bg-white/25 p-4 rounded-md'>
            <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
              eveniet ex deserunt fuga?
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Content