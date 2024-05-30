import Section from "./Section"

export default function Contact() {
  const number = "3.";
  const description = "Contact Me";
  const content = (
    <div className="flex flex-row w-full items-center">
      <div>
        <p>
          I am currently looking for software engineering internships, so I would be
          ecstatic to receive communication about any potential positions. 
        </p>
      </div>
      <div className="p-5 border-2 border-color4 mx-5 min-w-fit rounded-xl">
          <a 
            className="font-mono text-color4 text-xl"
            href="mailto:maximk@umich.edu"
            target="_blank"
          >
          Say Hi
          </a>
      </div>
    </div>

  );

  return (
    <Section 
      number={number}
      description={description}
      content={content}
    />      
  );
}