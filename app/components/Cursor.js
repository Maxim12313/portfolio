"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [showing, setShowing] = useState(false);

  const locationStyle = {
    top: mouseY,
    left: mouseX,
    transform: "translate(-50%,-50%)",
  };

  const cursor = (
    <div className>
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
      setShowing(true);
    };

    const mouseOut = (e) => {
      setShowing(false);
    };

    const mouseClick = (e) => {
      const div = document.createElement("div");
      div.className = "clickEffect";
      div.style.top = e.clientY + "px";
      div.style.left = e.clientX + "px";
      document.body.append(div);
      div.addEventListener("animationend", () => {
        document.body.removeChild(div);
      });
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseout", mouseOut);
    window.addEventListener("click", mouseClick);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseout", mouseOut);
      window.removeEventListener("click", mouseClick);
    };
  }, []);

  return showing ? cursor : "";
}
