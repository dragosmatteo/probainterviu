import { React } from "react";

const HeaderMobile = (props) => {
   const { title } = props;
   const url = "#";

   return (
      <>
         <li className="py-2 border-b-2 border-zinc-300 w-full">
            <a href={url}>{title}</a>
         </li>
      </>
   );
};

export default HeaderMobile;
