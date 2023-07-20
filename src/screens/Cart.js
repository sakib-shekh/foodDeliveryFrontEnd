import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {remove} from '../redux/Reducer/CartItems'

function Cart() {
  const dispatch=useDispatch();
  const data = useSelector((state) => {
    return state.cart;
  });
  const removeItem=(id)=>{
    dispatch(remove(id));
  }
  return (
    <div>
      <Navbar />
      {!data.CartQuantity
        ?
         <div className="w-full h-screen flex justify-center items-center flex-col md:p-10">
                <img className="w-full sm:w-5/6 md:w-5/12" src="https://img.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg?w=826&t=st=1689260857~exp=1689261457~hmac=f2f1759c65cef8f3ae78b229bfb686c50d11effd8c346376a898389839c1c264" alt="..."></img>
                <h1 className="text-2xl text-black ">Cart is Empty</h1>
        </div>
      : (
        <div className="flex flex-col md:flex-row h-full w-full p-4 sm:p-6 lg:p-8 border-2 border-slate-300">
          <div className=" p-4 flex w-full md:w-3/6  md:h-2/6 flex-col h-auto">
            {data.Cartitem &&
              data.Cartitem.map &&
              data.Cartitem.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="flex justifycenter items-center p-2 rounded-xl border-2 border-slate-300 shadow-xl m-2 "
                  >
                    <img
                      className="w-2/5  sm:w-2/6 md:w-2/6 p-2 rounded-xl"
                      src={e.img}
                      alt="..."
                    ></img>

                    <div className="flex flex-col justify-around w-3/5 ">
                      <h1>{e.name}</h1>
                      <div className="flex justify-around">
                        <h1>{e.type}</h1>
                        <h1>{e.price}</h1>
                        <button onClick={()=>removeItem(e.id)}><i className="fa-solid fa-trash"  style={{color:"#000000"}} ></i></button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className=" sticky bottom-0 bg-slate-50 md:top-4 md:w-3/6 p-4 border-2 border-slate-300 rounded-2xl m-2 md:h-2/5 h-auto flex flex-col  items-around">
            <div className="flex justify-around m-2 ">
              <h1>price ({data.CartQuantity})</h1>
              <h1>{data.CartTotal}</h1>
            </div>
            <div className="flex justify-around m-2">
              <h1>Delivery Charges</h1>
              <h1>Free</h1>
            </div>
            <div className="flex justify-end items-center p-2">
              <button className="m-2 w-60 h-10  bg-red-400 text-slate-50 rounded-md p-2">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
