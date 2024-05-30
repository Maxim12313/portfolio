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
      different topics. I originally started with game development, 
      then visited web development, experimented with AI, dabbled in cybersecurity, and
      then tried some competitive programming.
      <br /><br />
      I am currently diving back into
      <highlight> web development </highlight> while honing my
      algorithmic skills through regular
      <highlight> competitive programming </highlight> contests.
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