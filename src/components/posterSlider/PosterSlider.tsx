import Slider from 'react-slick';
import Poster from '../../components/poster/Poster'
import type { PosterSliderProps } from '../../../types';

const PosterSlider: React.FC<PosterSliderProps> = ({ posters, isDark, title, subTitle }) => {
  // const {posters, title, subTitle, isDark} = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1    
  };
  return (
    <div>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
        <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>{subTitle}</p>
      </div>
      <Slider {...settings}>
        {posters.map((each) => (
          <Poster {...each} isDark={isDark} />
        ))}
      </Slider>
    </div>
  )
}

export default PosterSlider
