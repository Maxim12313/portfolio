import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

export default function EmailForm() {
  const [statusMsg, setStatusMsg] = useState(null);
  const form = useRef();

  async function handleSubmit(e) {
    const a = form.current;
    e.preventDefault();
    if (!a.checkValidity()) {
      setStatusMsg(null);
      a.reportValidity();
      return;
    }

    try {
      // please do not abuse key
      console.log("entered");
      const response = await emailjs.sendForm(
        "service_fc5dlig",
        "template_73fr7et",
        a.current,
        {
          publicKey: "-U8_DjZ-EiLEjJJHj",
          // limitRate: {
          //   throttle: 3000,
          // },
        },
      );
      console.log("happened");
      const rect = document
        .getElementById("confetti-button")
        .getBoundingClientRect();
      confetti({
        particleCount: 150,
        spread: 60,
        origin: {
          x: (rect.x + rect.width / 2) / window.innerWidth,
          y: rect.y / window.innerHeight,
        },
      });
      setStatusMsg("Success!");
      a.reset();
    } catch (error) {
      setStatusMsg(error.text);
    }
  }

  const statusColor = statusMsg == "Success!" ? "LightGreen" : "IndianRed";

  return (
    <div className="flex flex-col widthManager p-2">
      <form
        ref={form}
        className="flex flex-col p-6 space-y-5 w-full items-start border-slate border-2 rounded-xl"
        id="email-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          className="p-2 w-full"
          type="text"
          name="name"
          id="name"
          placeholder="Maxim Kim"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="p-2 w-full"
          type="email"
          name="email"
          id="email"
          placeholder="maximk@umich.edu"
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          rows={5}
          className="p-2 w-full"
          name="content"
          id="content"
          placeholder="Hiiiii"
          required
        />
        <p className="inline-block" style={{ color: statusColor }}>
          {statusMsg || <>&nbsp;</>}
        </p>
        <div className="flex flex-col w-full justify-center items-center">
          <button
            id="confetti-button"
            className="p-5 border-2 border-color4 rounded-xl
                   font-mono text-color4 text-md flex-wrap btn font-bold"
            onClick={handleSubmit}
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}
