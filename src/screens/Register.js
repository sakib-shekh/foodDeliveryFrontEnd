import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { createUser } from "../redux/Reducer/Register";
function Register() {
  const dispatch=useDispatch();
  const[login,setlogin]=useState({name:"",email:"",password:""});
  const handlChange=(e)=>{
      setlogin({...login,[e.target.name]:e.target.value});
  }
  const clicked=(e)=>{
      e.preventDefault();

      dispatch(createUser(login));
  }
  return (
    <div className="bg-red-400 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-5 w-70 flex justify-center">
        <div>
          <form>
            <div className="my-2 text-center">
              <h1 className="font-mono text-lg">Register</h1>
            </div>
            <div className="my-2">
              <div>
                <label className="" htmlFor="formName">
                  Name
                </label>
              </div>

              <div className="flex justify-center">
                <input
                  className="w-60 ouline-0 rounded-sm border-2 border-slate-200 h-10  focus:outline-0"
                  type="text"
                  name="name"
                  autoComplete="on"
                  onChange={handlChange}
                />
              </div>
            </div>
            <div className="my-2">
              <div>
                <label className="" htmlFor="FormEmail">
                  Email
                </label>
              </div>
              <div className="flex justify-center">
                <input
                  className="w-60 ouline-0 rounded-sm border-2 border-slate-200 h-10  focus:outline-0"
                  type="email"
                  name="email"
                  autoComplete="on"
                  onChange={handlChange}
                />
              </div>
            </div>
            <div className="my-2">
              <div>
                <label className="" htmlFor="FormPassword">
                  Password
                </label>
              </div>

              <div className="flex justify-center">
                <input
                  className="w-60 ouline-0 rounded-sm border-2 border-slate-200 h-10  focus:outline-0"
                  type="text"
                  name="password"
                  autoComplete="on"
                  onChange={handlChange}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={clicked}
              className="bg-red-500 p-2 rounded-sm text-white btn btn-primary btn-block mb-4"
            >
              Register
            </button>

            <div className="text-center">
              <p className="">
                Already a member?
                <Link to="/login" className="text-blue-500">
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Register;
