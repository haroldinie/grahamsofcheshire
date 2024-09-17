import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import the Inter font from Google Fonts
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Grahams Of Cheshire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-[#231f20] text-[#EAEAEA]`}>

        <div id="container" className="flex flex-col flex-grow">
          <Header />
          <main className="flex-grow">{children}</main> 
          <Footer />
        </div>
      </body>
    </html>
  );
}