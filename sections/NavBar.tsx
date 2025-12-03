/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { RiMenu2Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "E-Learning Platform",
    href: "#",
    description: "Comprehensive online courses for agricultural education",
  },
  {
    title: "Agripreneurship Training",
    href: "#",
    description: "Hands-on training for aspiring agricultural entrepreneurs",
  },
  {
    title: "Agribusiness",
    href: "#",
    description: "Market analysis and business development services",
  },
  {
    title: "Leadership Training",
    href: "#",
    description: "Building effective leadership skills in agriculture",
  },
  {
    title: "Digital Skills",
    href: "#",
    description: "Empowering farmers with essential digital literacy",
  },
];

const products = [
  {
    title: "Afrexa",
    href: "#",
    description: "All-in-one farm management software solution",
  },
  {
    title: "FarmEx",
    href: "#",
    description: "Marketplace connecting farmers with buyers and suppliers",
  },
  {
    title: "ChatBox",
    href: "#",
    description: "AI-powered virtual assistant for agricultural support",
  },
];

const aboutItems = [
  {
    title: "Our Company",
    href: "#",
    description:
      "Empowering African agriculture through knowledge sharing and innovation.",
  },
  {
    title: "Careers",
    href: "#",
    description: "See our client success stories",
  },
  {
    title: "Our Team",
    href: "#",
    description: "Learn about our mission and team",
  },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    if (isAuthPage) {
      setIsFixed(false);
      setShowNavbar(true);
      return;
    }

    let ticking = false;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = 100;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > navbarHeight) {
            setIsFixed(true);
            setTimeout(() => setShowNavbar(true), 50);
          } else {
            setIsFixed(false);
            setShowNavbar(true);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [isAuthPage]);

  return (
    <header
      className={cn(
        "w-full h-auto top-0 right-0 left-0 bg-primary shadow-2xl z-50 px-2",
        isAuthPage
          ? "fixed opacity-100"
          : isFixed
          ? "fixed opacity-0 animate-fadeInDown "
          : "relative opacity-100"
      )}
      style={{
        animation:
          !isAuthPage && isFixed ? "fadeInDown 0.8s ease-out forwards" : "none",
      }}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto z-50">
        <div>
          <Link href="/">
            <Image
              src="/ExAf_logo.png"
              alt="Afrexa Logo"
              width={150}
              height={150}
              className=""
            />
          </Link>
        </div>
        <NavigationMenu className="hidden [@media(min-width:803px)]:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="#" title="Our Company">
                    Empowering African agriculture through knowledge sharing and
                    innovation.
                  </ListItem>
                  <ListItem href="#" title="Careers">
                    See our client success stories
                  </ListItem>
                  <ListItem href="#" title="Our Team">
                    Learn about our mission and team
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {products.map((product) => (
                    <ListItem
                      key={product.title}
                      title={product.title}
                      href={product.href}>
                      {product.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                className="hover:opacity-80 text-xs [@media(min-width:870px)]:text-sm font-medium text-white"
                href="/courses">
                Available Courses
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="mr-4 flex items-center flex-row gap-4">
          <div className="hidden sm:flex flex-row gap-1 items-center">
            <Link
              href="/register"
              className="bg-transparent text-white border px-2 py-1 md:px-4 md:py-2 rounded-md font-semibold hover:opacity-80 transition hover:-translate-y-0.5 ease-in-out duration-300">
              Register
            </Link>
            <div
              className="w-px h-6 bg-gray-300 mx-2"
              role="separator"
              aria-orientation="vertical"></div>
            <Link
              href="/login"
              className="bg-white text-primary px-2 py-1 md:px-4 md:py-2 rounded-md font-semibold hover:bg-gray-200 transition hover:-translate-y-0.5 ease-in-out duration-300">
              Login
            </Link>
          </div>
          <div className="[@media(min-width:803px)]:hidden">
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <X
                  className="w-6 h-6 transition-transform duration-300 text-white"
                  size={32}
                />
              ) : (
                <RiMenu2Fill className="w-6 h-6 text-md transition-transform duration-300 text-white" />
              )}
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 h-screen w-full bg-white shadow-lg [@media(min-width:803px)]:hidden z-40 transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}>
          <nav className="flex justify-between z-50 bg-primary items-center px-4">
            <div>
              <Link href="/">
                <Image
                  src="/ExAf_logo.png"
                  alt="Afrexa Logo"
                  width={150}
                  height={150}
                  className=""
                />
              </Link>
            </div>
            <div onClick={() => setOpen(!open)}>
              <X
                className="w-6 h-6 transition-transform duration-300 text-white mr-2"
                size={32}
              />
            </div>
          </nav>

          {/* --- UPDATED MOBILE MENU LIST --- */}
          <div className="flex flex-col space-y-4 p-6 text-black overflow-y-auto h-[calc(100vh-180px)]">
            <MobileDropdown
              title="About Us"
              items={aboutItems}
              setOpen={setOpen}
            />

            <MobileDropdown
              title="Services"
              items={services}
              setOpen={setOpen}
            />

            <MobileDropdown
              title="Products"
              items={products}
              setOpen={setOpen}
            />

            <div className="border-b pb-2">
              <Link
                className="hover:opacity-80 hover:font-medium text-lg block py-2"
                href="/courses"
                onClick={() => setOpen(false)}>
                Available Courses
              </Link>
            </div>
            <div className="flex-col gap-1 items-center justify-center flex mt-4 w-full">
              <Link
                onClick={() => setOpen(false)}
                href="/register"
                className="bg-transparent text-primary border border-primary w-full py-4 text-center rounded-md font-semibold hover:bg-gray-200 transition hover:-translate-y-0.5 ease-in-out duration-300">
                Register
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/login"
                className="bg-primary text-white w-full text-center py-4 rounded-md font-semibold hover:bg-gray-200 transition hover:-translate-y-0.5 ease-in-out duration-300">
                Login
              </Link>
            </div>
          </div>
        </div>
        {open && (
          <div
            className="fixed inset-0 bg-transparent bg-opacity-50 md:hidden z-30"
            onClick={() => setOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface MobileDropdownProps {
  title: string;
  items: { title: string; href: string; description?: string }[];
  setOpen: (open: boolean) => void;
}

const MobileDropdown = ({ title, items, setOpen }: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-lg hover:font-medium hover:opacity-80 text-left">
        {title}
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}>
        <ul className="flex flex-col space-y-3 pl-4 pt-2">
          {items.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-base text-gray-600 hover:text-primary">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
