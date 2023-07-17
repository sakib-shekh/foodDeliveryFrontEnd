import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/Reducer/Login";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const[login,setlogin]=useState({email:"",password:""});
    const handlChange=(e)=>{
        setlogin({...login,[e.target.name]:e.target.value});
    }
    const clicked=async(e)=>{
        e.preventDefault();
        await dispatch(loginUser(login));
        navigate('/');
    }
  return (
    <div className="bg-red-400 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-5 w-70 flex justify-center">
        <div>
          <form>
            <div className="my-2 text-center">
              <h1 className="font-mono text-lg">Login</h1>
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
                  type="password"
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
              Sign in
            </button>

            <div className="text-center">
              <p className="">
                Not a member?
                <Link to="/register" className="text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;
