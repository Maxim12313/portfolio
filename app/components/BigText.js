export default function BigText() {
  return (
    <div className="flex flex-col min-w-dvw min-h-dvh items-center mx-5 mt-52">
      <div className="flex flex-col justify-start items-start">
        <h4 className="p-1">Hi, my name is</h4>
        <h1 className="text-[78px]">Maxim Kim.</h1>
        <h1 className="text-[78px] text-light-slate">I code things on the web.</h1>
        <div className="text-wrap w-3/4">
          <p className="my-10">
            I am an aspiring software engineer studying 
            <highlight> Computer Engineering </highlight>
            at the 
            <highlight> University of Michigan</highlight>.
          </p>
        </div>
      </div>
    </div>
  );
}