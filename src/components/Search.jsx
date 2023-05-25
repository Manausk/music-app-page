import React from "react";

function Search() {
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left">
        <img
          src={require("../img/backgraphics.png")}
          alt="backgraphics"
          className="absolute top-[22rem] left-[-47rem]"
        />
        <img
          src={require("../img/d1.png")}
          alt="d1"
          className="w-[16rem] top-[26rem] absolute"
        />
        <img
          src={require("../img/d2.png")}
          alt="d2"
          className="w-[9rem] top-[32.7rem] left-[7rem] absolute"
        />
        <img
          src={require("../img/d3.png")}
          alt="d3"
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <img
          src={require("../img/d4.png")}
          alt="d4"
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>
      {/* right side */}
      <div className="right"></div>
    </div>
  );
}

export default Search;
