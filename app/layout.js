import "./globals.css";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Cursor from "./components/Cursor";

import Head from "next/head";

export const metadata = {
  metadataBase: new URL("https://maximkim.dev"),
  title: "Maxim Kim | Portfolio",
  description: "Projects",
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    images: "/twitter-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-color1">
        <Cursor />
        <Navbar />
        <LeftBar />
        <RightBar />
        {children}
      </body>
    </html>
  );
}
