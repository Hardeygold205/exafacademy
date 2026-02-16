"use client";

import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import {
//   RiTwitterXFill,
//   RiFacebookFill,
//   RiLinkedinFill,
//   RiInstagramFill,
// } from "react-icons/ri";
// import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  return (
    <footer
      className={`bg-primary text-gray-100 px-6 py-16 w-full relative bottom-0 right-0 left-0 z-40 ${
        isAuthPage ? "hidden" : ""
      }`}>
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-7">
        <div className="lg:col-span-2 space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/">
            <Image
              src="/ExAf_logo.png"
              alt="Exaf-Logo"
              className="w-48 h-auto transition-opacity hover:opacity-90"
              width={220}
              height={220}
              priority
            />
          </Link>
          <p className="text-gray-300 leading-relaxed max-w-72">
            Building the largest network of reliable Extension Agents across
            Africa!
          </p>
          <div className="social-links flex flex-rol gap-2 justify-start items-center">
            <a
              href="https://web.facebook.com/extensionafrica"
              className="social-link"
              aria-label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <div className="border-white bottom-1 border h-6 bg-white text-white"></div>
            <a
              href="https://x.com/extensionafrica"
              className="social-link"
              aria-label="Twitter">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <div className="border-white bottom-1 border h-6 bg-white text-white"></div>
            <a
              href="https://www.linkedin.com/company/extension-africa/posts/?feedView=all"
              className="social-link"
              aria-label="LinkedIn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <div className="border-white bottom-1 border h-6 bg-white text-white"></div>
            <a
              href="https://www.instagram.com/extensionafrica"
              className="social-link"
              aria-label="Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* <div className="flex gap-4 pt-2 items-center ">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              href="https://www.instagram.com/extensionafrica"
              className="bg-primary/10 border border-gray-400 p-2 rounded-xl hover:opacity-80 hover:scale-105 ease-in-out delay-150 duration-300"
              aria-label="GitHub">
              <RiInstagramFill className="w-5 h-5" />
            </motion.a>
            <div
              className="w-px h-6 bg-gray-400"
              role="separator"
              aria-orientation="vertical"></div>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              href="https://www.linkedin.com/company/extension-africa/posts/?feedView=all"
              className="bg-primary/10 border border-gray-400 p-2 rounded-xl hover:opacity-80 hover:scale-105 ease-in-out delay-150 duration-300"
              aria-label="LinkedIn">
              <RiLinkedinFill className="w-5 h-5" />
            </motion.a>
            <div
              className="w-px h-6 bg-gray-400"
              role="separator"
              aria-orientation="vertical"></div>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              href="https://x.com/extensionafrica"
              className="bg-primary/10 border border-gray-400 p-2 rounded-xl hover:opacity-80 hover:scale-105 ease-in-out delay-150 duration-300"
              aria-label="Twitter">
              <RiTwitterXFill className="w-5 h-5" />
            </motion.a>
            <div
              className="w-px h-6 bg-gray-400"
              role="separator"
              aria-orientation="vertical"></div>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              href="https://web.facebook.com/extensionafrica"
              className="bg-primary/10 border border-gray-400 p-2 rounded-xl hover:opacity-80 hover:scale-105 ease-in-out delay-150 duration-300"
              aria-label="Twitter">
              <RiFacebookFill className="w-5 h-5" />
            </motion.a>
          </div> */}
        </div>

        {/* Links Grid */}
        <div className="lg:col-span-5 grid gap-8 gap-y-8 md:gap-5 grid-cols-2 lg:gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white uppercase">Programs</h6>
            <ul className="space-y-3">
              {[
                { name: "Recent Graduate", link: "/recent-graduate" },
                { name: "Undergraduate Training", link: "/under-graduate" },
                { name: "Agribusiness", link: "/agribusiness" },
                { name: "Shaping The Future", link: "/ecosystem" },
              ].map((index, service) => (
                <li key={service}>
                  <Link
                    href={index.link}
                    className="text-gray-300 hover:opacity-80 transition-colors text-sm flex items-start">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-2 shrink-0"></span>
                    {index.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white uppercase">Company</h6>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Careers"
                        ? "https://career.extensionafrica.com"
                        : item === "Our Team"
                          ? "/our-team"
                          : "/about-us"
                    }
                    className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4 text-white uppercase">Products</h6>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://academy.extensionafrica.com"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  AfrExa
                </Link>
              </li>
              <li>
                <Link
                  href="https://farmex.extensionafrica.com"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  FarmEx
                </Link>
              </li>
              <li>
                <Link
                  href="https://chatbox.extensionafrica.com"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  AbokiNoma
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://case.extensionafrica.com"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  CASE
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white uppercase">Contact Us</h6>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm">+234-703-562-1550</p>
                  <p className="text-xs text-gray-400">Calls & Support</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm overflow-hidden text-ellipsis break-all">
                    e-learning@extensionafrica.com
                  </p>
                  <p className="text-xs text-gray-400">General inquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm">24/7 Support</p>
                  <p className="text-xs text-gray-400">Monitored 24 hours</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-400 pt-8 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-6 text-sm text-white justify-center text-center">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
          </div>

          <p className="text-white text-sm">
            &copy; {currentYear} Extension Aftrica Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
