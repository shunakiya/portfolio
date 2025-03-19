import csusb from "../assets/logos/csusb.png";
import ponder from "../assets/logos/ponder.png";
import open from "../assets/logos/open.png";

export interface ProjectsList {
  logo: string;
  title: string;
  location: string;
  time: string;
  repoPage: string;
  desc1: string;
  desc2: string;
  desc3: string;
}

export const projectsListItems: ProjectsList[] = [
  {
    logo: ponder,
    title: "Ponder (In Progress)",
    location: "San Bernardino, California",
    time: "February 2025 - Present",
    repoPage: "https://ponder-it.vercel.app",
    desc1:
      "A fast, simple and lightweight dictionary app designed with a modern and clean UI.",
    desc2:
      "Integrates Merriam-Webster and GNews APIs for definitions and examples, with plans for web scraping with Cheerio to expand content.",
    desc3:
      "Developed with React, TypeScript, and Tailwind CSS; future iteration aims to migrate to Next.js, and potentially add Supabase or MongoDB.",
  },
  {
    logo: open,
    title: "Secure Access Locking Sytem with NFC and Biometrics",
    location: "California State University, San Bernardino",
    time: "Fall 2024 - Present",
    repoPage: "https://un-lock.vercel.app",
    desc1:
      "Developed a user-friendly web app using Next.js, TypeScript, and Tailwind CSS that interfaces with a Raspberry Pi to control a smart lock.",
    desc2:
      "Engineered the authentication system for the lock using MongoDB to manage user credentials, along with secure API communication between a front-end and a back-end for fingerprint and NFC access control.",
    desc3:
      "Integrated a multi-platform system with a modern web interface using Tailwind CSS, ensuring a seamless and intuitive UX.",
  },
  {
    logo: csusb,
    title: "Tail Recursion",
    location: "California State University, San Bernardino",
    time: "Fall 2023",
    repoPage: "https://github.com/shunakiya/tail-recursion-project",
    desc1:
      "Implemented 12 tail-recursive functions that handle common Java operations.",
    desc2: "Optimized for time complexity (aimed for O(n) or better).",
    desc3:
      "Followed constraints: no non-local variables, no arrays, no non-recursive loops.",
  },
  {
    logo: csusb,
    title: "3 Search Algorithm",
    location: "California State University, San Bernardino",
    time: "Fall 2023",
    repoPage: "https://github.com/shunakiya/three-algorithms",
    desc1: "Implemented graph search algorithms (DFS, BFS, A* Search) in Java.",
    desc2:
      "Utilized object-oriented programming concepts like abstract classes, interfaces, and inheritance.",
    desc3:
      "Solved pathfinding problems using Maze and Sliding Puzzle as examples.",
  },
];
