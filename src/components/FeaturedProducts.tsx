import React, { useRef, useState } from "react";
import CartIcon from "../icons/CartIcon";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mock data for products
interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  vat: string;
  rating: number;
  label?: string;
}

const products: Product[] = [
  {
    id: 1,
    image: "/assets/productImg1.png",
    title: "VDubDiag for VW Audi Skoda Seat",
    price: "£79.99",
    originalPrice: "£89.99",
    vat: "Inc. VAT",
    rating: 5,
    label: "SALE",
  },
  {
    id: 2,
    image: "/assets/productImg2.png",
    title: "ANCEL VD700 FOR AUDI, SEAT, SKODA, VOLKSWAGEN",
    price: "£89.99",
    originalPrice: "£129.99",
    vat: "Inc. VAT",
    rating: 5,
    label: "NEW",
  },
  {
    id: 3,
    image: "/assets/productImg3.png",
    title: "OBDeleven Pro Pack (NextGen) Bluetooth Scanner",
    price: "£114.99",
    originalPrice: "£119.99",
    vat: "Inc. VAT",
    rating: 5,
    label: "SOLD OUT",
  },
  {
    id: 4,
    image: "/assets/productImg4.png",
    title: "iCarsoft CR MAX – 2024 Full System All Makes",
    price: "£349.99",
    originalPrice: "£429.99",
    vat: "Inc. VAT",
    rating: 5,
  },
  {
    id: 5,
    image: "/assets/productImg1.png",
    title: "iCarsoft CR MAX – 2024 Full System All Makes",
    price: "£349.99",
    originalPrice: "£429.99",
    vat: "Inc. VAT",
    rating: 5,
  },
  {
    id: 6,
    image: "/assets/productImg2.png",
    title: "iCarsoft CR MAX – 2024 Full System All Makes",
    price: "£349.99",
    originalPrice: "£429.99",
    vat: "Inc. VAT",
    rating: 5,
  },
];

const tabs: string[] = ["All", "Special", "Popular", "New/Used", "Certified"];

const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const sliderRef = useRef<Slider | null>(null);

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[rgba(26,31,40,1)] px-4 py-8 text-white">
      <div className="container mx-auto flex flex-col gap-12 py-18">
        <div className="flex flex-col gap-8">
          <h2 className="mb-4 text-2xl font-bold italic md:text-[34px]">
            FEATURED PRODUCTS
          </h2>
          <div className="relative flex flex-col items-center justify-between md:flex-row">
            <div className="hide-scrollbar mb-6 flex items-center gap-1 overflow-x-scroll scroll-smooth md:overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-[5px] px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-red-500 text-white"
                      : "hover:bg-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
              <a
                href="#"
                className="hidden text-sm text-blue-400 hover:underline md:block"
              >
                See All Products &gt;
              </a>
            </div>
            <div className="hidden gap-3 md:flex">
              <button
                className="cursor-pointer rounded-md bg-gray-700 p-2 hover:bg-gray-600"
                onClick={handlePrevClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-5 text-white"
                >
                  <path d="M12.707 14.707a1 1 0 01-1.414 0L7.293 10.707a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" />
                </svg>
              </button>
              <button
                className="cursor-pointer rounded-md bg-gray-700 p-2 hover:bg-gray-600"
                onClick={handleNextClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-5 text-white"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full gap-4">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 rounded-md border-[1px] border-[rgba(37,49,70,1)] shadow-md"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[300px] w-full rounded-t-md object-cover"
                  />
                  {product.label && (
                    <span
                      className={`absolute top-2 right-2 rounded px-2 py-1 text-xs font-bold ${
                        product.label === "SALE"
                          ? "bg-red-500"
                          : product.label === "NEW"
                            ? "bg-green-500"
                            : "bg-gray-600"
                      } text-white`}
                    >
                      {product.label}
                    </span>
                  )}
                </div>
                <div className="relative flex h-[300px] flex-col gap-5 px-5 py-6">
                  <div className="flex items-center">
                    <p className="text-sm text-[rgba(115,127,150,1)]">
                      Rating :
                    </p>
                    {Array.from({ length: product.rating }).map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="h-4 w-4 text-yellow-500"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.539 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.783.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.207 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                  <h3 className="border-y-[1px] border-[rgba(37,49,70,1)] py-4 text-sm font-bold text-[rgba(131,136,150,1)]">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-semibold text-red-400">
                    <p className="text-[19px] font-semibold text-[rgba(234,76,73,1)]">
                      {" "}
                      {product.price}
                    </p>
                    <p className="text-base font-normal text-[rgba(115,127,150,1)] line-through">
                      {product.originalPrice}
                    </p>
                    <p className="text-sm font-normal text-[rgba(204,204,204,1)]">
                      {product.vat}
                    </p>
                  </div>
                  <div className="absolute right-0 bottom-4 left-0 w-full px-4">
                    <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[rgba(40,46,58,1)] px-4 py-2 text-center text-sm font-medium text-[rgba(131,136,150,1)] hover:bg-gray-600">
                      <CartIcon />
                      <p>Add to Cart</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex justify-center gap-3 md:hidden">
          <button
            className="cursor-pointer rounded-md bg-gray-700 p-2 hover:bg-gray-600"
            onClick={handlePrevClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-5 w-5 text-white"
            >
              <path d="M12.707 14.707a1 1 0 01-1.414 0L7.293 10.707a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" />
            </svg>
          </button>
          <button
            className="cursor-pointer rounded-md bg-gray-700 p-2 hover:bg-gray-600"
            onClick={handleNextClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-5 w-5 text-white"
            >
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
