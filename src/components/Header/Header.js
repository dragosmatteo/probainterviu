import { React, useState } from "react";
import logo from "../../assets/logoh.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import HeaderComp from "./HeaderComp";
import HeaderMobile from "./HeaderMobile";
import { v4 } from "uuid";

const Header = () => {
   const [nav, setNav] = useState(false);

   const navClick = () => setNav(!nav);

   const handleClose = () => setNav(!nav);

   const url = "#";

   const links = [
      {
         title: "HOME",
      },
      {
         title: "DESPRE NOI",
      },
      {
         title: "CUM FUNCTIONEAZA",
      },
      {
         title: "SFATURI",
      },
      {
         title: "F.A.Q.",
      },
      {
         title: "CONTACT",
      },
   ];

   return (
      <div className="w-screen h-[120px] bg-white z-10">
         <div className="px-4 flex mx-auto justify-between items-center h-full section-container">
            <div className="ml-2">
               <img src={logo} alt="logo" />
            </div>

            <div className="flex items-center text-[18px]">
               <ul className="hidden dm:flex ">
                  {links.map((item) => (
                     <HeaderComp key={v4()} {...item} />
                  ))}
               </ul>

               <div className="hidden dm:flex pl-4">
                  <button className="border-none bg-[#F89A76] text-white px-10 py-2 rounded-3xl drop-shadow-lg">
                     <a href={url}>LOG IN</a>
                  </button>
               </div>
            </div>

            <div className=" dm:hidden" onClick={navClick}>
               {!nav ? (
                  <MenuIcon className="w-10 " />
               ) : (
                  <XIcon className="w-10" />
               )}
            </div>
         </div>

         <ul
            className={
               !nav
                  ? "hidden"
                  : "absolute bg-zinc-200 w-full text-center text-2xl font-semibold z-10"
            }
         >
            {links.map((item) => (
               <HeaderMobile key={v4()} {...item} onClick={handleClose} />
            ))}

            <div className="py-4 items-center ">
               <button className="border-none bg-[#F89A76] text-white px-10 py-2 rounded-3xl drop-shadow-lg">
                  <a href={url}>LOG IN</a>
               </button>
            </div>
         </ul>
      </div>
   );
};

export default Header;
