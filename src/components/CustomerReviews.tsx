import React, { useState } from "react";
import RightArrowIcon from "../icons/RightArrowIcon";
import TrustPilotIcon from "../icons/TrustPilotIcon";
import Companies from "./Companies";

interface Review {
  id: number;
  name: string;
  image: string;
  title: string;
  review: string;
  rating: string;
  status: string;
  timeAgo: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Paul L",
    image: "/assets/client1.png",
    title: "Creative Director at",
    review: `Awesome service, next day delivery, friendly staff that know their stuff. Reassured support is always available should it be needed. It was like dealing with someone you’ve known 20 years.`,
    rating: " ★★★★★",
    status: "Very Good",
    timeAgo: "4 days ago",
  },
  {
    id: 2,
    name: "David G",
    title: "Creative Director at",
    image: "/assets/client2.png",
    review: `Fast and reliable delivery. Customer service is truly exceptional and they went above and beyond to help us. Highly recommended.`,
    rating: " ★★★★★",
    status: "Excellent",
    timeAgo: "1 week ago",
  },
  {
    id: 3,
    name: "Lee W",
    title: "Creative Director at",
    image: "/assets/client1.png",
    review: `Great service and fast communication. The team is very professional and helpful. Will definitely use again.`,
    rating: " ★★★★★",
    status: "Outstanding",
    timeAgo: "2 weeks ago",
  },
];

const CustomerReviews: React.FC = () => {
  const [activeReview, setActiveReview] = useState<number>(1);

  return (
    <div className="flex flex-col bg-[rgba(29,35,45,1)] text-white">
      <div className="container mx-auto flex flex-col gap-12 px-4 py-20 md:px-0">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold italic lg:text-[34px]">
            THE LOVE FROM OUR <br /> CUSTOMERS
          </h2>
          <div className="flex items-center gap-2 text-base font-semibold text-[rgba(115,127,150,1)]">
            <button className=" ">See All Reviews</button>
            <RightArrowIcon />
          </div>
        </div>

        <div className="rounded-md bg-[rgba(31,38,50,1)] p-6 px-8 py-16 shadow-lg transition-all duration-500 md:px-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`transition-opacity duration-500 ${
                activeReview === review.id
                  ? "opacity-100"
                  : "h-0 overflow-hidden opacity-0"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-16">
                  <div className="flex items-center gap-3 text-sm font-semibold md:text-lg lg:text-2xl">
                    <div className="font-bold text-[rgba(115,127,150,1)]">
                      {review.status}
                    </div>
                    <div className="text-yellow-400">{review.rating}</div>
                  </div>
                  <TrustPilotIcon />
                </div>

                <p className="text-[12px] font-semibold text-[rgba(115,127,150,1)] md:text-sm">
                  {review.timeAgo}
                </p>
              </div>
              <p className="my-4 text-lg italic md:text-2xl">
                “{review.review}”
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-6 flex space-x-4 overflow-x-scroll scroll-smooth md:justify-between md:overflow-hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {reviews.map((review) => (
            <button
              key={review.id}
              onClick={() => setActiveReview(review.id)}
              className={`flex cursor-pointer items-center gap-5 rounded-full p-2 transition-transform duration-300 hover:scale-110 ${
                activeReview === review.id ? "" : "opacity-50"
              }`}
            >
              <div className="size-20 rounded-full">
                <img
                  src={review.image}
                  alt={`${review.name} profile`}
                  className="size-20 rounded-full"
                />
              </div>
              <div className="flex flex-col text-start">
                <p className="mt-2 text-sm md:text-2xl">{review.name}</p>
                <p className="text-xs text-[rgba(115,127,150,1)]">
                  {review.title}
                </p>
                <p className="text-xs font-semibold text-[rgba(0,153,204,1)]">
                  CompanyName
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="border-t-3 border-[rgba(26,31,40,1)]">
        <Companies />
      </div>
    </div>
  );
};

export default CustomerReviews;
