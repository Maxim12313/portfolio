import "./globals.css";
import Navbar from "./components/Navbar"
import LeftBar from "./components/LeftBar"
import RightBar from "./components/RightBar"
import Cursor from "./components/Cursor"
import Keyboard from "./components/Keyboard"

export const metadata = {
  title: "Maxim Portfolio",
  description: "Projects",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-color1">
        <Keyboard />
        <Cursor />
        <Navbar />
        <LeftBar />
        <RightBar />
        {children}
      </body>
    </html>
  );
}
