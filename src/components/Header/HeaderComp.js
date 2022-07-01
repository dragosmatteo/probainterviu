import React from "react";

const HeaderComp = (props) => {
   const { title } = props;
   const url = "#";
   return (
      <>
         <li className="mr-10 text-[18px]">
            <a href={url}>{title}</a>
         </li>
      </>
   );
};

export default HeaderComp;
