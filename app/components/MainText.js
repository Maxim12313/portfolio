import About from "./About"
import Projects from "./Projects"

export default function MainText() {
  return (
      <div className="w-full flex flex-col items-center">
        <About />
        <Projects />
    </div>
  );
}