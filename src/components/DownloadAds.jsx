import React from "react";

function DownloadAds() {
  const downloadImgStyle =
    "border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem]";
  return (
    <div className="download">
      <div className="download_images flex">
        <img
          src={require("../img/App Store.png")}
          alt="App Store"
          className={downloadImgStyle + ` mr-[2rem] `}
        />
        <img
          src={require("../img/Google Play.png")}
          alt="Google Play"
          className={downloadImgStyle}
        />
      </div>
    </div>
  );
}

export default DownloadAds;
