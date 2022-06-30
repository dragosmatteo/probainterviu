import React from "react";
import hour from "../../assets/hour1.png";

const FunctionElement = () => {
   return (
      <div className="bg-white rounded-3xl shadow-xl flex flex-col justify-center items-center px-8 py-10 m-2 ">
         <img src={hour} alt="hour" className="w-24" />
         <h3 className="text-[#F89A76] text-[25px] uppercase">Mauris Non</h3>
         <p className="font-thin text-[15px]">
            Pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla eget
            ligula eget nunc vestibulum
         </p>
      </div>
   );
};

export default FunctionElement;
