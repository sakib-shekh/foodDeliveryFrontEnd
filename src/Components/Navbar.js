import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import  {searchFood} from '../redux/Reducer/searchFood'
import { useNavigate } from "react-router-dom";
function Navbar() {  

  const navigate = useNavigate();
  const despatch = useDispatch();
  const [st,setSt]=useState('hidden');
  const [search,setSearch]=useState('');
  const handleClick=(e)=>{
    setSearch({...search,[e.target.name]:e.target.value});
  }
  const submitSearch=async(e)=>{
    e.preventDefault();
    if(search!== '')
    {
      const temp=`type=search&ss=${search.search}`;
       await despatch(searchFood(temp));
        navigate('/search');
    }

  }
const logout=()=>{
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('name');
  window.localStorage.removeItem('email');
navigate('/login')
}
 const showLogOut=()=>{
    if(st==='hidden')
    setSt('');
    else
    setSt('hidden');
 }
  return (
    <nav className="flex flex-col  w-full  sticky top-0 z-10">
      <div className=" bg-red-400 w-full h-12 flex font-sans text-slate-50 pl-4 pr-4 lg:pl-10 lg:pr-10 ">
        <div className="w-1/6 flex justify-center items-center h-full">
          <h1 className="font-bold">
            <Link to="/">Foodie</Link>
          </h1>
        </div>
        <div className=" w-5/6 h-full flex justify-end  items-center">
          <div className=" hidden bg-red-400 justify-center items-center w-4/6 h-12  sm:flex sm:w-11/12 ">
            <form className="w-4/5">
              <input
                className="p-1 outline-0 rounded-md rounded-r-none w-52 sm:w-11/12 text-slate-800"
                type="search"
                placeholder="Search"
                name="search"
                onChange={handleClick}
              />
              <button
                className="bg-yellow-200 p-1 rounded-r-md w-10 sm:w-1/12"
                type="submit"
                onClick={submitSearch}
              >
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "black" }}
                ></i>
              </button>
            </form>
          </div>
          <div className="w-1/5 sm:w-1/12  flex">
            <Link to='/cart'
              className="fa-solid fa-cart-shopping"
              style={{ color: "#ffffff" }}
            ></Link>
          </div>
          {!localStorage.getItem("token") && (
            <div className="w-1/6 sm:w-1/12 flex justify-center items-center">
              Login
            </div>
          )}
          {localStorage.getItem("token") && (
            <div>
              <div className="w-1/6 sm:w-1/12 flex justify-center items-center">
                <button onClick={showLogOut}>
                  {localStorage.getItem("name")}
                </button>
              </div>

              <div className={" bg-white text-slate-800 z-10 absolute flex justify-center items-center flex-col right-2 shadow-sm top-10 p-2 rounded border-2 "+(st)} >
                <Link to="/orders" className="hover:bg-slate-200 w-full">Orders</Link>
                <button onClick={logout} className="hover:bg-slate-200 w-full">Log Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sm:hidden flex bg-red-400 justify-center items-center w-full h-12">
        <form className="w-10/12">
          <input
            className="p-1 outline-0 rounded-md rounded-r-none w-10/12"
            type="search"
            placeholder="Search"
            name="search"
            onChange={handleClick}
          />
          <button
            className="bg-yellow-200 p-1 rounded-r-md w-1/12"
            type="submit"
            onClick={submitSearch}
          >
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "black" }}
            ></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
