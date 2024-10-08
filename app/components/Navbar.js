export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-10 backdrop-blur-lg blur-color">
      <div className="flex py-8 px-6 w-dvw">
        <div className="flex w-full flex-row justify-between items-center">
          <div>
            <h2>
              <a
                href="."
                className="fullName border-color4 duration-100
                           hover:border-b-2"
              >
                Maxim Kim
              </a>
              <a
                href="."
                className="shortName border-color4 duration-100
                           hover:border-b-2"
              >
                Maxim
              </a>
            </h2>
          </div>
          <div className="flex flex-row navSpacing">
            <a
              href="#home"
              className="hover:text-color4 hover:translate-y-[-4px] duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-color4 hover:translate-y-[-4px] duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-color4 hover:translate-y-[-4px] duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-color4 hover:translate-y-[-4px] duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
