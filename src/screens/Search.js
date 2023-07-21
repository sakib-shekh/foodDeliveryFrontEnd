import React from "react";
import Navbar from "../Components/Navbar";
import FoodArea from "../Components/foodArea";
import {useSelector} from 'react-redux'
import { useState } from "react";
import Spinner from "../Components/Spinner";


function Search() {
  const [st, setSt] = useState("hi");
  let story = [{name:'data not found', img:""}];
 
   story=useSelector((state)=>{
    return state.search.fooditem;
  })
  st && setSt("hi");
  return (
    <>
    {
      useSelector((state)=>{
        return state.search.isLoading;
      })
      ?
      <Spinner/>
      :
    <div>
      <Navbar />
      <div className="w-full h-auto flex justify-center items-center flex-wrap">
        {
         story!== undefined &&  story.map((e, index) => {
            return <FoodArea key={index} product={e} />;
          })
        }
        {
          (story===undefined || story.length===0) && <div className=" w-full h-screen flex justify-center items-center"><img className="w-full sm:w-4/5 md:w-4/5 lg:w-2/5 h-auto" src="/noData.jpg" alt="..."></img></div>
        }

      </div>
    </div>
      }
      </>
  );
}

export default Search;
