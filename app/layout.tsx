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
  description: "Extension Africa Academy",
  icons: {
    icon: "/main-icon.png",
  },
  openGraph: {
    title: "Home | Extension Africa Academy",
    description:
      "Building the largest network of reliable Extension Agents across Africa!",
    url: "https://exafacademy.vercel.app",
    siteName: "Extension Africa Academy",
    images: [
      {
        url: "/exaf_Preview.png",
        width: 1200,
        height: 630,
        alt: "Extension Africa Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Extension Africa Academy",
    description:
      "Building the largest network of reliable Extension Agents across Africa!",
    images: ["/exaf_Preview.png"],
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
