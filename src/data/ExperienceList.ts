
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
    logo: "/assets/logos/mermory.png",
    position: "Front-End Developer Intern",
    company: "mermory",
    location: "Remote · Internship",
    time: "July 2025 - Present",
    desc: "Facilitated the landing page by implementing custom animations with Motion and Tailwind, refining UI/UX through targeted styling updates, and building a custom component library for the company.",
  },
  {
    logo: "/assets/logos/akiya.png",
    position: "Front-End Developer",
    company: "Autumn Valley International, Inc.",
    location: "La Quinta, California · Part-time",
    time: "December 2024 - February 2025",
    desc: "Designed and developed a user-centric website using Next.js, TypeScript, and Tailwind during a winter contract. Integrated multilingual support and interactivity to improve engagement and global accessibility.",
  },
  {
    logo: "/assets/logos/lsa.png",
    position: "Software Developer Intern",
    company: "LOGISTEED Solutions America, Ltd.",
    location: "Torrance, California · On-site",
    time: "June - August 2024",
    desc: "Built a full-stack worklog application with Svelte, Flask, and MySQL to streamline task management and improve team productivity. Focused on clean UI, secure authentication, and optimized performance.",
  },
  {
    logo: "/assets/logos/pdhs.png",
    position: "STEM Program Teaching Assistant",
    company: "Palm Desert Hight School STEM Program",
    time: "June - July 2018",
    location: "Palm Desert, California · On-site",
    desc: "Led programming and robotics sessions for elementary and middle school students as a STEM teaching assistant. Helped boost student engagement and foster interest in technology through hands-on learning.",
  },
];
