import React from "react";
import home from "../assets/home.png";

const Hero = () => {
   return (
      <div
         className="w-full flex flex-col justify-between bg-white py-2 px-6 md:py-10"
         name="home"
      >
         <div className="grid dm:grid-cols-2 mx-auto section-container">
            <div className="flex flex-col text-center justify-center dm:text-left">
               <h1 className="text-4xl sm:text-[50px] md:text-[70px] xl:text-[80px] 2xl:text-[100px] text-[#2E324D] font-bold	">
                  LOREM IPSUM
               </h1>
               <p className="ml-1 mt-4 text-xl dm:w-[600px] mx-auto  text-[20px]  xl:text-[25px] 2xl:text-[30px] text-[#2E324D] xl:mt-12 leading-9 font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
               </p>

               <div>
                  <button className="mt-4 py-4 px-4 text-xl rounded-3xl drop-shadow-lg font-bold md:text-2xl border-solid border-2 bg-[#F89A76] border-[#F89A76]  text-white hover:bg-[transparent] hover:text-[#F89A76] duration-300 md:px-16 md:py-8 mx-auto dm:mx-0 dm:mt-16  ">
                     FA-TI CONT GRATUIT
                  </button>
               </div>
            </div>

            <div className="dm:mr-[-8rem]">
               <img
                  src={home}
                  alt="home-img"
                  className="scale-100 2xl:scale-125"
               />
            </div>
         </div>
      </div>
   );
};

export default Hero;
