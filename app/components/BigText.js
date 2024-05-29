export default function BigText() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-dvh bg-color2">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-start">
          <h2 className="p-1">Hi, my name is</h2>
          <h1 className="text-[78px]">Maxim Kim.</h1>
          <h1 className="text-[78px] text-light-slate">I code things on the web.</h1>
          <div className="text-wrap w-3/4">
            <p className="my-10">
              I'm an aspring software engineering studying 
              <span className="font-medium text-color4"> Computer Engineering </span>
              at the 
              <span className="font-medium text-color4"> University of Michigan</span>. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}