import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchFood} from "../redux/Reducer/fetchFood";
import { searchFood } from "../redux/Reducer/searchFood";
function Categories() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  const dispatch = useDispatch();
  let data=[];

  useEffect(()=>{
    console.log(1);
    const temp='type=categories';
      dispatch(fetchFood(temp));
  },[])

  data = useSelector((state) => {
    return state.food.fooditem;
  });

  const handleclick=(temp)=>{
    const tt=`type=search&ss=${temp}`;
    dispatch(searchFood(tt))
  }
  
  return (
    <div>
      <div className="w-full h-14  flex justify-center items-center">
        <h1 className="sm:text-xl">Inspiration for your first order</h1>
      </div>
      <div className="h-40 sm:h-52 lg:h-60 flex flex-col justify-center items-center  p-2 bg-red-100">
        <Carousel
          className="w-full h-36 sm:h-36 lg:h-52  p-2 sm:p-4 "
          responsive={responsive}
        >
          {data.map((e, index) => {
            return <div key={index}>
              <Link onClick={()=>{handleclick(e.name)}} to="/search">
                <div className="w-20 h-20 sm:w-32 sm:h-32 lg:h-44 lg:w-44 flex flex-col justify-center items-center  ">
                  <img
                    className="w-12 sm:w-20 h-12 sm:h-20 lg:w-32 lg:h-32 rounded-2xl"
                    src={e.img}
                    alt="..."
                  ></img>
                  <h1>{ e.name }</h1>
                </div>
              </Link>
            </div>;
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Categories;
