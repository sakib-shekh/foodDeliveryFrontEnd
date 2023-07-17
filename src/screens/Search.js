import React from "react";
import Navbar from "../Components/Navbar";
import FoodArea from "../Components/foodArea";
import {useSelector} from 'react-redux'

function Search() {
  let story = [{name:'data not found', img:""}];
 
  story=useSelector((state)=>{
    return state.search.fooditem;
  })
  return (
    <div>
      <Navbar />
      <div className="w-full h-auto flex justify-center items-center flex-wrap">
        {
         story!== undefined &&  story.map((e, index) => {
            return <FoodArea key={index} product={e} />;
          })
        }
        {
          story===undefined && <div> data not found</div>
        }
      </div>
    </div>
  );
}

export default Search;
