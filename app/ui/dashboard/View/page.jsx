"use client";
import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { SiCss3, SiFramer } from "react-icons/si";

import TestimonialTooltip from "@/app/TestimonialTooltip/page";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="lg:block w-ful lg:w-fit hidden  max-xl:hidden "
    >
      <div className=" md:w-60 w-full rounded-2xl h-fit sticky top-5 ">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <h2 className="font-RubikBold text-neutral-200">
              Info
            </h2>
            <p className="text-xs my-3 text-neutral-400 font-RubikRegular">
            Cookiietoo is the design practice of Nilesh. As a digital designer with a background in Product Design, I help brands express their unique voice through identity-driven products, experiences, and design systems.
            </p> 
            
           
            <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium text-neutral-50 ">
              I'm Cool!
            </button>
            

            <div className="border border-neutral-700 my-5" />

            <div className="text-neutral-400">
              <h1 className="font-RubikMedium text-neutral-200">Featured in</h1>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md ">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <PiGithubLogoLight className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  Awwwards Nominee Designer <br /> Web Design
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiFramer className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  Best UX Designer <br /> In house: Flo Studio 
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiCss3 className="text-lg" />
                </div>
                <h3 className="text-xs ">Product Design tips</h3>
              </div>

              <div className="border border-neutral-700 my-5" />

              <div className="flex items-center justify-center gap-x-2">
                <TestimonialTooltip />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50">
          <Image
            width={1000}
            height={1000}
            className="h-32 w-56 object-cover rounded-lg"
            src="/3d.png"
            alt=""
          />
          <p className="my-3 font-RubikMedium text-sm">I love 3D Animation</p>
          <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium ">
            So I'm learning Houdini
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
