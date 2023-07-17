import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Categories from "../Components/Categories";
import { useDispatch,useSelector } from "react-redux";
import { searchFood } from "../redux/Reducer/searchFood";
import { useEffect} from "react";
import FoodArea from '../Components/foodArea';

function Home() {

  (!localStorage.getItem("token")) && window.location.replace("/login");

 const dispatch=useDispatch();
 let data=[];
 
 useEffect(()=>{
  const temp='type=top';
    dispatch(searchFood(temp));
},[])

data = useSelector((state) => {
  return state.search.fooditem;
});

  return (
    
    <div>
      <Navbar/>
      <Carousel/>
      <Categories/>
      <div className="w-full h-auto flex justify-center items-center flex-wrap">
      {
        data.map((e,index)=>{
            return <FoodArea key={index} product={e}  />
        })
      }
      </div>
    </div>
  );
}

export default Home;
