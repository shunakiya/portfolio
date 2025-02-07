import csusb from "../assets/logos/csusb.png";

export interface ProjectsList {
  logo: string;
  title: string;
  time: string;
  repoPage: string;
  desc1: string;
  desc2: string;
  desc3: string;
}

export const projectsListItems: ProjectsList[] = [
  {
    logo: csusb,
    title: "Secure Access Locking Sytem with NFC and Biometrics",
    time: "Fall 2024 - Spring 2025",
    repoPage: "https://github.com/shunakiya/salsnb",
    desc1:
      "Developed a smart-lock with fingerprint sensor, NFC, and key access.",
    desc2:
      "Integrated remote control, solenoid-powered lock, fingerprint reader, and smartphone NFC system.",
    desc3:
      "Used a Raspberry Pi to host a Flask backend server, with data fetched by a React frontend designed with Tailwind.",
  },
  {
    logo: csusb,
    title: "Tail Recursion",
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
    time: "Fall 2023",
    repoPage: "https://github.com/shunakiya/three-algorithms",
    desc1: "Implemented graph search algorithms (DFS, BFS, A* Search) in Java.",
    desc2:
      "Utilized object-oriented programming concepts like abstract classes, interfaces, and inheritance.",
    desc3:
      "Solved pathfinding problems using Maze and Sliding Puzzle as examples.",
  },
];
