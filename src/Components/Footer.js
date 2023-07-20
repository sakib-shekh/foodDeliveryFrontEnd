import React from "react";

function Footer() {
  return (
    <div className="mt-10">
      <div className="w-full h-32 bg-red-400 flex flex-col justify-center items-center">
        <div className="flex justify-around items-center h-2/3 w-2/5 md:w-2/6">
            <div className="m-1"><i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i></div>
            <div className="m-1"><i className="fa-brands fa-google" style={{color: "#ffffff"}}></i></div>
            <div className="m-1"><i className="fa-brands fa-facebook-f" style={{color: "#ffffff"}}></i></div>
            <div className="m-1"><i className="fa-brands fa-twitter" style={{color: "#ffffff"}}></i></div>
        </div>
        <div className="w-full h-1/3 bg-red-500 flex justify-center items-center">
        <h1 className="text-slate-50">&#9400; 2023 All Rights Reserved.</h1>
        </div>
      
      </div>
    </div>
  );
}

export default Footer;
