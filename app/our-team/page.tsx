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
      <div className="max-w-7xl mx-auto text-center mb-16 sticky top-10 z-40 bg-neutral-50 rouned-b-2xl p-3">
        <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
          Leadership
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
          Our Team
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Meet the passionate individuals driving agricultural innovation across
          Africa.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-green-200 rounded-full scale-105 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    width={600}
                    height={600}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-green-600 mb-4 uppercase tracking-wider">
                {member.role}
              </p>

              <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <button className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-green-600 hover:text-white transition-colors">
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
