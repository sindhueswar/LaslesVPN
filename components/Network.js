import React,{useMemo} from 'react'
import {motion } from 'framer-motion'
import Maps from "./../assets/Map.svg";
import Image from 'next/image';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import getScrollAnimation from '../utils/getScrollAnimation';
import amazon from './../assets/Icon/amazon.webp';
import Netflix from './../assets/Icon/Netflix.webp';
import reddit from './../assets/Icon/Reddit.webp';
import discord from './../assets/Icon/discord.webp';
import spotify from './../assets/Icon/spotify.webp'; 
export default function Network() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const images = [Netflix,reddit,amazon,discord,spotify];
  return (
    <div>
         <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Huge Global Network of Fast VPN{" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </motion.p>
          </ScrollAnimationWrapper>
       <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className=" h-fit  w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
             
            {images.map((imageUrl, index) => (
              <div className='p-6 bg-transparent hover:bg-[#F53838] hover:scale-125 duration-700 rounded-xl flex items-center'>
            <Image key={index} src={imageUrl} className="h-14  w-auto mt-4 lg:mt-2" alt={`Image ${index}`} />
            </div>
          ))}
            </motion.div>
          </ScrollAnimationWrapper>
    </div>
  )
}











