"use client";
import Link from "next/link";
import React from "react";
import { PiCodeThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function Homepage() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full lg:w-fit "
    >
      <div className="  bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">
        <div>
          <div className="flex gap-x-6 p-4">
            <PiCodeThin className="text-6xl text-neutral-50" />

            <div>
              <h1 className="text-2xl font-RubikMedium text-neutral-300">
                Selected Work{" "}
                <span className="text-sm text-neutral-400">UI UX Design</span>
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
               Previously worked as Lead User Experience Designer at Usquare. 
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

         
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
            <Link href={"/dashboard_/usquare"}>
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/head.PNG"
                  alt=""
                />
                <div>
                  <span className="text-sm">Usquare - Lead UX Designer | UX Researcher @LATEST</span>
                  <h2 className="text-sm font-RubikMedium">
                    Building a system that generates UI focused color-palette.
                  </h2>
                </div>
              </div>
              </Link>
            </div>
            
            <div className="  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link href={"/dashboard/coduzion"}>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="  flex items-center gap-x-3">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-24 h-24 object-cover rounded-md"
                    src="/Coduzion_main.PNG"
                    alt=""
                  />
                  <div>
                    <span className="text-sm">Coduzion - Experience Designer | System Design </span>
                    <h2 className="text-sm font-RubikMedium">
                      Building Payment System with global reach over 190 countries.
                    </h2>
                  </div>
                </div>
              </div>
            </Link>

            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
            <Link href={"/dashboard___/ui"}>
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/ui07.png"
                  alt=""
                />
                <div>
                  <span className="text-sm"> Beautiful UI's **under_maintainance</span>
                  <h2 className="text-sm font-RubikMedium">
                    I Love designing Ui's, and here are some of that work!
                  </h2>
                </div>
              </div>
              </Link>
            </div>

            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/scult.jpeg"
                  alt=""
                />
                <div>
                  <span className="text-sm">Exlance | UI UX | Art Direction | Flow **Coming Soon</span>
                  <h2 className="text-sm font-RubikMedium">
                    Building DAO platform for trading gold with cyrpto currencies.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* without image */}

          <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">April 2022</span>
                  <h2 className="text-sm font-RubikMedium">
                    Built NFT Platform with Flo Studio Generated over $500k.*NDA Agreement
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">November 2021</span>
                  <h2 className="text-sm font-RubikMedium">
                    Built online health care system to automate medicines.*NDA Agreement
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">March 2021</span>
                  <h2 className="text-sm font-RubikMedium">
                    Developed design for in-house hiring management system.*NDA Agreement
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* With image */}

          {/* without image */}

          <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <h2 className="text-sm font-RubikMedium">
                    I like exploring the world and it's thoughts so here are some of my FAV
                  </h2>
                  <div className="flex items-center gap-x-2 font-RubikBold">
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      Book Authors
                    </p>
                    <div className="w-1 h-1 rounded-full bg-neutral-400" />
                    <span className="text-xs">Aristotle </span>
                    <span className="text-xs">Socrates</span>
                    <span className="text-xs">Epictectus </span>
                    <span className="text-xs">ME :) </span>
                  </div>
                  <div className="flex items-center gap-x-2 font-RubikBold">
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      Books
                    </p>
                    <div className="w-1 h-1 rounded-full bg-neutral-400" />
                    <span className="text-xs">Ethics</span>
                    <span className="text-xs">Lessons of life </span>
                    <span className="text-xs">Upanyas</span>
                    <span className="text-xs">Republic</span>
                    <span className="text-xs">MINE :)</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </motion.div>
  );
}

export default Homepage;
