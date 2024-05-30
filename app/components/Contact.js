import Section from "./Section"

export default function Contact() {
  const number = "3.";
  const description = "Contact Me";
  const content = (
    <p>
      stuff
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