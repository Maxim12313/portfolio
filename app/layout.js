import "./globals.css";
import Navbar from "./components/Navbar"
import LeftBar from "./components/LeftBar"
import RightBar from "./components/RightBar"

export const metadata = {
  title: "Maxim Portfolio",
  description: "Projects",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-color1">
        <Navbar />
        <LeftBar />
        <RightBar />
        {children}
      </body>
    </html>
  );
}
