import "./globals.css";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Cursor from "./components/Cursor";

const isProduction = process.env.NODE_ENV == "production";
const url = isProduction ? "https://maximkim.dev" : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(url),
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
