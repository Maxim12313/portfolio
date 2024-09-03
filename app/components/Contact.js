"use client";

import { useState } from "react";
import Section from "./Section";
import FormSend from "./EmailForm";

export default function Contact() {
  const [copyVisible, setCopyVisible] = useState(0);

  function handleCopy() {
    navigator.clipboard.writeText("maximk@umich.edu");
    setCopyVisible(1);
    setTimeout(() => setCopyVisible(0), 700);
  }

  const number = "3.";
  const description = "Contact Me";
  const content = (
    <div className="flex flex-row w-full items-center">
      <div>
        <p>
          I am currently looking for software engineering internships, so I
          would be ecstatic to receive communication about any potential
          positions.
          <br />
          <br />
          Please contact me at &nbsp;
          <button
            className={
              "text-color4 tracking-widest underline underline-offset-4"
            }
            onClick={handleCopy}
          >
            maximk@umich.edu
          </button>
          <span
            className="transition-opacity duration-500 text-green-300"
            style={{ opacity: copyVisible }}
          >
            &nbsp; copied!
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full items-center bg-green space-y-16">
      <Section
        number={number}
        description={description}
        content={content}
        name="contact"
      />
      <FormSend />
    </div>
  );
}
