export default function BigText() {
  return (
    <div className="flex flex-col w-dvw h-dvh">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-start">
          <h3 className="p-1">Hi, my name is</h3>
          <h1 className="text-[78px]">Maxim Kim.</h1>
          <h1 className="text-[78px] text-light-slate">I code things on the web.</h1>
          <div className="text-wrap w-3/4">
            <p className="my-10">
              I am an aspring software engineering studying 
              <highlight> Computer Engineering </highlight>
              at the 
              <highlight> University of Michigan</highlight>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}