import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from "next/font/google"
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Grahams Of Cheshire"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-600 text-slate-100 container   mx-auto p-4`}
      >
        {children}
      </body>
    </html>
  );
}
