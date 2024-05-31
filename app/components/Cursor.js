"use client";

import { useEffect, useState } from "react"

export default function Cursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  
  const locationStyle = {
    top: mouseY,
    left: mouseX,
    transform: "translate(-50%,-50%)",
    boxShadow: "0 0 200px red"
  };
  
  const cursor = (  
    <div 
      className="fixed p-10 rounded-full bg-transparent z-20 pointer-events-none 
                  "
      style={locationStyle}
    >
    </div>
  );

  useEffect(() => {
    const mouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  return cursor;
}