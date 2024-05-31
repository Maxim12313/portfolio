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
          <br /><br />
          Please contact me at 
          <a 
            className="text-color4 text-15px p-3 duration-200 hover:text-[17px]"
            href="mailto:maximk@umich.edu"
            target="_blank"
          >
            maximk@umich.edu
          </a>
        </p>
      </div>
      <a
        className="p-6 border-2 border-color4 mx-5 min-w-fit rounded-xl
                   font-mono text-color4 text-xl flex-wrap btn font-bold"
        href="mailto:maximk@umich.edu"
        target="_blank"
      >
        Say Hi
      </a>
    </div>

  );

  return (
      <Section 
        number={number}
        description={description}
        content={content}
        name="contact"
      />      
  );
}