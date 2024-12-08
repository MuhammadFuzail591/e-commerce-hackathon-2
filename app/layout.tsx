import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat, Poppins } from 'next/font/google';


// Use Montserrat font with Latin subset
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700']
});

// Use Poppins font with Latin subset
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

export const metadata: Metadata = {
  title: "E-Commerce Hackathon",
  description: "Build and deployed by Muhammad Fuzail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${poppins.className}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
