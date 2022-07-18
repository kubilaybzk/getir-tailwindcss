import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Banners from "./api/banners.json";
import Title from "components/ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useWindowDimensions from "./useWindowDimensions";


export default function Offers() {
  const [banners, setBanners] = useState([]);
  const { height, width } = useWindowDimensions();
  console.log("height",height);
  var slickRef = useRef(null);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:pt-8">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>

      <div className="container mx-auto relative">
       
          <button
           className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2 hidden md:block md:z-40`}
            onClick={(e) => slickRef.current.slickPrev()}
          >
            <IoIosArrowBack size={22} />
          </button>
        
        <Slider className="md:-mx-2" {...settings} ref={slickRef}>
          {banners.length &&
            banners.map((banner, index) => (
              <div key={banner.id}>
                <picture className="block md:px-2">
                  <img src={banner.image} className="md:rounded-lg" />
                </picture>
              </div>
            ))}
        </Slider>
        
          <button
            className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2 hidden md:block md:z-40`}
            onClick={(e) => slickRef.current.slickNext()}
          >
            <IoIosArrowForward size={22}/>
          </button>
        
      </div>
    </div>
  );
}

/*
        <Slider className="md:-mx-[-8px]" {...settings} ref={slickRef}>
          {banners.length &&
            banners.map((banner, index) => (
              <div key={banner.id}>
                <picture className="block md:px-2">
                  <img src={banner.image} className="md:rounded-lg" />
                </picture>
              </div>
            ))}
        </Slider>

*/
