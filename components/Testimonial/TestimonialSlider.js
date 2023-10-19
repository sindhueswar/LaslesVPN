import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Stars from "./../../assets/Icon/stars.svg";
import ArrowBack from "./../../assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "./../../assets/Icon/eva_arrow-next-fill.svg";
import person1 from "./../../assets/people-1.webp"
import person2 from "./../../assets/people-2.webp"
import person3 from "./../../assets/people-3.webp"
const TestimonialSlider = ({
  listTestimonial = [
    {
      name: "Viezh Robert",
      image: person1,
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimonial:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "Yessica Christy",
      image: person2,
      city: "Shanxi",
      country: "China",
      rating: "4.5",
      testimonial:
      "I like it because I like to travel far and still can connect with high speed",
    },
    {
      name: "Kim Young Jou",
      image: person3,
      city: "Seoul",
      country: "South Korea",
      rating: "4.5",
      testimonial:
        "This is very unusual for my business that currently requires a virtual private network that has high security",
    },
    {
      name: "iezh Robert",
      image: person1,
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimonial:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "Yessica Christy",
      image: person2,
      city: "Shanxi",
      country: "China",
      rating: "4.5",
      testimonial:
      "I like it because I like to travel far and still can connect with high speed",
    },
    {
      name: "Kim Young Jou",
      image: person3,
      city: "Seoul",
      country: "South Korea",
      rating: "4.5",
      testimonial:
        "This is very unusual for my business that currently requires a virtual private network that has high security",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className=" w-full lg:w-screen  flex items-stretch justify-items-stretch px-0  "
      >
        {listTestimonial.map((listTestimonials, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="justify-items:center lg:h-64 border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonials.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonials.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonials.city},{listTestimonials.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonials.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonials.testimonial}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-center lg:justify-end mr-20">
        <div className="flex flex-none justify-between w-auto mt-2 lg:my-5 lg:mt-14 ">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
