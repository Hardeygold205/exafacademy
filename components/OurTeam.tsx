"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const teamMembers = [
  {
    name: "Tajudeen Yahaya",
    role: "Chief Executive Officer",
    image: "/teams/md.jpg",
    linkedin: "https://www.linkedin.com/in/tajudeen-yahaya-67a61b106",
    tier: "executive",
  },
  {
    name: "Abdulsamad Isah",
    role: "Chief Operations Officer",
    image: "/teams/coo.jpg",
    linkedin: "https://www.linkedin.com/in/abdulsamad-isah-138456ba",
    tier: "executive",
  },
  {
    name: "Fatima Abdullahi",
    role: "Human Resource",
    image: "/teams/hr.jpg",
    linkedin: "https://www.linkedin.com/in/isah-fatima-436020238",
  },
  {
    name: "Nura Lawal",
    role: "Finance Lead",
    image: "/teams/fl.jpg",
    linkedin: "https://www.linkedin.com/in/nura-lawal-24ab8222a/",
  },
  {
    name: "Nasiru Darma",
    role: "Operations Lead",
    image: "/teams/ol.jpg",
    linkedin: "https://www.linkedin.com/in/nasiru-darma-0373339b",
  },
  {
    name: "Ezra Kolo",
    role: "Technology Lead",
    image: "/teams/cto.jpg",
    linkedin: "https://www.linkedin.com/in/zhiriezra",
  },
  {
    name: "Abdulwahab Bello",
    role: "Business Development",
    image: "/teams/bd.png",
    linkedin: "https://www.linkedin.com/in/bello-abdulwahab-4b7a141a8",
  },
  {
    name: "Hadiza Bala",
    role: "Thematic Coordinator",
    image: "/teams/tc.jpg",
    linkedin: "https://www.linkedin.com/in/hadiza-bala-aliyu-a57abb232",
  },
  {
    name: "Nazeer Ahmad",
    role: "Rural Structure Development",
    image: "/teams/rs.jpg",
    linkedin:
      "https://www.linkedin.com/in/nazeer-ahmad-phd-candidate-in-agronomy-6417b5126",
  },
  {
    name: "Alex Ochigbo",
    role: "Rural Structure Utilisation",
    image: "/teams/rsu.jpg",
    linkedin: "https://www.linkedin.com/in/alexander-ochigbo-76306b1a9",
  },
  {
    name: "Taofiqah Ajetunmobi",
    role: "Academic Coordinator",
    image: "/teams/ac.jpeg",
    linkedin:
      "https://www.linkedin.com/in/taofiqah-ajetunmobi-pmd-pro-0253031b6",
  },
  {
    name: "Joyce Okoro",
    role: "Monitoring & Evaluation",
    image: "/teams/me.jpeg",
    linkedin: "https://www.linkedin.com/in/joyce-okoro-811097157",
  },
  {
    name: "Elizabeth Soladoye",
    role: "Communications & Media",
    image: "/teams/co.jpeg",
    linkedin: "https://www.linkedin.com/in/elizabeth-soladoye",
  },
];

// LinkedIn SVG icon (same as Laravel version)
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-3 h-3">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

// ── Executive card (larger, horizontal layout) ──────────────────────────────
const ExecutiveCard = ({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={cardVariants as Variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className="bg-white rounded-3xl overflow-hidden border border-green-100
               shadow-[0_4px_24px_rgba(22,163,74,0.10)]
               hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(22,163,74,0.18)]
               transition-all duration-500 flex flex-col">
    {/* Photo */}
    <div className="px-5 pt-5">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={member.image}
          alt={member.name}
          width={600}
          height={380}
          className="w-full h-[300px] object-cover object-top
                     transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>

    {/* Info */}
    <div className="flex flex-col items-center text-center px-6 py-5 flex-1">
      <h3 className="text-[1.1rem] font-semibold text-gray-900 mb-1">
        {member.name}
      </h3>
      <p className="text-[11px] font-bold uppercase tracking-widest text-green-700 mb-4">
        {member.role}
      </p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 px-3.5 py-1.5
                   border border-green-200 rounded-full text-green-800
                   text-[11px] font-semibold tracking-wide
                   hover:bg-green-600 hover:border-green-600 hover:text-white
                   transition-all duration-250 hover:scale-105">
        <LinkedInIcon />
        LinkedIn
      </a>
    </div>
  </motion.div>
);

// ── Regular team member card ─────────────────────────────────────────────────
const MemberCard = ({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={cardVariants as Variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className="bg-white rounded-2xl overflow-hidden border border-green-50
               shadow-[0_2px_12px_rgba(22,163,74,0.07)]
               hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(22,163,74,0.16)]
               transition-all duration-500 flex flex-col">
    {/* Photo */}
    <div className="px-4 pt-4">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={200}
          className="w-full h-[150px] object-cover object-top
                     transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>

    {/* Info */}
    <div className="flex flex-col items-center text-center px-4 py-4 flex-1">
      <h3 className="text-[1rem] font-semibold text-gray-900 mb-1 leading-snug">
        {member.name}
      </h3>
      <p className="text-[11px] font-bold uppercase tracking-wider text-green-700 mb-3">
        {member.role}
      </p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5
                   border border-green-200 rounded-full text-green-800
                   text-[11px] font-semibold tracking-wide
                   hover:bg-green-600 hover:border-green-600 hover:text-white
                   transition-all duration-250 hover:scale-105">
        <LinkedInIcon />
        LinkedIn
      </a>
    </div>
  </motion.div>
);

// ── Main component ────────────────────────────────────────────────────────────
const OurTeam = () => {
  const executives = teamMembers.filter((m) => m.tier === "executive");
  const members = teamMembers.filter((m) => m.tier !== "executive");

  return (
    <section
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(170deg, #fafaf9 0%, #f0fdf4 60%, #fafaf9 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-width-[1200px] mx-auto text-center mb-16 max-w-[1200px]">
        {/* Eyebrow pill */}
        <span
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full
                        bg-green-50 border border-green-200 text-green-800
                        text-[11px] font-bold uppercase tracking-widest mb-5">
          The People
        </span>

        <h2 className="text-[clamp(2.4rem,4.5vw,3.6rem)] font-black text-gray-900 leading-tight mb-4">
          Meet Our <span className="text-green-600">Team</span>
        </h2>
        <p className="text-[1.05rem] text-gray-500 max-w-[520px] mx-auto leading-relaxed">
          Passionate individuals driving agricultural innovation and
          transformation across Africa.
        </p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto">
        {/* ── Executive row (2 cards, centered, wider) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[680px] mx-auto mb-10">
          {executives.map((member, i) => (
            <ExecutiveCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-green-100" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">
            Our Talented Team
          </span>
          <div className="flex-1 h-px bg-green-100" />
        </motion.div>

        {/* ── Team grid (5 columns → responsive) ── */}
        <div
          className="grid gap-5
                        grid-cols-2
                        sm:grid-cols-3
                        md:grid-cols-4
                        lg:grid-cols-5">
          {members.map((member, i) => (
            <MemberCard
              key={member.name}
              member={member}
              index={executives.length + i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
