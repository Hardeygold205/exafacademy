"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { RiMenu2Fill } from "react-icons/ri";
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

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-auto top-0 right-0 left-0 bg-primary shadow-2xl z-50 px-2 fixed">
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
                  <ListItem href="/about" title="Our Company">
                    Empowering African agriculture through knowledge sharing and
                    innovation.
                  </ListItem>
                  <ListItem href="/careers" title="Careers">
                    See our client success stories
                  </ListItem>
                  <ListItem href="/clients" title="Our Team">
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
              <Link className="hover:opacity-80 text-white" href="/courses">
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
          className={`fixed top-0 left-0 h-screen w-full bg-white shadow-lg md:hidden z-40 transition-transform duration-300 ease-in-out ${
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
          <ul className="flex flex-col space-y-6 p-6 text-black">
            <li>
              <Link
                className="hover:opacity-80 hover:font-medium text-lg"
                href="/"
                onClick={() => setOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-80 hover:font-medium text-lg"
                href="/programs"
                onClick={() => setOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-80 hover:font-medium text-lg"
                href="/programs"
                onClick={() => setOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-80 hover:font-medium text-lg"
                href="/courses"
                onClick={() => setOpen(false)}>
                Available Courses
              </Link>
            </li>
          </ul>

          <div className="flex-col gap-1 items-center justify-center flex mt-4 p-4 w-full">
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
