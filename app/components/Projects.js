import ProjectBox from "./ProjectBox"
import Title from "./Title"
import utt from "../images/utt.png"
import pitchPilot from "../images/pitch-pilot.png"

export default function Projects() {
  
  return (
    <div className="flex flex-col w-1/2 items-start mb-10">
      <Title number="2." description="Projects" />
      <ProjectBox 
        name="Ultimate Tic Tac Toe Multiplayer" 
        description="Web game featuring real time multiplayer with chat, AI 
        single player, and same device pass and play for Ultimate Tic Tac Toe."
        image={utt}
        tags={["Socket.io", "React", "Next.js", "Docker", "Google-Cloud", "Tailwind-CSS"]}
        link="https://ultimate-tic-tac-toe-gamma.vercel.app/"
      />
      <ProjectBox 
        name="Pitch Pilot" 
        description="Obstacle game where the player is controlled by singing pitch. Programmed
                     directly into a computer board and connected to input/output devices 
                     with our own device drivers written in a custom class assembly"
        image={pitchPilot}
        tags={["Assembly", "IO-Driver", "Non-Blocking", "Collaborative"]}
        link="https://github.com/engr100/annicec.avisanch.jaydelin.maximk"
      />
    </div>
  );
}