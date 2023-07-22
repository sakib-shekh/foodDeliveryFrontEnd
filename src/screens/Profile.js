import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate=useNavigate();
  const logOut = () => {
    console.log("logout");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("token");
    navigate('/login');
  };
  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className="flex justify-center items-center p-2 ">
        <div className="w-4/5 h-auto border-2 border-slate-400 flex justify-center items-center flex-col p-4 rounded-lg  sm:flex-col bg-white ">
          <div className="">
            <img className="w-40 rounded-full p-2" src="/user.png" alt="..."></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="p-2">name: {localStorage.getItem("name")}</h1>
            <h1 className="p-4">email: {localStorage.getItem("email")}</h1>
            <button className="p-2 bg-red-400 rounded-lg" onClick={logOut}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
