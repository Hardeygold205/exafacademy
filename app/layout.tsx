import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/sections/NavBar";
import Footer from "@/sections/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.extensionafrica.com"),
  title: {
    default: "Afrexa",
    template: "%s | Afrexa",
  },
  keywords: [
    "Agriculture",
    "Agricultural Extension",
    "Agro-Business",
    "Academy",
    "E-learning",
    "IT Company",
  ],
  description:
    "Building the largest network of reliable Extension Agents across Africa!",
  openGraph: {
    title: "Afrexa | Extension Africa Academy",
    description:
      "Building the largest network of reliable Extension Agents across Africa!",
    url: "https://academy.extensionafrica.com",
    siteName: "Afrexa |Extension Africa Academy",
    images: [
      {
        url: "/afrexa_preview.png",
        width: 1200,
        height: 630,
        alt: "Afrexa Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/main-icon.png",
    shortcut: "/main-icon.png",
    apple: "/main-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/main-icon.png",
        color: "#5bbad5",
      },
    ],
  },
  twitter: {
    site: "@Afrexa",
    card: "summary_large_image",
    title: "Afrexa | Extension Africa Academy",
    description:
      "Building the largest network of reliable Extension Agents across Africa!",
    images: ["/afrexa_preview.png"],
    creator: "@Hardeygold205",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main id="main-content" className="flex-1 z-40">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
