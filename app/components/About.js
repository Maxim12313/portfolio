import Section from "./Section"

export default function About() {
  const number = "1.";
  const description = "About Me";
  const content = (
    <p>
      Hi there! My name is Maxim and I enjoy coding random things that catch my
      interest, which I occasionally share on the internet.
      <br /><br />
      I began coding in
      <highlight> 2019</highlight> and have since tried my hand at an array of
      different topics. I started with game development, experimented with AI,
      visited web development, dabbled in cybersecurity, and tried some
      competitive programming.
      <br /><br />
      I am currently re exploring
      <highlight> web development </highlight> deeper while honing my
      algorithmic skills through regular{" "}
      <highlight> competitive programming</highlight> contests.
    </p>    
  );

  return (
    <Section 
      number={number}
      description={description}
      content={content}
    />      
  );
}