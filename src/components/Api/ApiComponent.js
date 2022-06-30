import React from "react";

const ApiComponent = (props) => {
   const { name, email, phone, city } = props;
   return (
      <div className="flex flex-col bg-white rounded-3xl shadow-xl justify-center items-center px-8 py-14 m-2  ">
         <h3 className="font-semibold text-2xl py-1">{name}</h3>
         <h3 className="py-1">Email: {email}</h3>
         <h3 className="py-1">Phone: {phone}</h3>
         <h3 className="py-1">City: {city}</h3>
      </div>
   );
};

export default ApiComponent;
