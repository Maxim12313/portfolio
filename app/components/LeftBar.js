"use client";

import { useState, useEffect } from "react"

export default function LeftBar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    
    const handleScroll = () => {
      const sections = document.querySelectorAll("a[name]");
      const currY = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const y = section.offsetTop;
        if (y < currY) { //last where we're ahead of
          setActive("#" + section.getAttribute("name"));
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);
  
  const links = ["#home", "#about", "#projects", "#contact"];
  const linkElements = links.map((link, key) => {
    const width = link == active ? "w-[125%]" : "w-[100%]";
    console.log(link + " " + active);
    return (
      <a key={key} href={link} className={`bar-container ${width}`}>
        <span className="bar"></span>
      </a>
    );
  });

  return (
    <div className="fixed left-16 bottom-0 min-h-[60%] flex flex-col items-center justify-start
                    vertical-line w-20 ml-0 ">
      { linkElements }
    </div>
  );
}