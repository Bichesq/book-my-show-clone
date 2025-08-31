import Slider from 'react-slick';
import Poster from '../../components/poster/Poster'
import type { PosterSliderProps } from '../../../types';
import type { Key } from "react";
import type { JSX } from "react/jsx-runtime";

const PosterSlider = (props: PosterSliderProps) => {
  const { posters, title, subTitle, isDark } = props;
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <h5 className={`text-sm ${isDark ? "text-white" : "text-black"}`}>
          {subTitle}
        </h5>
        <Slider {...settings}>
          {posters &&
            posters.map((poster: string[], index: Key | null | undefined) => (
              <Poster key={index} {...poster} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default PosterSlider
