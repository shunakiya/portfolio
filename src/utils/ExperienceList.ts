import lsa from "../assets/logos/lsa.png";
import autumn_valley from "../assets/logos/akiya.png";

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
    position: "Front-End Developer",
    company: "Autumn Valley International, Inc.",
    location: "La Quinta, California · On-site",
    time: "December 2024 - January 2025",
    desc1:
      "Produced a user-centric company website, prioritizing engagement and interactive features.",
    desc2:
      "Embedded EmailJS and i18next, expanding global accessibility through streamlined email and multilingual functionality.",
    desc3:
      "Incorporated a dynamic globe feature to visually display all exported locations, enhancing website interactivity with React, TypeScript, and Tailwind CSS.",
  },
  {
    logo: lsa,
    position: "Software Developer Intern",
    company: "LOGISTEED Solutions America, Ltd.",
    location: "Torrance, California · On-site",
    time: "June 2024 - August 2024",
    desc1:
      "Engineered a worklog application, enhancing company-wide productivity and streamlining task management processes.",
    desc2:
      "Integrated Login Authentication, CRUD functionality, and designed an intuitive UI using Tailwind CSS, elevating overall UX and data security.",
    desc3:
      "Implemented a Full-Stack system with Svelte for the Front-End, Flask for the Back-End, and MySQL for database management, optimizing application performance and scalability.",
  },
];
