import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import NavBar from "@/sections/NavBar";
import Footer from "@/sections/Footer";

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
      <body className={`${JetBrains.className} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
