import Section from "./Section";

export default function About() {
  const number = "1. ";
  const description = "About Me";
  const content = (
    <p>
      I program primarily in <highlight>C/C++</highlight> and
      <highlight> Python</highlight> and enjoy work on large performant
      <highlight> systems</highlight> and highly
      <highlight> algorithmic</highlight> code.
      <br />
      <br />I enjoy <highlight>Game Making</highlight>, particularly simple,
      fast paced games with infinite difficulty scaling
      <br />
      <br />I love <highlight>Competitive Programming</highlight> and compete
      for my university in the <highlight>ICPC</highlight>
    </p>
  );

  return (
    <Section
      number={number}
      description={description}
      content={content}
      name="about"
    />
  );
}
