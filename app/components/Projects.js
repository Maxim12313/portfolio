import Title from "./Title"

export default function Projects() {
  return (
    <div className="flex flex-col w-1/2 items-start mb-10">
      <Title number="2." description="Projects" />
      <p>
        Hi there! My name is Maxim and I enjoy coding random things that catch my interest,
        which I occasionally share on the internet. I began coding in 
        <highlight> 2019</highlight> and have 
        since tried my hand at array of different topics. I started with game development,
        experimented with AI, visited web development, dabbled in cybersecurity, and tried
        some competitive programming. I am currently re exploring 
        <highlight> web development </highlight> deeper while honing my algorithmic skills 
        through regular <highlight> competitive programming</highlight> contests.
      </p>
    </div>
  );
}