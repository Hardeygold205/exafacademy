import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import NavBar from "@/sections/NavBar";

const JetBrains = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-JetBrains",
});

export const metadata: Metadata = {
  title: {
    default: "Afrexa",
    template: "%s | Afrexa",
  },
  description: "Africa Extension Academy",
  icons: {
    icon: "/main-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JetBrains.className} font-sans antialiased relative`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
