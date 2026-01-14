import React from "react";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
};

const teamMembers = [
  {
    name: "Tajudeen Yahaya",
    role: "Chief Executive Officer",
    image: "/md.jpg",
    linkedin: "https://www.linkedin.com/in/tajudeen-yahaya-67a61b106",
  },
  {
    name: "Abdulsamad Isah",
    role: "Chief Operations Officer",
    image: "/coo.jpg",
    linkedin: "https://www.linkedin.com/in/abdulsamad-isah-138456ba",
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

const OurTeam = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16 md:sticky md:top-4 z-40 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-sm font-bold text-green-600 tracking-widest uppercase">
          Leadership
        </h2>
        <p className="mt-2 text-3xl font-black text-gray-900 sm:text-5xl tracking-tight">
          Our Team
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Meet the passionate individuals driving agricultural innovation across
          Africa.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-4 md:gap-x-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white p-5 md:p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col items-center text-center 
              transition-all duration-300 lg:hover:shadow-2xl lg:hover:-translate-y-2 lg:hover:border-green-100 active:scale-95 active:shadow-inner">
              <div className="relative mb-4 md:mb-6">
                <div className="absolute inset-0 bg-green-200 rounded-full scale-110 blur-md opacity-40 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-green-500/20 lg:border-white shadow-lg group-active:border-green-500 transition-colors">
                  <Image
                    width={400}
                    height={400}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 
                    /* Color on mobile, Grayscale on Desktop */
                    grayscale-0 lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="flex flex-col grow min-h-16 justify-center">
                <h3 className="text-sm md:text-lg font-bold text-gray-900 lg:group-hover:text-green-700 transition-colors line-clamp-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] md:text-xs font-semibold text-green-600 mt-1 uppercase tracking-tighter md:tracking-wider">
                  {member.role}
                </p>
              </div>

              <div
                className="flex space-x-3 mt-5 
                /* Visible on mobile/tablets, reveal on desktop hover */
                opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                transform lg:translate-y-4 lg:group-hover:translate-y-0 
                transition-all duration-500">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
