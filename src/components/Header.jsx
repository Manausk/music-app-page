import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      <img
        src={require("../img/MuzicLogo.png")}
        alt="MuzicLogo"
        className="logo w-[42px] h-[42px] "
      />
      <CenterMenu />
      <div className="buttons flex">
        <button>Sign up</button>
        <button>Log in</button>
      </div>
    </div>
  );
}

export default Header;
