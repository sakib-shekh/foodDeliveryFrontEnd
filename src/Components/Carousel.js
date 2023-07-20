import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { searchFood } from "../redux/Reducer/searchFood";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Carousel1() {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const searchB=async(e)=>{
    e.preventDefault();
    await dispatch(searchFood('type=burger'));
    await navigate('/search');
  }
  const searchC=async(e)=>{
    e.preventDefault();
    await dispatch(searchFood('type=chocklate'));
    await navigate('/search');
  }
  return (
    <div className="p-1">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        className="w-full h-40 sm:h-60 md:h-72 lg:h-80 mt-2 flex justify-center items-center bg-red-50"
      >
        <div onClick={searchB} className="h-40 sm:h-60 md:h-72 lg:h-80 w-full cursor-pointer" style={{ backgroundImage: `url(https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230315015239868854_1440x300gif)`,backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundAttachment:'fixed',backgroundPosition:"center"}}></div>
        <div onClick={searchB} className="h-40 sm:h-60 md:h-72 lg:h-80 w-full cursor-pointer" style={{ backgroundImage: `url(https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230720051131698305_1440x300jpg)`,backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundAttachment:'fixed',backgroundPosition:"center"}}></div>
        <div onClick={searchC} className="h-40 sm:h-60 md:h-72 lg:h-80 w-full cursor-pointer" style={{ backgroundImage: `url(https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230404044425774758_1440x300jpg)`,backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundAttachment:'fixed',backgroundPosition:"center"}}></div>
      </Carousel>
    </div>
  );
}

export default Carousel1;
