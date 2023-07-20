import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchFood } from "../redux/Reducer/searchFood";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const despatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleClick = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const submitSearch = async (e) => {
    e.preventDefault();
    if (search !== "") {
      const temp = `type=search&ss=${search.search}`;
      await despatch(searchFood(temp));
      navigate("/search");
    }
  };
  return (
    <nav className="flex flex-col  w-full">
      <div className=" bg-red-400 w-full h-12 flex font-sans text-slate-50 pl-4 pr-4 lg:pl-10 lg:pr-10 ">
        <div className="w-2/6 flex justify-center items-center h-full ">
          <h1 className="font-bold">
            <Link to="/">
              <img
                className="h-6  "
                src="/logo-no-background.png"
                alt="..."
              ></img>
            </Link>
          </h1>
        </div>
        <div className=" w-4/6 h-full flex justify-end  items-center ">
          <div className=" hidden bg-red-400 justify-center items-center w-4/6 h-12  sm:flex sm:w-8/12  ">
            <form className="w-4/5">
              <input
                className="p-1 outline-0 rounded-md rounded-r-none w-52 sm:w-9/12 lg:w-10/12 text-slate-800"
                type="search"
                placeholder="Search"
                name="search"
                onChange={handleClick}
              />
              <button
                className="bg-yellow-200 p-1 rounded-r-md w-10 sm:w-3/12 lg:w-2/12"
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
          <div className="w-1/6 sm:w-1/12  flex justify-center ">
            <Link
              to="/cart"
              className="fa-solid fa-cart-shopping"
              style={{ color: "#ffffff" }}
            ></Link>
          </div>
          {!localStorage.getItem("token") && (
            <div className="w-2/6 sm:w-3/12 flex justify-center items-center">
              Login
            </div>
          )}
          {localStorage.getItem("token") && (
            <div className="w-2/6 sm:w-3/12">
              <div className="w-full  flex justify-center items-center " onClick={()=>{navigate('/profile')}}>
                <button>
                  {localStorage.getItem("name")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sm:hidden flex bg-red-400 justify-center items-center w-full h-12 ">
        <form className="w-10/12">
          <input
            className="p-1 outline-0 rounded-md rounded-r-none w-10/12"
            type="search"
            placeholder="Search"
            name="search"
            onChange={handleClick}
          />
          <button
            className="bg-yellow-200 p-1 rounded-r-md w-2/12"
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
