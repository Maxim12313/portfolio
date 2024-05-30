import ProjectBox from "./ProjectBox"
import Title from "./Title"

import utt from "../images/utt.png"
import pitchPilot from "../images/pitch-pilot.png"
import oldWebsite from "../images/old-website.png"
import aiMultiplayer from "../images/ai-multiplayer.png"
import aiPuzzle from "../images/ai-puzzle.png"

export default function Projects() {
  
  return (
    <div className="flex flex-col w-1/2 items-start mb-10">
      <Title number="2." description="Projects" />
      <ProjectBox 
        name="Ultimate Tic Tac Toe Multiplayer" 
        description="Web game featuring real time multiplayer with chat, AI 
        single player, and same device pass and play for Ultimate Tic Tac Toe."
        image={utt}
        tags={["Javascript", "Socket.io", "React", "Next.js", "Docker", "Google-Cloud", "Tailwind-CSS"]}
        link="https://ultimate-tic-tac-toe-gamma.vercel.app/"
      />
      <ProjectBox 
        name="Pitch Pilot" 
        description="Obstacle game where the player is controlled by singing pitch. Programmed
                     directly into a computer board and connected to input/output devices 
                     with our own device drivers written in a custom class assembly."
        image={pitchPilot}
        tags={["Assembly", "IO-Driver", "Non-Blocking", "Collaborative"]}
        link="https://github.com/engr100/annicec.avisanch.jaydelin.maximk"
      />
      <ProjectBox 
        name="Maxim's Game Hub" 
        description="Collection of my high school web games. Mostly original single player
                     games and some simulations like predator-prey"
        image={oldWebsite}
        tags={["Javascript", "CSS", "HTML", "Express", "REST-API", "2D-Canvas", "Google-Cloud"]}
        link="https://maximkim.com"
      />
      <ProjectBox
        name="AI Multiplayer Game Playing"
        description="Implemented the Minimax algorithm with Alpha-Beta pruning and
                     created heuristics for chess, othello, and connect4 game playing. 
                     Achieved high accuracy and speed, particularly in othello and connect4."
        image={aiMultiplayer}
        tags={["Java", "Algorithm", "AI", "Heuristic"]}
        link="https://github.com/Maxim12313/ai-multiplayer-game-playing"
      />  
      <ProjectBox
        name="AI Puzzle Playing"
        description="Implemented the A* Search, Depth Limited BFS, Iterative Deepening DFS algorithms
                     and created heuristics for the Rubik's Cube and 15 Puzzle game playing. 
                     Consistently found optimal solutions in high speeds."
        image={aiPuzzle}
        tags={["Java", "Algorithm", "AI", "Heuristic"]}
      />
    </div>
  );
}