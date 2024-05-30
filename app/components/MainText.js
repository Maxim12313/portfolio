import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

export default function MainText() {
  return (
      <div className="w-full flex flex-col items-center">
        <About />
        <Projects />
        <Contact />
    </div>
  );
}