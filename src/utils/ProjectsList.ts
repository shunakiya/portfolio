import csusb from "../assets/logos/csusb.png";
import ponder from "../assets/logos/ponder.png";
import open from "../assets/logos/open.png";
import cse4500 from "../assets/logos/cse4500.png";
import pdhs from "../assets/logos/pdhs.png";

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
    logo: pdhs,
    title: "Summer Camp Mentor",
    location: "Palm Desert, California",
    time: "June - July 2018",
    repoPage: "/",
    desc1:
      "Instructed elementary school students in programming and robotics fundamentals, promoting technological literacy and problem-solving skills at an entry-level.",
    desc2:
      "Facilitated engaging and interactive learning experiences, utilizing effective communication to maintain student interest and promote active participation in STEM activities.",
    desc3:
      "Coordinated and implemented small-scale educational events, enhancing students' understanding of robotics through hands-on demonstrations and collaborative projects.",
  },
];
