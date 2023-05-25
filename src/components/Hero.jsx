import React from "react";
import DownloadAds from "./DownloadAds";

function Hero() {
  return (
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] w-[100%] rounded-b-[5rem] h-[35rem] relative z-[3]">
      {/* left side */}
      <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
        <span>Experience The</span>
        <span>
          <b>Best Quality Music</b>
        </span>
        <span className="text-[15px] text-[#525d6e]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, neque.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        {/* download ads */}
        <div>
          <span className="text-[13px]">Download now on IOS and Android</span>
        </div>
        <DownloadAds />
      </div>
      {/* right side */}
      <div className="images relative w-[50%]">
        <img
          src={require("../img/backgraphics.png")}
          alt="backgraphics"
          className="absolute top-[-8rem] left-[19rem]"
        />
        <img
          src={require("../img/p 1.png")}
          alt="p1"
          className="absolute top-[-15rem] h-[34rem] left-[13rem]"
        />
        <img
          src={require("../img/p 2.png")}
          alt="p2"
          className="absolute top-[94px] w-[175px] left-[235px]"
        />
        <img
          src={require("../img/p 3.png")}
          alt="p3"
          className="absolute top-[12rem] w-[5rem] left-[13rem]"
        />
        <img
          src={require("../img/p 4.png")}
          alt="p4"
          className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
        />
      </div>
    </div>
  );
}

export default Hero;
