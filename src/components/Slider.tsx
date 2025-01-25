import React, { useState, useEffect } from "react";
import RightArrowCircleIcon from "../icons/RightArrowCircleIcon";
// import sliderImg1 from "../assets/sliderImg1.png";

// Define the type for each slide
interface Slide {
  heading: string;
  description: string;
  image: string;
}

const Slider: React.FC = () => {
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

  // Function to go to a specific slide
  const goToSlide = (index: number): void => {
    if (index < 0) {
      setCurrentIndex(slides.length - 1); // Go to the last slide if previous button is clicked at the first slide
    } else if (index >= slides.length) {
      setCurrentIndex(0); // Go to the first slide if next button is clicked at the last slide
    } else {
      setCurrentIndex(index);
    }
  };

  // Auto-slide functionality with interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToSlide(currentIndex + 1); // Move to the next slide
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [currentIndex]);

  return (
    <div className="mx-auto w-[90%] overflow-hidden text-white">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="flex min-w-full items-center justify-center"
            key={index}
          >
            <div className="mx-0 flex items-center gap-4 md:mx-4 md:gap-8 lg:mx-40 lg:gap-16">
              <div className="flex w-1/2 flex-col px-0 md:px-10 lg:px-20">
                <h2 className="mb-4 text-sm leading-8 font-semibold text-white md:text-xl lg:text-2xl xl:text-[32px]">
                  {slide.heading}
                </h2>
                <p className="mb-6 text-[10px] font-normal text-white md:text-sm md:leading-7 lg:text-base">
                  {slide.description}
                </p>
                <button className="rounded-full bg-orange-500 px-6 py-3 text-white hover:bg-orange-600">
                  Learn More
                </button>
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
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-8 hidden -translate-y-1/2 transform md:block">
        <button
          onClick={() => goToSlide(currentIndex - 1)}
          className="rotate-180 rounded-full p-2 text-white hover:bg-gray-700"
        >
          <RightArrowCircleIcon />
        </button>
      </div>
      <div className="absolute top-1/2 right-10 hidden -translate-y-1/2 transform md:block">
        <button
          onClick={() => goToSlide(currentIndex + 1)}
          className="rounded-full p-2 text-white hover:bg-gray-700"
        >
          <RightArrowCircleIcon />
        </button>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
