import React from "react";
import hour from "../../assets/hourglass_empty_black_24dp.png";

const ServiciiComp = () => {
   return (
      <div className="flex ">
         <div className="">
            <img src={hour} alt="" className="mt-2 w-30" />
         </div>
         <div>
            <h3 className="font-semibold text-[25px]">MARIUS NON</h3>
            <p className="max-w-[180px] text-[15px] pb-4">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
         </div>
      </div>
   );
};

export default ServiciiComp;
