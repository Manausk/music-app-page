import React from "react";
import CenterMenu from "./CenterMenu";
import { Facebook, Twitter, YouTube, LinkedIn } from "@mui/icons-material";

function Footer() {
  const socialStyle = "rounded-full border-2 border-white p-2 mr-[5rem]";
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={socialStyle}>
          <Facebook />
        </div>
        <div className={socialStyle}>
          <Twitter />
        </div>
        <div className={socialStyle}>
          <YouTube />
        </div>
        <div className={socialStyle}>
          <LinkedIn />
        </div>
      </div>
      {/* details */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
}

export default Footer;
