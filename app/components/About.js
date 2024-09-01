import Section from "./Section";

export default function About() {
  const number = "1. ";
  const description = "About Me";
  const content = (
    <p>
      Hi there! My name is Maxim and I enjoy coding random things that catch my
      interest, which I occasionally share on the internet.
      <br />
      <br />I began coding in
      <highlight> 2019</highlight> and have focused in{" "}
      <highlight> Full-Stack Web Development </highlight>
      <br />
      <br />I also enjoy <highlight>competitive programming</highlight> and
      practice on platforms like LeetCode and Codeforce
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
