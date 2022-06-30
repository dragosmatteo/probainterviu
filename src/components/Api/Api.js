import React from "react";
import { useState, useEffect } from "react";
import ApiComponent from "./ApiComponent";

const Api = () => {
   const [users, setUsers] = useState([]);
   const user = users.slice(0, 4);
   useEffect(() => {
      fetchData();
   });

   const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => setUsers(data))
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div className="w-full py-12 mt-4">
         <div className="section-container mx-auto text-black px-2">
            <h1 className="text-center text-5xl">API</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pt-1 md:pt-6">
               {user.map((user) => (
                  <ApiComponent
                     id={user.id}
                     key={user.id}
                     name={user.name}
                     username={user.username}
                     email={user.email}
                     phone={user.phone}
                     city={user.address.city}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Api;
