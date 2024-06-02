"use client";

import { useEffect } from "react"

export default function Keyboard() {
  useEffect(() => {
    const amount = 50;
    const onKeyDown = (e) => {
      const key = e.key;
      if (key == 'w') {
        window.scrollBy({
          top: -amount,
          behavior: "instant"
        });
      }
      else if (key == 's') {
        window.scrollBy({
          top: amount,
          behavior: "instant"
        });
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    }

  }, []);

  return (
    ""
  );
}