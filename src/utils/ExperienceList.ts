import lsa from "../assets/logos/lsa.png";
import autumn_valley from "../assets/logos/akiya.png";
import pdhs from "../assets/logos/pdhs.png";

export interface ExperienceList {
  logo: string;
  position: string;
  company: string;
  location: string;
  time: string;
  desc1: string;
  desc2: string;
  desc3: string;
}

export const experienceListItems: ExperienceList[] = [
  {
    logo: autumn_valley,
    position: "Full-Stack Engineer",
    company: "Autumn Valley International, Inc.",
    location: "La Quinta, California · Part-time",
    time: "December 2024 - January 2025",
    desc1:
      "Produced a user-centric company website during a part-time winter break contract, prioritizing engagement and interactive features using Next.js, TypeScript, and Tailwind.",
    desc2:
      "Embedded EmailJS and i18next, expanding global accessibility through streamlined email and multilingual functionality.",
    desc3:
      "Incorporated a dynamic globe feature to visually display all exported locations, enhancing website interactivity",
  },
  {
    logo: lsa,
    position: "Software Developer Intern",
    company: "LOGISTEED Solutions America, Ltd.",
    location: "Torrance, California · On-site",
    time: "June - August 2024",
    desc1:
      "Developed a Full-Stack worklog application using Svelte, Flask, and MySQL for database management, enhancing company-wide productivity and streamlining task management processes.",
    desc2:
      "Integrated Login Authentication, CRUD functionality, and an intuitive UI using Tailwind, elevating UX and data security.",
    desc3:
      "Optimized application performance and scalability through effective system design and implementation, resulting in faster load times and the ability to handle increased user traffic.",
  },
  {
    logo: pdhs,
    position: "STEM Program Teaching Assistant",
    company: "Palm Desert Hight School STEM Program",
    time: "June - July 2018",
    location: "Palm Desert, California · On-site",
    desc1:
      "Instructed elementary and middle school students in programming and robotics by leading STEM activities that foster technological literacy, improve problem-solving skills, and encourage active participation through clear instruction and guided leadership.",
    desc2: "",
    desc3: "",
  },
];
