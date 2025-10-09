import lsa from "../assets/logos/lsa.png";
import autumn_valley from "../assets/logos/akiya.png";
import pdhs from "../assets/logos/pdhs.png";
import mermory from "../assets/logos/mermory.png";

export interface ExperienceList {
  logo: string;
  position: string;
  company: string;
  location: string;
  time: string;
  desc: string;
}

export const experienceListItems: ExperienceList[] = [
  {
    logo: mermory,
    position: "Front-End Developer Intern",
    company: "mermory",
    location: "Remote · Internship",
    time: "July 2025 - Present",
    desc: "Facilitated the landing page by implementing custom animations with Motion and Tailwind, refining UI/UX through targeted styling updates, and building a custom component library for the company.",
  },
  {
    logo: autumn_valley,
    position: "Front-End Developer",
    company: "Autumn Valley International, Inc.",
    location: "La Quinta, California · Part-time",
    time: "December 2024 - February 2025",
    desc: "Designed and developed a user-centric website using Next.js, TypeScript, and Tailwind during a winter contract. Integrated multilingual support and interactivity to improve engagement and global accessibility.",
  },
  {
    logo: lsa,
    position: "Software Developer Intern",
    company: "LOGISTEED Solutions America, Ltd.",
    location: "Torrance, California · On-site",
    time: "June - August 2024",
    desc: "Built a full-stack worklog application with Svelte, Flask, and MySQL to streamline task management and improve team productivity. Focused on clean UI, secure authentication, and optimized performance.",
  },
  {
    logo: pdhs,
    position: "STEM Program Teaching Assistant",
    company: "Palm Desert Hight School STEM Program",
    time: "June - July 2018",
    location: "Palm Desert, California · On-site",
    desc: "Led programming and robotics sessions for elementary and middle school students as a STEM teaching assistant. Helped boost student engagement and foster interest in technology through hands-on learning.",
  },
];
