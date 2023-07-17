import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Carousel1() {
  return (
    <div className="p-1">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        className="w-full h-80 mt-2 flex justify-center items-center bg-red-50"
      >
        <div className="h-80 w-full" style={{ backgroundImage: `url(https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230601094334280946_1440x300jpg)`,backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundAttachment:'fixed',backgroundPosition:"60% 60%"}}></div>
        <div className="h-80 w-full" style={{ backgroundImage: `url(https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230601094334280946_1440x300jpg)`,backgroundSize:'80% 80%',backgroundRepeat:"no-repeat",backgroundAttachment:'fixed',backgroundPosition:"50% 50%"}}></div>
        <div className="h-80 w-full" style={{ backgroundImage: `url(https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230601094334280946_1440x300jpg)`,backgroundSize:'80% 80%',backgroundRepeat:"no-repeat",backgroundAttachment:'fixed',backgroundPosition:"50% 50%"}}></div>
      </Carousel>
    </div>
  );
}

export default Carousel1;
