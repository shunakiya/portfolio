import csusb from "../assets/logos/csusb.png";
import ponder from "../assets/logos/ponder.png";
import open from "../assets/logos/open.png";
import cse4500 from "../assets/logos/cse4500.png";

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
    time: "Fall 2024 - Present",
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
    logo: cse4500,
    title: "Pokédex App",
    location: "California State University, San Bernardino",
    time: "Spring 2025",
    repoPage: "https://github.com/shunakiya/cse4500_hw2",
    desc1:
      "Built a Pokedex web app using HTML, CSS, and JavaScript to fetch and display Pokémon data from the RESTful Pokémon API.",
    desc2:
      "Created region-specific Pokedexes (Kanto, Johto, Hoenn) with custom gradients, type-based color coding, and scalable API integration.",
    desc3:
      "Designed responsive layouts with flexbox and added custom Pokéball icons for enhanced UI.",
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
