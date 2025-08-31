import Slider from 'react-slick';
import Poster from '../../components/poster/Poster'
import type { Movie, PosterSliderProps } from "../../../types";
// import type { Key } from "react";

const PosterSlider = (props: PosterSliderProps) => {
  const { posters, title, isDark } = props;
  const Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h1
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>
        
      </div>
      <Slider {...Settings}>
        {posters &&
          posters.map((poster: Movie, index: number) => (
            <Poster key={index} {...poster} isDark={isDark} />
          ))}
      </Slider>
    </div>
  );
};

export default PosterSlider;
