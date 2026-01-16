"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Linkedin, Mail, Award, Users } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Tajudeen Yahaya",
    role: "Chief Executive Officer",
    image: "/md.jpg",
    linkedin: "https://www.linkedin.com/in/tajudeen-yahaya-67a61b106",
    tier: "executive",
  },
  {
    name: "Abdulsamad Isah",
    role: "Chief Operations Officer",
    image: "/coo.jpg",
    linkedin: "https://www.linkedin.com/in/abdulsamad-isah-138456ba",
    tier: "executive",
  },
  {
    name: "Fatima Abdullahi",
    role: "Human Resource",
    image: "/hr.jpg",
    linkedin: "https://www.linkedin.com/in/isah-fatima-436020238",
  },
  {
    name: "Nura Lawal",
    role: "Finance Lead",
    image: "/fl.jpg",
    linkedin: "https://www.linkedin.com/in/nura-lawal-24ab8222a/",
  },
  {
    name: "Nasiru Darma",
    role: "Operations Lead",
    image: "/ol.jpg",
    linkedin: "https://www.linkedin.com/in/nasiru-darma-0373339b",
  },
  {
    name: "Ezra Kolo",
    role: "Technology Lead",
    image: "/cto.jpg",
    linkedin: "https://www.linkedin.com/in/zhiriezra",
  },
  {
    name: "Ifeoma Okoro",
    role: "Business Development",
    image: "/bd.jpg",
    linkedin: "https://www.linkedin.com/in/ifeoma-okoro-5a156537",
  },
  {
    name: "Hadiza Bala",
    role: "Thematic Coordinator",
    image: "/tc.jpg",
    linkedin: "https://www.linkedin.com/in/hadiza-bala-aliyu-a57abb232",
  },
  {
    name: "Nazeer Ahmad",
    role: "Rural Structure Development",
    image: "/rs.jpg",
    linkedin:
      "https://www.linkedin.com/in/nazeer-ahmad-phd-candidate-in-agronomy-6417b5126",
  },
  {
    name: "Alex Ochigbo",
    role: "Rural Structure Utilisation",
    image: "/rsu.jpg",
    linkedin: "https://www.linkedin.com/in/alexander-ochigbo-76306b1a9",
  },
  {
    name: "Taofiqah Ajetunmobi",
    role: "Academic Coordinator",
    image: "/ac.jpeg",
    linkedin:
      "https://www.linkedin.com/in/taofiqah-ajetunmobi-pmd-pro-0253031b6",
  },
  {
    name: "Joyce Okoro",
    role: "Monitoring & Evaluation",
    image: "/me.jpeg",
    linkedin: "https://www.linkedin.com/in/joyce-okoro-811097157",
  },
  {
    name: "Joy Abodiya",
    role: "Communications & Media",
    image: "/co.jpeg",
    linkedin: "https://www.linkedin.com/in/joy-igonoh-7a2901233",
  },
];

const TeamMemberCard = ({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) => {
  const isExecutive = member.tier === "executive";
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center mb-12 md:mb-20 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}>
      {isExecutive ? (
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center md:hidden justify-center w-10 h-10 md:w-12 md:h-12 z-20 bg-white rounded-full border-4 border-green-500 shadow-lg">
          <Award className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
        </div>
      ) : (
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 z-20 bg-white rounded-full border-4 border-green-500 shadow-lg">
          <Users className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, type: "spring", stiffness: 100 },
        }}
        viewport={{ once: true, margin: "-100px" }}
        className={`w-full ${
          isExecutive ? "md:w-7/12" : "md:w-5/12"
        } pl-12 md:pl-0`}>
        <div
          className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 
            ${isExecutive ? "border-green-500 p-2 md:p-4 lg:p-8" : "border-gray-100"} 
            lg:hover:border-green-300 lg:hover:-translate-y-2`}>
          
          {isExecutive && (
            <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 hidden md:block">
              Executive
            </div>
          )}
        
          <div
            className={`flex ${
              isExecutive ? "md:flex-row flex-col" : "flex-col"
            } items-center gap-6 p-5 md:p-6`}>
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-green-200 rounded-full scale-110 blur-md opacity-40 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>

              <div
                className={`relative overflow-hidden rounded-full border-4 shadow-lg transition-all duration-300
                ${
                  isExecutive
                    ? "w-32 h-32 md:w-48 md:h-48 border-green-500/30"
                    : "w-28 h-28 md:w-36 md:h-36 border-green-500/20 lg:border-white"
                }
                group-active:border-green-500`}>
                <Image
                  width={400}
                  height={400}
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-700 
                    grayscale-0 lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-110`}
                />
              </div>
            </div>

            <div
              className={`flex flex-col ${
                isExecutive ? "md:flex-1 md:text-left" : ""
              } text-center md:text-left`}>
              <h3
                className={`font-bold text-gray-900 lg:group-hover:text-green-700 transition-colors 
                ${
                  isExecutive
                    ? "text-xl md:text-2xl mb-2"
                    : "text-base md:text-lg mb-1"
                }`}>
                {member.name}
              </h3>
              <p
                className={`font-semibold text-green-600 uppercase tracking-wider mb-4
                ${isExecutive ? "text-sm md:text-base" : "text-xs"}`}>
                {member.role}
              </p>

              <div
                className={`flex ${
                  isExecutive ? "md:justify-start" : ""
                } justify-center gap-3 
                opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                transform lg:translate-y-4 lg:group-hover:translate-y-0 
                transition-all duration-500`}>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-green-50 lg:bg-gray-50 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <Linkedin size={18} />
                </a>
                <button className="p-2.5 bg-green-50 lg:bg-gray-50 rounded-full text-gray-500 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div
        className={`hidden md:block ${isExecutive ? "md:w-5/12" : "md:w-5/12"}`}
      />
    </div>
  );
};

const OurTeam = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    {
      stiffness: 50,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <div
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto text-center mb-16 bg-neutral-50 backdrop-blur-md rounded-b-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-green-600 tracking-widest uppercase">
          Leadership
        </h2>
        <p className="mt-2 text-3xl font-black text-gray-900 sm:text-5xl tracking-tight">
          Meet Our Team
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 items-center">
          We lead with care{" "}
          <span className="text-green-600 text-2xl rounded-full items-center">
            .
          </span>{" "}
          Our core value{" "}
          <span className="text-green-600 text-2xl rounded-full">.</span> And
          shared passion for driving agricultural innovation across Africa.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full hidden md:block" />

        <motion.div
          style={{ height }}
          className="absolute left-8 top-0 bottom-0 w-1 bg-green-600 -translate-x-1/2 rounded-full md:hidden"
        />

        <motion.div
          style={{ height }}
          className="absolute left-8 md:left-1/2 top-0 w-1 bg-green-600 -translate-x-1/2 rounded-full origin-top z-10 hidden md:block"
        />

        <div className="relative z-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
