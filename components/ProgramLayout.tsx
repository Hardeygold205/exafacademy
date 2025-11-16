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
                  <div className="flex flex-row items-center gap-2 bg-blue-200 py-2 px-3 rounded-full w-fit my-5">
                    <CalendarRange />
                    UNDERGRADUATE STUDENTS
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
            className="flex-1 rounded-3xl bg-white shadow-md">
            <div className="grid grid-cols-4 items-center h-full">
              <div className="col-span-2 p-5 gap-5 flex flex-col">
                <div>
                  <div className="flex flex-row items-center gap-2 bg-blue-200 py-2 px-3 rounded-full w-fit my-5">
                    <CalendarRange />
                    RECENT GRADUATES
                  </div>
                  <h1 className="leading-7 text-2xl my-2">
                    Unlock Your Agribusiness Potential
                  </h1>
                  <p>Unlock Your Agribusiness Potential</p>
                </div>
              </div>
              <Image
                src="/hero-2.png"
                alt="Academy Program"
                width={500}
                height={100}
                className="rounded-r-3xl col-span-2 w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-5/12 p-2 flex flex-col space-y-5">
          <motion.div
            variants={imageVariants}
            className="flex-1 rounded-3xl bg-white shadow-md">
            <div className="grid grid-cols-4 items-center h-full">
              <div className="col-span-2 w-ful">
                <Image
                  src="/hero_img.jpg"
                  alt="Academy Program"
                  width={500}
                  height={500}
                  className="rounded-l-3xl  w-full h-auto object-cover"
                />
              </div>
              <div className="col-span-2 p-5 gap-5 flex flex-col">
                <div>
                  <div className="flex flex-row items-center gap-2 bg-blue-200 py-2 px-3 rounded-full w-fit my-5">
                    <CalendarRange />
                    SHAPING THE FUTURE
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
                    <div className="flex flex-row items-center gap-2 bg-blue-200 py-2 px-3 rounded-full w-fit my-5">
                      <CalendarRange />
                      AGRIBUSINESS PROFESSIONALS
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
          <h5 className="text-center">
            Do not belong to any of the above category? Register now to explore
            our Self-study courses.
          </h5>
          <h1 className="font-bold text-3xl text-center">Get started today</h1>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProgramLayout;
