import React, { useMemo } from "react";
import Image from "next/image";
import Network from "./Network";
import Testimonial from "./Testimonial/Testimonial";
import ButtonOutline from "./Buttons/ButtonOutline.";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import gift from './../assets/Gift.png'
const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const plans = [
    {
      title: "Free Plan",
      imageSrc: gift,
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      title: "Standard Plan",
      imageSrc: gift,
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
      ],
      price: "$9 / mo",
    },
    {
      title: "Premium Plan",
      imageSrc: gift,
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features",
      ],
      price: "$12 / mo",
    },
  ];
  
  return (
    <div
      className="bg-white w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
      <ScrollAnimationWrapper>
             <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
      {plans.map((plan, index) => (
        <ScrollAnimationWrapper key={index} className="flex justify-center">
          <Plan {...plan} />
        </ScrollAnimationWrapper>
      ))}
    </div>
        <div className="flex flex-col w-full my-16">       
            <Network/>
        </div>
           <Testimonial/>  
      </div>
    </div>
  );
  function Plan({ title, imageSrc, features, price }) {
    return (
      <motion.div
        className="flex flex-col justify-center items-center border-2 border-gray-500 hover:border-orange-500 rounded-xl py-4 px-6 lg:px-12 xl:px-16"
        whileHover={{
          scale: 1.05,
          transition: {
            duration: 0.2,
          }
        }}
        variants={scrollAnimation}
      >
        <div className="p-4 lg:p-0 mt-6 lg:mt-16">
          <Image src={imageSrc} width={145} height={165} alt={title} />
        </div>
        <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
          {title}
        </p>
        <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="relative check custom-list my-2">
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
          <p className="text-2xl text-black-600 text-center mb-4 ">{price}</p>
          <ButtonOutline className="my-5">Select</ButtonOutline>
        </div>
      </motion.div>)}
};

export default Pricing;
