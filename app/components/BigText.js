export default function BigText() {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-center pb-4">
      <div className="flex flex-col w-full items-center widthManager">
        <a name="home"></a>
        <div className="flex flex-col justify-start items-start mt-20">
          <h4 className="p-1">Hi, my name is</h4>
          <h1 className="text-[70px]">Maxim Kim.</h1>
          <h1 className="text-[60px] text-light-slate">Software Engineer</h1>
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
    </div>
  );
}
