"use client";

import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  return (
    <footer
      className={`bg-black text-gray-100 px-6 py-16 bottom-0 w-full ${
        isAuthPage ? "hidden" : ""
      }`}>
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-7">
        <div className="lg:col-span-2 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
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
          <div className="flex gap-4 pt-2 border-t border-gray-800 items-center ">
            <Link
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub">
              <Instagram className="w-5 h-5" />
            </Link>
            <div
              className="w-px h-6 bg-gray-800"
              role="separator"
              aria-orientation="vertical"></div>
            <Link
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Link>
            <div
              className="w-px h-6 bg-gray-800"
              role="separator"
              aria-orientation="vertical"></div>
            <Link
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </Link>
            <div
              className="w-px h-6 bg-gray-800"
              role="separator"
              aria-orientation="vertical"></div>
            <Link
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Twitter">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="lg:col-span-5 grid gap-8 gap-y-8 md:gap-5 grid-cols-2 lg:gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Services</h6>
            <ul className="space-y-3">
              {[
                "E-Learning Platform",
                "Agripreneurship Training",
                "Agribusiness",
                "Leadership Training",
                "Digital Skills",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:opacity-80 transition-colors text-sm flex items-start">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-2 shrink-0"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Company</h6>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Products</h6>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  AfrExa
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  FarmEx
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  ChatBox
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Contact</h6>
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

      <div className="mt-16 border-t border-gray-800 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-400 justify-center text-center">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Aftrica Extension Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
