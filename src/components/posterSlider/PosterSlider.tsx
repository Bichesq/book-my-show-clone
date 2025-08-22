import Slider from 'react-slick';
import Poster from '../../components/poster/Poster'
import type { PosterSliderProps } from '../../../types';

const PosterSlider = (props: PosterSliderProps) => {
  const {posters, title, subsTitle, isDark} = props;
  const settings = {};
  return (
    <div>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}></h3>
      </div>
    </div>
  )
}

export default PosterSlider
