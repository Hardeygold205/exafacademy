"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarRange } from "lucide-react";

const gridVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function ProgramLayout() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={gridVariant}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center">
        <div className="w-full md:w-5/12 p-2 flex flex-col space-y-5">
          <motion.div
            variants={imageVariants}
            className="flex-1 rounded-3xl bg-white shadow-md">
            <div className="grid grid-rols-5 items-center h-full">
              <div className="col-span-3 relative ">
                <Image
                  src="/hero-1.jpg"
                  alt="Academy Program"
                  width={700}
                  height={500}
                  className="rounded-t-3xl w-full h-auto object-cover"
                />
              </div>
              <div className="col-span-2 p-5 gap-5 flex flex-col">
                <div>
                  <div className="flex flex-row items-center gap-2 bg-blue-200 py-1 px-2 md:py-2 md:px-3 rounded-full w-fit my-5">
                    <CalendarRange className="w-4" />
                    <h3 className="text-sm md:text-md">
                      UNDERGRADUATE STUDENTS
                    </h3>
                  </div>
                  <h1 className="leading-7 text-2xl my-2">
                    Pursue a career in Agribusiness
                  </h1>
                  <p>
                    Are you unsure about your career path in agricultural
                    business? Or confused about your agr...
                  </p>
                  <Link className="text-red-500 hover:underline" href="/">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="flex-1 rounded-3xl bg-white shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative w-full md:w-1/2 order-2 md:order-1">
                <Image
                  src="/hero-2.png"
                  alt="Academy Program"
                  width={500}
                  height={400}
                  className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-5 gap-5 flex flex-col order-1 md:order-2">
                <div>
                  <div className="flex flex-row items-center gap-2 bg-blue-200 py-1 px-2 md:py-2 md:px-3 rounded-full w-fit my-5">
                    <CalendarRange className="w-4" />
                    <h3 className="text-sm md:text-md">RECENT GRADUATES</h3>
                  </div>
                  <h1 className="leading-7 text-2xl my-2">
                    Unlock Your Agribusiness Potential
                  </h1>
                  <p>Unlock Your Agribusiness Potential</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-5/12 p-2 flex flex-col space-y-5">
          <motion.div
            variants={imageVariants}
            className="flex-1 rounded-3xl bg-white shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative w-full md:w-1/2 order-1">
                <Image
                  src="/hero-4.jpg"
                  alt="Academy Program"
                  width={400}
                  height={400}
                  className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-5 gap-5 flex flex-col order-2">
                <div>
                  <div className="flex flex-row items-center gap-2 bg-blue-200 py-1 px-2 md:py-2 md:px-3 rounded-full w-fit my-5">
                    <CalendarRange className="w-4" />
                    <h3 className="text-sm md:text-md">SHAPING THE FUTURE</h3>
                  </div>
                  <h1 className="leading-7 text-2xl my-2">
                    Africa Extension Academy
                  </h1>
                  <p>
                    Building the largest network of reliable Extension Agents
                    across Africa!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="flex-1 rounded-3xl bg-white shadow-md">
            <div className="grid grid-rols-5 items-center h-full">
              <div className="col-span-2 p-5 gap-5 flex flex-col">
                <div>
                  <div>
                    <div className="flex flex-row items-center gap-2 bg-blue-200 py-1 px-2 md:py-2 md:px-3 rounded-full w-fit my-5">
                      <CalendarRange className="w-4" />
                      <h3 className="text-sm md:text-md">
                        AGRIBUSINESS PROFESSIONALS
                      </h3>
                    </div>
                    <h1 className="leading-7 text-2xl my-3">
                      Pursue a career in Agribusiness
                    </h1>
                    <p className="my-2">
                      Are you unsure about your career path in agricultural
                      business? Or confused about your agr...
                    </p>
                    <Link className="text-red-500 hover:underline" href="/">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-3 relative ">
                <Image
                  src="/hero-3.jpg"
                  alt="Academy Program"
                  width={700}
                  height={500}
                  className="rounded-b-3xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 1.5, delay: 1 },
          }}
          viewport={{ once: true }}
          className="w-full p-2 md:p-5 bg-white rounded-3xl justify-center flex-col md:w-10/12 space-y-1 md:space-y-3 shadow-2xl ">
          <h5 className="text-center text-sm md:text-lg lg:text-xl p-2">
            Do not belong to any of the above category? Register now to explore
            our Self-study courses.
          </h5>
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
            Get started today
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProgramLayout;
