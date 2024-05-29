import "./globals.css";
import Navbar from "./components/Navbar"
export const metadata = {
  title: "Maxim Portfolio",
  description: "Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-color1">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
