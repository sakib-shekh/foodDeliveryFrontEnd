import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/Reducer/Register";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Spinner from "../Components/Spinner";
import "react-toastify/dist/ReactToastify.css";
import validator from 'validator';
function Register() {
  const [jst, sJst] = useState("hi");
  const navigate=useNavigate();
  const toastId=useRef(null);
  const dismiss = () =>  toast.dismiss(toastId.current);
  const notify = (temp) => {
   toastId.current= toast(temp, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const dispatch = useDispatch();
  const [login, setlogin] = useState({ name: "", email: "", password: "" });
  const handlChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  const clicked = async (e) => {
    e.preventDefault();
    if (login.name.length < 3) {
      await dismiss();
      await notify("name should be minimum of 3 characters");
      return;
    } else if (login.password.length < 5) {
      await dismiss();
      await notify("password should be minimum of 5 characters");
      return;
    }
    else if(!validator.isEmail(login.email))
    {
      await dismiss();
      await notify("please enter valid email");
      return;
    }
    await  dispatch(createUser(login));
    jst && await dismiss();
    sJst("hi");
    await notify(window.localStorage.getItem("message"));
    if(window.localStorage.getItem('message')=== "user already exist")
    navigate('/login');
    if(window.localStorage.getItem('message')==='success')
    navigate('/');
  };
  
  return (
    <>
      {
        useSelector((state)=>{
          return state.custom1.isLoading;
        })?
        <Spinner/>
        :
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
                    className="w-60 ouline-0 rounded-sm border-2 border-slate-200 h-10  foing:outline-0"
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
      }
    </>
  );
}

export default Register;
