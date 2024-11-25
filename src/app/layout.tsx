import { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import "./globals.css";
import FooterSection from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AndikaX",
  description: "Pioneering the Future of Robotics and AI Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-gray-900 via-gray-800 to-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="">{children}</main>
        /<FooterSection />
      </body>
    </html>
  );
}
