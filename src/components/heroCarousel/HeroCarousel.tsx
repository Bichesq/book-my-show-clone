import { React, useState } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./arrow";

const HeroCarousel = () => {
  const [images, setImages] = useState([    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
    "https://picsum.photos/800/400?random=4",
    "https://picsum.photos/800/400?random=5",]);

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div>
      <div className="">
        <Slider {...settings}>
        {
          images.map((image, index) => {
            return (
              <div  key={index} className="w-full h-56 md:h-80 py-3">
              <img src={image} alt="" className="w-full h-full rounded-md object-cover" />
            </div>
            )
            
          })
        }
        </Slider>
      </div>
      <div className="hidden lg:block"></div>
    </div>
  )
}

export default HeroCarousel
