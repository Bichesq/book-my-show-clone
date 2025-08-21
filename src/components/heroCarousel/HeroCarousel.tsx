import { React, useState } from "react";
import Slider from "react-slick";

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
  };
  return (
    <div>
      <div className="lg:hidden">
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
