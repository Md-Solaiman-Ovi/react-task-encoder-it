import React, { useState, useEffect } from "react";
import RightArrowCircleIcon from "../icons/RightArrowCircleIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrowCircleIcon from "../icons/LeftArrowCircleIcon";

// Define the type for each slide
interface Slide {
  heading: string;
  description: string;
  image: string;
}

const SliderComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Array of slides
  const slides: Slide[] = [
    {
      heading: "TOPDON Phoenix Elite",
      description:
        "TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the cost. If you don’t need the online programming capabilities, you may want to consider the PHOENIX LITE 2 which offers excellent value for money.",
      image: "/assets/sliderImg1.png",
    },
    {
      heading: "TOPDON Phoenix Elite 2",
      description:
        "TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the cost. If you don’t need the online programming capabilities, you may want to consider the PHOENIX LITE 2 which offers excellent value for money. 2",
      image: "../assets/sliderImg1.png",
    },
    {
      heading: "TOPDON Phoenix Elite 3",
      description:
        "TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the cost. If you don’t need the online programming capabilities, you may want to consider the PHOENIX LITE 2 which offers excellent value for money. 3",
      image: "../assets/sliderImg1.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <RightArrowCircleIcon />,
    prevArrow: <LeftArrowCircleIcon />,
  };
  return (
    <div className="container mx-auto py-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="flex items-center justify-center" key={index}>
            <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
              <div className="flex w-1/2 flex-col px-0 md:px-10 lg:px-20">
                <h2 className="mb-4 text-sm leading-8 font-semibold text-white md:text-xl lg:text-2xl xl:text-[32px]">
                  {slide.heading}
                </h2>
                <p className="mb-6 text-[10px] font-normal text-white md:text-sm md:leading-7 lg:text-base">
                  {slide.description}
                </p>
                <div className="w-full">
                  <button className="rounded-[10px] bg-[rgba(234,76,73,1)] px-6 py-3 text-xs font-semibold text-white hover:bg-orange-600 md:text-base">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="w-1/2 px-4 lg:px-0">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="mx-auto h-auto w-full max-w-[400px] object-cover lg:max-w-[75%]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
