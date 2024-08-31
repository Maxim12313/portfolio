import MainText from "./components/MainText";
import BigText from "./components/BigText";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <BigText />
      <MainText />
      <Footer />
    </div>
  );
}
