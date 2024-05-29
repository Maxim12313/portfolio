import ProjectBox from "./ProjectBox"
import Title from "./Title"
import utt from "../images/utt.png"

export default function Projects() {
  
  return (
    <div className="flex flex-col w-1/2 items-start mb-10">
      <Title number="2." description="Projects" />
      <ProjectBox 
        name="Ultimate Tic Tac Toe Multiplayer" 
        description="Web Game featuring real time multiplayer with chat, AI 
        single player, and same device pass and play for Ultimate Tic Tac Toe."
        image={utt}
        tags={["Socket.io", "React", "Next.js", "Docker", "Google-Cloud", "Tailwind-CSS"]}
      />
    </div>
  );
}