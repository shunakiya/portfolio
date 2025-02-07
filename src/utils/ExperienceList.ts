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
      "Developed a company website with a focus on user experience and interactivity.",
    desc2:
      "Integrated EmailJS for seamless email functionality, and i18next for multilingual support,",
    desc3:
      "Utilized React as Front-end, TypeScript for developer productivity, and Tailwind CSS for styling.",
  },
  {
    logo: lsa,
    position: "Software Developer Intern",
    company: "LOGISTEED Solutions America, Ltd.",
    location: "Torrance, California · On-site",
    time: "June 2024 - August 2024",
    desc1: "Developed a worklog application for the company.",
    desc2:
      "Implemented Login Authentication, CRUD functionality, and a user-friendly interface designed with Tailwind.",
    desc3:
      "Utilized Svelte as Front-end, Flask as Back-end, and MySQL for database.",
  },
];
