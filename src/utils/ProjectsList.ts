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
    logo: open,
    title: "Secure Access Locking Sytem with NFC and Biometrics",
    location: "California State University, San Bernardino",
    time: "Fall 2024 - Spring 2025",
    repoPage: "https://un-lock.vercel.app",
    desc1:
      "Deployed a user-friendly web app using Next.js, Typescript, and Tailwind CSS that interfaces with a Raspberry Pi to control a smart lock.",
    desc2:
      "Engineered the authentication system for the lock using MongoDB to manage user credentials, along with secure API communication between a front-end and a back-end for fingerprint and NFC access control.",
    desc3:
      "Integrated a multi-platform system with a modern web interface using Tailwind CSS, ensuring a seamless and intuitive UX.",
  },
  {
    logo: ponder,
    title: "Ponder",
    location: "San Bernardino, California",
    time: "February 2025 - Present",
    repoPage: "https://ponder-it.vercel.app",
    desc1:
      "Crafted a modern, clean, and user-friendly interface, elevating user experience through intuitive design principles.",
    desc2:
      "Connected Merriam-Webster, GNews APIs and Cheerio to deliver accurate definitions, examples, and efficient web scraping, providing comprehensive content.",
    desc3:
      "Constructed using Next.js, TypeScript, and Tailwind CSS; future iterations aim for scalability with potential MongoDB integration to enhance data management.",
  },
  {
    logo: csusb,
    title: "3 Search Algorithm",
    location: "California State University, San Bernardino",
    time: "Fall 2023",
    repoPage: "https://github.com/shunakiya/three-algorithms",
    desc1: 
      "Designed graph search algorithms (DFS, BFS, A* Search) in Java to enable efficient traversal and pathfinding solutions.",
    desc2:
      "Applied object-oriented programming principles like abstract classes, interfaces, and inheritance to structure scalable and modular code architecture.",
    desc3:
      "Developed pathfinding solutions for Maze and Sliding Puzzle environments to demonstrate practical applications of search algorithms in problem-solving.",
  },
];
