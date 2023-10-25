import React, { useMemo,useState,useEffect } from "react";
import Image from "next/image";
import ButtonPrimary from "./Buttons/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Heroimage from './../assets/Heroimage.Webp';

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20435 5.51312C6.65293 5.51312 7.08314 5.33492 7.40033 5.01772C7.71752 4.70053 7.89572 4.27032 7.89572 3.82174C7.89572 3.37316 7.71752 2.94296 7.40033 2.62576C7.08314 2.30857 6.65293 2.13037 6.20435 2.13037C5.75577 2.13037 5.32556 2.30857 5.00837 2.62576C4.69117 2.94296 4.51298 3.37316 4.51298 3.82174C4.51298 4.27032 4.69117 4.70053 5.00837 5.01772C5.32556 5.33492 5.75577 5.51312 6.20435 5.51312ZM3.8076 10.5872C2.95168 10.5872 2.23068 9.86773 2.55822 9.07696C2.75656 8.59814 3.04726 8.16308 3.41373 7.79661C3.7802 7.43014 4.21526 7.13944 4.69407 6.94111C5.17289 6.74278 5.68608 6.6407 6.20435 6.6407C6.72261 6.6407 7.23581 6.74278 7.71462 6.94111C8.19344 7.13944 8.6285 7.43014 8.99497 7.79661C9.36144 8.16308 9.65214 8.59814 9.85047 9.07696C10.178 9.86773 9.45702 10.5872 8.60109 10.5872H3.8076Z" fill="#F53838"/>
    </svg>
    
  );
  const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.55022 4.66744C9.55022 4.23555 9.46515 3.80789 9.29987 3.40888C9.1346 3.00987 8.89235 2.64731 8.58695 2.34192C8.28156 2.03653 7.91901 1.79428 7.52 1.62901C7.12098 1.46373 6.69332 1.37866 6.26144 1.37866C5.82955 1.37866 5.40189 1.46373 5.00287 1.62901C4.60386 1.79428 4.24131 2.03653 3.93592 2.34192C3.63053 2.64731 3.38828 3.00987 3.223 3.40888C3.05772 3.80789 2.97266 4.23555 2.97266 4.66744C2.97266 5.31909 3.16528 5.92517 3.49181 6.43634H3.48806C4.59684 8.17234 6.26144 10.7752 6.26144 10.7752L9.03482 6.43634H9.03153C9.36999 5.90843 9.55 5.29454 9.55022 4.66744ZM6.26144 6.07692C5.88762 6.07692 5.52911 5.92842 5.26479 5.66409C5.00046 5.39976 4.85196 5.04126 4.85196 4.66744C4.85196 4.29363 5.00046 3.93512 5.26479 3.67079C5.52911 3.40646 5.88762 3.25796 6.26144 3.25796C6.63525 3.25796 6.99376 3.40646 7.25809 3.67079C7.52242 3.93512 7.67091 4.29363 7.67091 4.66744C7.67091 5.04126 7.52242 5.39976 7.25809 5.66409C6.99376 5.92842 6.63525 6.07692 6.26144 6.07692Z" fill="#F53838"/>
    </svg>
    
  );
  const ServerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.94392 1.84839H2.42671C2.1775 1.84839 1.9385 1.94739 1.76228 2.12361C1.58606 2.29982 1.48706 2.53883 1.48706 2.78804V4.66734C1.48706 4.91655 1.58606 5.15556 1.76228 5.33178C1.9385 5.50799 2.1775 5.60699 2.42671 5.60699H9.94392C10.1931 5.60699 10.4321 5.50799 10.6084 5.33178C10.7846 5.15556 10.8836 4.91655 10.8836 4.66734V2.78804C10.8836 2.53883 10.7846 2.29982 10.6084 2.12361C10.4321 1.94739 10.1931 1.84839 9.94392 1.84839ZM7.59479 3.72769C7.59479 3.98717 7.38445 4.19752 7.12497 4.19752C6.86549 4.19752 6.65514 3.98717 6.65514 3.72769C6.65514 3.46821 6.86549 3.25787 7.12497 3.25787C7.38445 3.25787 7.59479 3.46821 7.59479 3.72769ZM9.4741 3.72769C9.4741 3.98717 9.26375 4.19752 9.00427 4.19752C8.74479 4.19752 8.53445 3.98717 8.53445 3.72769C8.53445 3.46821 8.74479 3.25787 9.00427 3.25787C9.26375 3.25787 9.4741 3.46821 9.4741 3.72769ZM9.94392 6.54665H2.42671C2.1775 6.54665 1.9385 6.64564 1.76228 6.82186C1.58606 6.99808 1.48706 7.23709 1.48706 7.4863V9.3656C1.48706 9.61481 1.58606 9.85381 1.76228 10.03C1.9385 10.2063 2.1775 10.3053 2.42671 10.3053H9.94392C10.1931 10.3053 10.4321 10.2063 10.6084 10.03C10.7846 9.85381 10.8836 9.61481 10.8836 9.3656V7.4863C10.8836 7.23709 10.7846 6.99808 10.6084 6.82186C10.4321 6.64564 10.1931 6.54665 9.94392 6.54665ZM7.59479 8.42595C7.59479 8.68542 7.38445 8.89577 7.12497 8.89577C6.86549 8.89577 6.65514 8.68542 6.65514 8.42595C6.65514 8.16647 6.86549 7.95612 7.12497 7.95612C7.38445 7.95612 7.59479 8.16647 7.59479 8.42595ZM9.4741 8.42595C9.4741 8.68542 9.26375 8.89577 9.00427 8.89577C8.74479 8.89577 8.53445 8.68542 8.53445 8.42595C8.53445 8.16647 8.74479 7.95612 9.00427 7.95612C9.26375 7.95612 9.4741 8.16647 9.4741 8.42595Z" fill="#F53838"/>
</svg>

  );
  
   const listUser = [
      {
        name: "Users",
        number: "390",
        icon: <UserIcon />,
      },
      {
        name: "Locations",
        number: "20",
        icon: <LocationIcon />,
      },
      {
        name: "Server",
        number: "50",
        icon: <ServerIcon />,
      },
    ]
    const Counter = ({ targetValue }) => {
      const [count, setCount] = useState(0);
  
      useEffect(() => {
        const incrementCount = () => {
          if (count < targetValue) {
            setCount((prevCount) => prevCount + 1);
          }
        };
  
        const interval = setInterval(incrementCount, 8);
  
        return () => {
          clearInterval(interval);
        };
      }, [count, targetValue]);
  
      return (<p className="text-xl text-black-600 font-bold">{count}+</p>);
    };
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-x-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Want anything to be easy with <strong>LaslesVPN</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
          <div className="flex  w-full">
            <motion.div className="lg:h-full w-full" variants={scrollAnimation}>
              <Image
                src={Heroimage}
                alt="Heroimage"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="lg:absolute  w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-11/12 grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 lg:py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-8 sm:ty-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex  w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full hover:scale-150 duration-700">
                                 {listUsers.icon}
                </div>
                <div className="flex flex-col">
                   <Counter   targetValue={parseInt(listUsers.number)}/>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-8/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0 bottom-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
                }

export default Hero;
