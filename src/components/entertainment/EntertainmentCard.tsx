import Slider from 'react-slick';
import type {entertainmentProps} from '../../../types/index'

const EntertainmentCard = (props: entertainmentProps) => {
  return (
    <div>
      <img src={props.src} alt="entertainment" className="w-full h-full rounded-lg" />
    </div>
  )
}

const EntertainmentCardSlider = () => {
  const EntertainmentImage: string[] = ["https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
    "https://picsum.photos/800/400?random=4",
    "https://picsum.photos/800/400?random=5",];

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    SlidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <> 
      <Slider {...settings}>
        {/* <div className="w-full h-56 md:h-80"> */}
          {EntertainmentImage.map((image, index) => <EntertainmentCard key={index} src={image} />)}
        
        
      </Slider>
    </>
  );
}

export default EntertainmentCardSlider
