import React from "react";
// import asset from "../../assets/function.png";
import FunctionElement from "./FunctionElement";

const Function = () => {
   const fields = [];

   for (let i = 1; i <= 4; i++) {
      fields.push(<FunctionElement key={i} />);
   }

   return (
      <div className="w-full mt-20" id="function">
         <div className="flex flex-col items-center font-bold section-container ">
            <h3 className="text-[35px] pb-4 md:pb-10 md:text-[50px] text-white uppercase text-center ">
               Cum Functioneaza
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 dm:grid-cols-4  gap-x-16 px-4 ">
               {fields}
            </div>
         </div>
      </div>
   );
};

export default Function;
