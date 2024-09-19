import Section from "./Section";

export default function About() {
  const number = "1. ";
  const description = "About Me";
  const content = (
    <p>
      In my free time, I enjoy working on personal projects and learning new
      tools. I program comfortably in C/C++, Javascript, Python, and
      occasionally Java.
      <br />
      <br />I work on a variety of things depending on what catches my interest,
      but my skillset is best suited to{" "}
      <highlight> Full-Stack Web Development </highlight>
      <br />
      <br />I also enjoy <highlight>Competitive Programming</highlight> on the
      side and have achieved top 5% Knight on LeetCode and Specialist on
      Codeforces
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
