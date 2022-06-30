import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logof.png";

const Footer = () => {
   const url = "#";

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
               <ul className="text-[20px] font-light">
                  <li className="py-1">
                     <a href={url}>Creează Cont</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> Accesează Cont</a>
                  </li>
               </ul>
            </div>

            <div>
               <h6 className="font-bold text-[30px] py-2">Meniu</h6>
               <ul className="text-[20px] font-light">
                  <li className="py-1">
                     <a href={url}> Home</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> Despre Noi</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> Cum Funcționează</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> Sfaturi</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> F.A.Q.</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> Contact</a>
                  </li>
               </ul>
            </div>

            <div>
               <h6 className="font-bold text-[30px] py-2">Legal</h6>
               <ul className="text-[20px] font-light">
                  <li className="py-1">
                     <a href={url}> Termeni si Conditii</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> Politica Confidentialitate</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> Politica Cookies</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> GDPR</a>
                  </li>
                  <li className="py-1">
                     <a href={url}> ANPC</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Footer;
