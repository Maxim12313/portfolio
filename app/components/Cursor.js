"use client";

import { useEffect, useState } from "react"

export default function Cursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  
  const locationStyle = {
    top: mouseY,
    left: mouseX,
    transform: "translate(-50%,-50%)",
  };
  
  
  const cursor = (  
    <div>
      <div 
        className="fixed p-5 border-2 border-white rounded-full z-20 pointer-events-none
                   "
        style={locationStyle}
      />
      <div 
        className="fixed p-1 bg-white rounded-full z-20 pointer-events-none"
        style={locationStyle}
      />

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