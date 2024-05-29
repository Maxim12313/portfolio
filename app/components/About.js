import Image from "next/image"
import Title from "./Title"
import spaceship from './spaceship.png'

export default function About() {
  return (
    <div className="flex flex-row w-1/2 mb-10">
      <div className="flex flex-col items-start">
        <Title number="1." description="About Me" />
        <div className="flex flex-row items-center space-x-5">
          <p>
            Hi there! My name is Maxim and I enjoy coding random things that catch my interest,
            which I occasionally share on the internet. 
            <br />
            <br />
            I began coding in 
            <highlight> 2019</highlight> and have 
            since tried my hand at array of different topics. I started with game development,
            experimented with AI, visited web development, dabbled in cybersecurity, and tried
            some competitive programming. 
            <br />
            <br />
            I am currently re exploring 
            <highlight> web development </highlight> deeper while honing my algorithmic skills 
            through regular <highlight> competitive programming</highlight> contests.
          </p>
          {/* <Image 
            src={spaceship}
            width={200}
            height={200}
            alt="avatar photo"
          /> */}
        </div>
      </div>
    </div>
  );
}