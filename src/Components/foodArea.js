import React from "react";
import { Link } from "react-router-dom";

function foodArea(props) {

  let arr= Object.keys(props.product.options[0]);
  return (
    <Link state={props.product} to="/product">
    <div className="flex justify-center items-center  border-2 w-72 h-72 p-4 sm:p-6 lg:p-8 m-4 rounded-xl  border-slate-200 ">
      <div className="flex flex-col justify-center items-center">
        <img className="w-60 h-48 rounded-xl" src={props.product.img} alt="..."></img>
        <div className="flex justify-between items-center w-full mt-4 p-2">
          <h1>{props.product.name}</h1>
          <div>
          <h1>{arr[0]}</h1>
          <h1>{ props.product.options[0][arr[0]] } &#x20B9;</h1>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default foodArea;
