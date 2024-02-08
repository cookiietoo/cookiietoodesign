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
          Usquare UI based color-palette Generator
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4 font-RubikRegular">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            Lead User Experience Designer | Researcher | Team Lead
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">Aug 2023 - September 2023</span>
        </div>

        <div className="my-11 font-RubikMedium">
          <Image
            width={1000}
            height={1000}
            className="rounded-lg h-56 w-full object-cover"
            src="/head.PNG"
            alt=""
          />
       
          <h2 className="text-2xl font-RubikExtraBold  my-4">
          The Problem
          </h2>

          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          The designer's struggle with color
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          In the design world today, designers struggle to curate a color palette for their UI-based design projects. Those new to design lack the knowledge of color accessibility guidelines and struggle with ensuring the colors used in their designs are accessible to their end-users. Scoob was designed to solve this problem.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (8).png"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold  my-4">
          Our Approach
          </h2>

          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          Designing with assumptions & a Lean UX mindset 
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          This project was completed as a part of my coduzion's usquare team. Our team adapted elements of the Lean UX approach to fit with the time constraints of our timeline. We started off with a set of assumptions about our domain space, the design field, in order to quickly validate and test during a series of two 3-week sprint cycles. 
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (1).png"
              alt=""
            />
          </div>
          
          <h2 className="text-2xl font-RubikExtraBold  my-4">
          Kicking Off
          </h2>

          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          Sprint one - our initial assumptions 
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          Our team kicked off the process by laying out all our assumptions we had about our problem space. I held a meeting with my team where we had open discussions about any questions we had about the problem space and any clear assumptions we had about the domain. 
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (2).png"
              alt=""
            />
          </div>

          <p className="my-4 text-base font-RubikRegular">
          Since we were working in the design tool space, our team laid out the initial assumption that our users would be designers in tech. We assumed that they needed a tool that could be use as a source of collaboration for their team, and that they currently lacked a resource for learning more about color theory. These were assumptions that we aimed to validate through testing with an MVP, or minimum-viable product.
          </p> 

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (1).svg"
              alt=""
            />
          </div>

          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          Building our first test 
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          As a collaborative effort, our team got together and started to put together our first test. Our first test developed in the form of a two-screen lo-fi wireframe where we were testing whether users would utilize a feature that allowed them to share color palettes with their team. Since this was a big assumption we had as team, it was important that we tested this early so we can ensure we were using time and efforts wisely.  
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (2).svg"
              alt=""
            />
          </div>
          
          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          Validation through interviews 
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          During our first sprint cycle, my team held interview sessions with 6 participants who fell under our assumptions for our ideal persona, the junior designer with 2-3 years of experience with design.  
          </p>

          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          Major insights we gathered
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          01. People didn’t need a tool to share color palettes with other designers in their team because they were typically working individually or in a shared work environment such as Figma or Adobe XD.
          </p>

          <p className="my-4 text-base font-RubikRegular">
          
          02. Designers didn’t really need to learn more about the basics of color theory, they wanted resources they could reference about the best accessibility practices when it comes to using color in their UI-based designs.  
          </p>

          <p className="my-4 text-base font-RubikRegular">
          
          03. Designers wanted a way to quickly “preview” a color-palette on any design of their choosing.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (3).svg"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold  my-4">
          Revisiting the Lean UX canvas 
          </h2>

          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          Sprint two - Revalidating our assumptions 
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          As my team’s leader, I scheduled a meeting with my teammates with a focus on revisiting our initial assumptions we laid out on our Lean UX canvas. I guided our meeting by asking my teammates the following questions: What did we learn from our users? What assumptions can we toss out? What assumptions do we need to add in and further test?
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (4).svg"
              alt=""
            />
          </div>

          <p className="my-4 text-base font-RubikRegular">
          I realized that as a team, we were focusing on creating a product that was too general and broad. Instead of trying to target every and any kind of designer out there, we decided that we would focus on designing for UX and UI designers who would benefit from using a UI-based color palette generator. 
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (5).svg"
              alt=""
            />
          </div>

          <p className="my-4 text-base font-RubikRegular">
          Because of the insights gathered during our first round of interviews, our team decided we would focus on further testing having UI-color accessibility resources alongside a color palette generator that focused on generating UI-based color palettes only. Additionally, we would test what previewing a UI-based color palette on a design would look like for our users. 
          </p>

          <h2 className="text-2xl font-RubikExtraBold  my-4">
          Shifting gears and our new approach
          </h2>

          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          High value, high effort mvp building 
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          As we were nearing the deadline for our project, our team decided to build a more fully-functional mvp that consisted of new features we wanted to test with users based on our previous insights. We decided it was worth the effort of testing out our assumptions we predicted were of higher value to our users. Here, our screens started to become of mid-fidelity and our users gathered a more in-depth look of how our product worked.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (6).svg"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold  my-4">
          Further validation 
          </h2>

          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          Bringing Stipple to life and usability testing 
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          During sprints week one and two, our team was busy bringing Stipple to life in higher-fidelity. As a team leader, I thought it would be beneficial for our team to get at least one week of usability testing in. I found it important to see if our product was usable for our users. 
          </p>

          <p className="my-4 text-base font-RubikRegular">
          After prototyping our first iteration of Stipple together, we presented our prototype to our interview participants along with a set of tasks we asked for them to complete. Our tasks were centered around two main features of Stipple, generating a color palette and previewing a color palette on a UI.  
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (7).svg"
              alt=""
            />
          </div>

          <h3 className="text-lg font-RubikMedium text-blue-500 my-1">
          Insights we gathered and improvements to our design 
          </h3>

          <p className="my-4 text-base font-RubikRegular">
          01. One of the main takeaways we gained through usability testing with participants is that some of the labels and phrasing we used in the color palette generator didn't make sense to the participant, causing confusion while completing the usability tasks. 
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (8).svg"
              alt=""
            />
          </div>

          <p className="my-4 text-base font-RubikRegular">
          02. We followed-up with additional questions about what the user would expect under labels and what they would name labels to better understand the participant's mental model. We then proceeded to update our design to fit the participant’s mental model better.
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (9).svg"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold  my-4">
          01. Generate UI-focused color palettes 
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          With Stipple, designers can generate color palettes specifically designed to to be used for their UI's that meet web accessibility guidelines. 
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (4).png"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold  my-4">
          02. Preview color palettes on a UI 
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          Designers may easily preview any of their saved color palettes on a UI template of their choosing. 
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (5).png"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold  my-4">
          03. Gather community inspiration 
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          With a community tab, designers are never more than a click away to view other color palettes used by designers in their field. 
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (6).png"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-RubikExtraBold  my-4">
          04. Learn more about color and accessibility 
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          UI color accessibility guidelines are available for designers to access and reference whether they are new to learning or need a refresher from time to time. 
          </p>

          <div className="my-9">
            <Image
              height={1000}
              width={1000}
              className="rounded-lg w-full object-cover"
              src="/cse_01 (7).png"
              alt=""
            />
          </div>

          <h2 className="text-3xl font-RubikExtraBold text-red-500 my-4">
          Things learned as a design leader 
          </h2>

          <p className="my-4 text-base font-RubikRegular">
          01. Figma! I learned so much about Figma as I worked on this project. This project challenged me to not only work within a design system, but build my own design system for our product that my team and I could use to create consistency within our product, as well as, promote a more efficient workflow while building our prototype.
          </p>

          <p className="my-4 text-base font-RubikRegular">
          02. Autolayout, components, and variants are your best friends in Figma. I love them and can not imagine designing without them anymore.
          </p>

          <p className="my-4 text-base font-RubikRegular">
          03. I learned how to balance out the strengths and weaknesses of each of my team members to ensure everyone was comfortable with their responsibilities with the product, but also made sure to challenge each of my team members to do something new in order to help them build on their skills.
          </p>

          <p className="my-4 text-base font-RubikRegular">
          04. As an organized individual, I learned what it was like to have to be organized while working with the schedules and timelines of my team members. I learned so much about the importance of keeping your team members up to date about scheduling, team meetings, weekly check-ins, and project progress throughout the last 8 weeks. 
          </p>

          <p className="my-4 text-base font-RubikRegular">
          05. I learned… I really love leading a team and leading those I work with. It was such an amazing learning experience working with a team of my peers. Reflections were very important and I found the experience very rewarding. I hope to continue to find opportunities to lead a team of designers in the future.
          </p>
          
        </div>
      </div>
    </motion.div>
  );
}

export default page;
