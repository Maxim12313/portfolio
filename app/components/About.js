import Title from "./Title"

export default function About() {
  return (
    <div className="flex flex-col w-1/2 items-start">
      <Title number="1." description="About Me" />
      <p>
        Hi there! My name is Maxim and I enjoy coding random things that catch my interest 
        and I occasionally share them on the internet. 
      </p>
      <span></span>
    </div>
  );
}