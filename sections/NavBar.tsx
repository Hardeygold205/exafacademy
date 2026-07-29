"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Mail, Phone } from "lucide-react";
import Button from "@/components/ui/ReuseButton";
import HoverLink from "@/components/ui/HoverLink";
import { useBreakPoint } from "@/hooks/useBreakPoint";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-team", label: "Our Team" },
  { href: "/programs", label: "Programs" },
  { href: "/courses", label: "Available Courses" },
];

const services = [
  {
    title: "Undergraduate Students",
    href: "/under-graduate",
    description: "Pursue a career in Agribusiness",
  },
  {
    title: "Recent Graduates",
    href: "/recent-graduate",
    description:
      "Unlock your potential. Bridge the gap between academic theory and practical industry requirements with our intensive bootcamps.",
  },
  {
    title: "Agribusiness Professionals",
    href: "/agribusiness",
    description:
      "Already in the field? Sharpen your management skills and expand your network to scale your agribusiness operations.",
  },
  {
    title: "Shaping The Future",
    href: "/ecosystem",
    description:
      "Join the Extension Africa Academy network. We are building the largest community of reliable Extension Agents across the continent.",
  },
];

const products = [
  {
    title: "Afrexa",
    href: "https://academy.extensionafrica.com",
    description: "All-in-one farm management software solution",
  },
  {
    title: "FarmEx",
    href: "https://farmex.extensionafrica.com",
    description: "Marketplace connecting farmers with buyers and suppliers",
  },
  {
    title: "AbokiNoma",
    href: "https://chatbox.extensionafrica.com",
    description: "AI-powered virtual assistant for agricultural support",
  },
  {
    title: "CASE",
    href: "https://case.extensionafrica.com",
    description: "Commercial agent search engine",
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const width = useBreakPoint();

  function getClosedHeight(width: number | null) {
    if (width === null) return 90;
    if (width < 640) return 70;
    if (width < 768) return 80;
    return 90;
  }

  const closedHeight = getClosedHeight(width);
  const padding = 8;
  const outerHeight = isOpen ? "100vh" : closedHeight + padding * 2;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.div
      animate={{
        height: outerHeight,
        padding: isOpen ? 0 : padding,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 box-border transition-colors duration-300",
        scrolled && !isOpen ? "backdrop-blur-sm" : "bg-transparent",
      )}>
      <motion.header
        animate={{
          borderRadius: isOpen ? 0 : 2,
          backgroundColor: isOpen
            ? "var(--color-primary)"
            : "var(--color-primary)",
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full w-full flex-col overflow-hidden justify-start">
        <div className="flex max-w-7xl mx-auto shrink-0 items-center justify-between px-4 md:px-6 w-full pt-2.5 pb-3">
          <Link href="/" className="relative z-10 block w-40">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                animate={{
                  width: isOpen
                    ? "var(--logo-width-open)"
                    : "var(--logo-width-closed)",
                  height: isOpen
                    ? "var(--logo-height-open)"
                    : "var(--logo-height-closed)",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative
                [--logo-width-closed:150px] [--logo-width-open:195px] [--logo-height-closed:53px] [--logo-height-open:73px]
                sm:[--logo-width-closed:165px] sm:[--logo-width-open:225px] sm:[--logo-height-closed:66px] sm:[--logo-height-open:80px]
                md:[--logo-width-closed:205px] md:[--logo-width-open:275px] md:[--logo-height-closed:81px] md:[--logo-height-open:99px]">
                <Image
                  src="/ExAf_logo.png"
                  alt="Extension Africa"
                  fill
                  sizes="(max-width: 768px) 247px, 308px"
                  priority
                  className="object-contain object-left py-1.5"
                />
              </motion.div>
            </AnimatePresence>
          </Link>

          <nav
            className={clsx(
              "hidden items-center gap-5 [@media(min-width:970px)]:flex",
              isOpen &&
                "[@media(min-width:970px)]:invisible [@media(min-width:970px)]:opacity-0",
            )}>
            {navLinks.map((link) => (
              <HoverLink
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-tighter">
                {link.label.toUpperCase()}
              </HoverLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div
              className={clsx(
                "hidden items-center gap-4 [@media(min-width:1190px)]:flex",
                isOpen && "lg:invisible lg:opacity-0",
              )}>
              <Button
                href="/register"
                text="Register"
                bg="bg-transparent border border-white/30"
                px="px-6"
                py="py-3"
              />
              <Button
                href="/login"
                text="Login"
                bg="bg-white"
                textColor="text-black"
                px="px-6"
                py="py-3"
              />
            </div>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="relative flex h-6 w-8 flex-col justify-center gap-2.5">
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[2.2px] w-full origin-center bg-white"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[2.2px] w-full origin-center bg-white"
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: isOpen ? 0.25 : 0, duration: 0.4 }}
              className="flex flex-1 flex-col items-center gap-2 [@media(min-width:390px)]:gap-4 overflow-y-auto px-6 py-8 md:gap-5">
              {navLinks.map((link) => (
                <HoverLink
                  hoverColor="text-black"
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bold uppercase tracking-tight text-[clamp(1.4rem,min(7vw,5vh),2.5rem)] [@media(max-height:690px)]:text-[1.2rem] leading-tight">
                  {link.label}
                </HoverLink>
              ))}

              <div
                className={clsx(
                  "items-center gap-4 w-full justify-center max-w-md flex flex-col md:flex-row",
                )}>
                <Button
                  href="/register"
                  text="Register"
                  bg="bg-transparent border border-white/30"
                  px="px-6"
                  py="py-3"
                  className="w-full"
                />
                <Button
                  href="/login"
                  text="Login"
                  bg="bg-white"
                  textColor="text-black"
                  px="px-6"
                  py="py-3"
                  className="w-full"
                />
              </div>

              <div className="my-5 flex flex-col items-center gap-3 border-t border-white/30 pt-8 text-white/90 sm:mt-10">
                <div className="flex flex-row gap-2 items-center">
                  <Mail className="md:w-8 md:h-8 w-5 h-5 text-white" />
                  <HoverLink
                    onClick={() => setIsOpen(false)}
                    href="mailto:info@extensionafrica.com"
                    hoverColor="text-black"
                    className="md:heading-h3 heading-h4">
                    e-learning@extensionafrica.com
                  </HoverLink>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <Phone className="md:w-8 md:h-8 w-5 h-5 text-white" />
                  <HoverLink
                    onClick={() => setIsOpen(false)}
                    href="tel:+2347035621550"
                    hoverColor="text-black"
                    className="md:heading-h3 heading-h4">
                    +234-703-562-1550
                  </HoverLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </motion.div>
  );
}
