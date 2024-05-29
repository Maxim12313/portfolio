export default function Navbar() {
  return (
    <div className="fixed top-0 left-0">
      <div className="flex p-8 w-dvw bg-color1">
        <div className="flex w-full flex-row justify-between">
          <div>
            <h1>Maxim Kim</h1>
          </div>
          <div className="flex flex-row space-x-5">
            <p>About</p>
            <p>Work</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}