export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-10 backdrop-blur-lg blur-color">
      <div className="flex p-8 w-dvw">
        <div className="flex w-full flex-row justify-between">
          <div>
            <a href=".">
              <h2>Maxim Kim</h2>
            </a>
          </div>
          <div className="flex flex-row space-x-5">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}