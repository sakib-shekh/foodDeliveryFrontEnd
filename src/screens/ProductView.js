import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {add} from '../redux/Reducer/CartItems';
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";


function ProductView() {

  const toastId=useRef(null);
  const dismiss = () =>  toast.dismiss(toastId.current);
  const notify = (temp) => {
   toastId.current= toast(temp, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const arr = Object.keys(data.options[0]);

  let obj={
    id:data._id,
    name:data.name,
    img:data.img,
    type:arr[0],
    price:""
  }
  const [st, setSt] = useState({ val: arr[0] });
  const handlChange = (e) => {
    setSt({ val: e.target.value });

  };
  const addtoCart=async()=>{
    await dismiss();
    await notify("product added successfully");
    obj.type=st.val;
    obj.price=data.options[0][st.val];
    dispatch(add(obj));
    navigate('/cart');
  }
  return (
    <div>
      <Navbar />
      <div className="h-5 sm:h-7" ></div>
      <div className="  w-full h-screen p-2 sm:p-4 lg:p-6  flex flex-col justify-start items-center md:flex-row md:items-start">
        <img className="rounded-2xl w-4/6  h-64 sm:h-80 md:h-4/6 lg:w-3/6 border-2 border-slate-400  " src={data.img} alt="..." />
        <div className="flex flex-col w-4/6   m-2 sm:m-4  mt-5 ">
          <h1 className="text-xl text-slate-900 m-2">{data.name}</h1>
          <p className=" text-slate-600 m-2" >{data.description}</p>
          <div className="flex  justify-around p-2 m-2 sm:p-4 lg:p-6 ">
            <select onChange={handlChange} name="val" className="">
              {arr &&
                arr.map &&
                arr.map((e,index) => {
                  return <option key={index} >{e}</option>;
                })}
            </select>
            <p>{data.options[0][st.val]}</p>
          </div>
          <div className=" flex justify-center items-center">
          <button onClick={addtoCart} className="bg-red-400 w-3/6 md:w-3/6 text-white rounded-lg p-2 ">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
