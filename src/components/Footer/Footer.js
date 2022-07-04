import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { v4 } from "uuid";
import logo from "../../assets/logof.png";
import { footer1 } from "../data";
import { footer2 } from "../data";
import { footer3 } from "../data";

const Footer = () => {
   const url = "#";

   const elements1 = footer1.map((footer) => {
      return (
         <li className="py-1" key={v4()}>
            <a href={url}>{footer.title}</a>
         </li>
      );
   });

   const elements2 = footer2.map((footer) => {
      return (
         <li className="py-1" key={v4()}>
            <a href={url}>{footer.title}</a>
         </li>
      );
   });

   const elements3 = footer3.map((footer) => {
      return (
         <li className="py-1" key={v4()}>
            <a href={url}>{footer.title}</a>
         </li>
      );
   });

   return (
      <div className="w-full mt-10 xl:mt-24 min-h-[469px] text-white bg-[#2E324D] ">
         <div className="mx-auto section-container grid text-center md:text-left md:grid-cols-3 xl:grid-cols-6 p-10 xl:pt-20">
            <div className="flex flex-col items-center">
               <img src={logo} alt="logo" className="w-44 xl:w-[100%]" />
               <div className="flex pt-8 text-[#CEEFF1]">
                  <a href={url}>
                     <FaFacebook className="text-[37px] m-2 md:mr-4  hover:text-white transition ease-in duration-100" />
                  </a>

                  <a href={url}>
                     <FaInstagram className="text-[37px] m-2 md:mx-8  hover:text-white transition ease-in duration-100" />
                  </a>

                  <a href={url}>
                     <FaLinkedin className="text-[37px] m-2 md:mx-4  hover:text-white transition ease-in duration-100" />
                  </a>
               </div>
            </div>

            <div></div>
            <div></div>

            <div>
               <h6 className="font-bold text-[30px] py-2">Platformă</h6>
               <ul className="text-[20px] font-light">{elements1}</ul>
            </div>

            <div>
               <h6 className="font-bold text-[30px] py-2">Meniu</h6>
               <ul className="text-[20px] font-light">{elements2}</ul>
            </div>

            <div>
               <h6 className="font-bold text-[30px] py-2">Legal</h6>
               <ul className="text-[20px] font-light">{elements3}</ul>
            </div>
         </div>
      </div>
   );
};

export default Footer;
