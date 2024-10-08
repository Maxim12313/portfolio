import ProjectBox from "./ProjectBox";
import Title from "./Title";

import typeChallenger from "../images/type-challenger.png";
import utt from "../images/utt.png";
import pitchPilot from "../images/pitch-pilot.png";
import oldWebsite from "../images/old-website.png";
import aiMultiplayer from "../images/ai-multiplayer.png";
import aiPuzzle from "../images/ai-puzzle.png";
import passwordManager from "../images/password-manager.png";
import rsaDixon from "../images/RSA-Dixon.png";

export default function Projects() {
  return (
    <div className="flex flex-col items-start widthManager">
      <Title number="2. " description="Projects " name="projects" />
      <ProjectBox
        name="Type Challenger"
        description="Reactive Typing Game"
        image={typeChallenger}
        tags={[
          "Javascript",
          "SQLite",
          "Express",
          "React",
          "Next.js",
          "Docker",
          "Google-Cloud",
          "Tailwind-CSS",
        ]}
        link="https://type-challenger-frontend.vercel.app/singleplayer"
        date="July 2024"
      />
      <ProjectBox
        name="Ultimate Tic Tac Toe Multiplayer"
        description="Web game featuring real time multiplayer with chat and same device pass and play 
				for Ultimate Tic Tac Toe (some bugs)"
        image={utt}
        tags={[
          "Javascript",
          "Socket.io",
          "React",
          "Next.js",
          "Docker",
          "Google-Cloud",
          "Tailwind-CSS",
        ]}
        link="https://ultimate-tic-tac-toe-gamma.vercel.app/"
        date="May 2024"
      />
      <ProjectBox
        name="Pitch Pilot"
        description="Obstacle game where the player is controlled by singing pitch. Programmed
                     directly into a computer board and connected to input/output devices 
                     with our own device drivers written in a custom class assembly"
        image={pitchPilot}
        tags={["Assembly", "IO-Driver", "Non-Blocking", "Collaborative"]}
        link="https://github.com/engr100/annicec.avisanch.jaydelin.maximk"
        date="Mar 2024"
      />
      <ProjectBox
        name="Maxim's Game Hub"
        description="Collection of my high school web games. Mostly original single player
                     games and some simulations like predator-prey"
        image={oldWebsite}
        tags={[
          "Javascript",
          "CSS",
          "HTML",
          "Express",
          "REST-API",
          "2D-Canvas",
          "Google-Cloud",
        ]}
        link="https://maximkim.com"
        date="Sep 2022"
      />
      <ProjectBox
        name="AI Multiplayer Game Playing"
        description="Implemented the Minimax algorithm with Alpha-Beta pruning and
                     created heuristics for chess, othello, and connect4 game playing. 
                     Achieved high accuracy and speed, particularly in othello and connect4."
        image={aiMultiplayer}
        tags={["Java", "Algorithm", "AI", "Heuristic"]}
        link="https://github.com/Maxim12313/ai-multiplayer-game-playing"
        date="Nov 2023"
      />
      <ProjectBox
        name="AI Puzzle Playing"
        description="Implemented the A* Search, Depth Limited BFS, Iterative Deepening DFS algorithms
                     and created heuristics for the Rubik's Cube and 15 Puzzle game playing. 
                     Consistently found optimal solutions in high speeds."
        image={aiPuzzle}
        tags={["Java", "Algorithm", "AI", "Heuristic"]}
        link="https://github.com/Maxim12313/ai-puzzle-solver"
        date="Aug 2023"
      />
      <ProjectBox
        name="Password Manager"
        description="Programmed a password manager with encryption for confidentiality, a custom 
	  				 file management protocol for efficiency, and checksums to ensure integrity of data"
        tags={[
          "Java",
          "Encryption",
          "Hashing",
          "UI",
          "Checksum",
          "File Management",
        ]}
        link="https://github.com/Maxim12313/password-manager"
        image={passwordManager}
        date="Jul 2023"
      />
      <ProjectBox
        name="RSA Encryption and Dixon Factoring"
        description="Implemented the RSA encryption algorithm, as well as its vulnerability, Dixon Factoring, 
	  				which could feasably crack RSA keys up to 128 bits long"
        tags={["Java", "Encryption", "Algorithm", "Math"]}
        link="https://github.com/Maxim12313/RSA-Encryption-And-Dixon-Factoring"
        image={rsaDixon}
        date="May 2023"
      />
    </div>
  );
}
