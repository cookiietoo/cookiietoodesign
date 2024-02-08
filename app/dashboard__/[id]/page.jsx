"use client";

import Link from "next/link";
import React from "react";
import { PiArrowLeftThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.div
      className="text-neutral-50 "
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      <div className="sticky top-5 ">
        <div className=" ">
          <div className="-mt-6   ">
            <div className="bg-neutral-700/25 backdrop-blur-md h-10  w-full rounded-xl flex items-center gap-x-7 ">
              <Link href={"/dashboard"}>
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>

              <Link href={"/"}>
                <button className="text-xs bg-neutral-700/25 p-1 w-16 h-6 rounded-md">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  mt-9 w-full p-5 border border-neutral-700   rounded-2xl h-full bg-[#1C1C1C] ">
        <motion.h1
          initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
            },
          }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-RubikExtraBold text-center "
        >
          Health Care Virtual Appointment
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            Lead User Experience Designer | Team Lead
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">October 2022 - April 2023</span>
        </div>

        <div className="my-11 font-RubikMedium">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-56 w-full object-cover"
            src="/pic.jpg"
            alt=""
          />
       
          

          <p className="my-4 text-base font-RubikRegular">
          Buliding digital products for coduzion, I worked on a 12-week design project on the Coduzion Payments team. With a global reach over 190 countries, and processing payments in over 70 different currencies, working on the Airbnb Payments team was a unique opportunity make an impact at scale.
          </p>

          <h2 className="text-2xl font-RubikExtraBold my-5">
            The Challenge
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          At the start of this project, we spoke to Airbnb business unit users (BU users) who told about their struggle creating incentives. The take away: creating and tracking incentives is a mess. They have to navigate a lengthy and fragmented ecosystem. From consulting over 15 different stakeholders, to tracking steps through spreadsheets and long email chains, launching your own program takes several weeks.
          </p>

          <p className="my-4 text-base font-RubikRegular">
          With such a lengthy process, mistakes are bound to happen. In 2017, the company risked losing almost $3 million over a coupon program, as a minimum spend was accidentally not applied. 
          </p> 
          <p className="my-4 text-base font-RubikRegular">
          To help prevent human errors like this, I worked with the payments team to identify a better solution. 
          </p>

          

          <h2 className="my-4 text-2xl font-RubikExtraBold">
          How might we empower BU users to launch high quality incentives programs with ease and confidence?
          </h2>

          <h2 className="text-xl font-RubikBold text-green-500 my-5">
            Design Principles
          </h2>
          
          <h2 className="text-lg font-RubikMedium text-blue-500 my-54">
            Speedy Integrations
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          Offer a fast integration into capabilities that are highly valuable for driving programs
          </p>

          <h2 className="text-lg font-RubikMedium text-blue-500 my-4">
            Easy Onboarding
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          Provide intuitive tooling catered to various business needs to give BU users the confidence to launch with ease
          </p>

          <h2 className="text-lg font-RubikMedium text-blue-500 my-4">
            Zero User Defects
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          Offer a fast integration into capabilities that are highly valuable for driving programs
          </p>

          <h2 className="text-xl font-RubikBold text-green-500 my-4">
            The Approach
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          In order to design a better journey for BU users, I had to talk with Payments Legal, Business Intelligence, and the Risk/Finance teams to understand what information is necessary to collect for review and approval. Additionally, my engineering team supported me in figuring out what designs would be feasible for implementation.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/aprch1.png"
              alt=""
            />
          </div>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/aprch2.png"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-RubikBold my-5">
            Final Design
          </h2>

          <p className="my-7 text-base font-RubikRegular">
          After several iterations and getting feedback through user testing, I was able to deliver a streamlined approach to creating incentives.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/ui 0.gif"
              alt=""
            />
          </div>

          <p className="my-7 text-base font-RubikRegular">
          Before BU users begin the incentives onboarding flow, I made sure to set expectations and demystify the steps of the incentives journey through a series of introductory modals.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/ui1.png"
              alt=""
            />
          </div>

          <p className="my-7 text-base font-RubikRegular">
          On our first page, we give a visual treatment to the three offerings (cash, credit, or coupon), and provide tips to help you choose the one that works best for you, such as benefits, limitations, and examples that have already been launched.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/u2.gif"
              alt=""
            />
          </div>

          <p className="my-7 text-base font-RubikRegular">
          Setting and monitoring a budget is crucial to the success of an incentive, but not everyone is aware of the technical terminology surrounding payments. To make the process less scary, I ensured clicking on each field would reveal additional clarification.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/ui3.png"
              alt=""
            />
          </div>

          <p className="my-7 text-base font-RubikRegular">
          For extra precaution, we make sure to allow multiple watchers to receive notifications when budget spending reaches a specific percent or ammount.
          </p>
          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/ui4.png"
              alt=""
            />
          </div>

          <p className="my-7 text-base font-RubikRegular">
          At the end of the internship, I explored having a dashboard to further track the statuses of your incentive programs, as BU users may be monitoring several programs at once.
          </p>

          <h2 className="text-2xl font-RubikBold my-5">
            Overview of my contribution
          </h2>
          
          <h2 className="text-lg font-RubikMedium text-blue-500 my-54">
          Strategy alignment
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          Built an understanding of the incentives ecosystem at Airbnb, sharing processes and aligning with other internal teams.
          </p>

          <h2 className="text-lg font-RubikMedium text-blue-500 my-54">
          Prototyping/Testing
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          Evaluated designs through user testing, stakeholder interviews, weekly design critique.
          </p>

          <h2 className="text-lg font-RubikMedium text-blue-500 my-54">
          Implementation
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          Collaborated with Engineering and PM on technical feasibility, implementation through design QA.
          </p>


          
        </div>
      </div>
    </motion.div>
  );
}

export default page;
