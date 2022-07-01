import React from "react";
import ServiciiComp from "./ServiciiComp";
const Servicii = () => {
   const fields = [];
   for (let i = 1; i <= 8; i++) {
      fields.push(<ServiciiComp key={i} />);
   }

   const url = "#";

   return (
      <div className="w-full my-2 md:my-20" id="servicii">
         <div className="section-container mx-auto text-[#2E324D]">
            <h1 className="text-center text-3xl md:text-5xl font-semibold uppercase">
               Lorem Ipsum <br />
               Dolor Sit (Servicii)
            </h1>
            <p className="text-xl py-6 text-center max-w-[600px] mx-auto">
               Suspendisse aliquam, quam vel rhoncus mattis, nibh metus
               pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla
               eget
            </p>

            <div className="max-w-[1340px] mx-auto">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 mt-10">
                  {fields}
               </div>
            </div>

            <div className="text-center mt-12">
               <button className="text-sm font-bold border-solid border-2 bg-[#F89A76] border-[#F89A76]  text-white hover:bg-[transparent] hover:text-[#F89A76] duration-300  px-16 py-3 rounded-3xl drop-shadow-lg">
                  <a href={url}>BUTTON</a>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Servicii;
