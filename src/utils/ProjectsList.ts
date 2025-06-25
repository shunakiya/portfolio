import ponder from "../assets/logos/ponder.png";
import open from "../assets/logos/open.png";
import waypoint from "../assets/logos/waypoint.png";

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
    logo: waypoint,
    title: "Waypoint | AI Itinerary Planner",
    location: "La Quinta, California",
    time: "Jun 2025 - Present",
    repoPage: "https://waypoint-ai.vercel.app",
    desc1:
      "Spearheading an AI-powered travel automation tool using Next.js, TypeScript, Tailwind, Supabase, Stripe, Perplexity API, and Google API to automatically generate and schedule personalized trip itineraries.",
    desc2:
      "Architecting secure user authentication and data management with Supabase and Google Sign-In, while integrating Stripe for seamless payment processing and Perplexity API for real-time research on destinations, hours, prices, and local insights",
    desc3:
      "Automating the creation of calendar agenda directly on users’ Google Calendars, intelligently factoring in budget, downtime, crowds, proximity, and must-see prioritization to deliver stress-free, optimized travel experiences.",
  },
  {
    logo: open,
    title: "Secure Access Locking Sytem with NFC and Biometrics",
    location: "California State University, San Bernardino",
    time: "Aug 2024 - May 2025",
    repoPage: "https://un-lock.vercel.app",
    desc1:
      "Deployed a user-friendly web app using Next.js, TypeScript, and Tailwind that interfaces with a Raspberry Pi to control a custom-made smart lock, collaborating with a multidisciplinary team using Agile methodologies for iterative development.",
    desc2:
      "Engineered the authentication system for the lock using MongoDB to manage user credentials, along with secure RESTful API communication between a front-end and a back-end for fingerprint and NFC access control.",
    desc3:
      "Integrated a multi-platform system with a modern web interface using Tailwind CSS, ensuring a seamless and intuitive UX.",
  },
  {
    logo: ponder,
    title: "Ponder",
    location: "San Bernardino, California",
    time: "Feb 2025 - May 2025",
    repoPage: "https://ponder-it.vercel.app",
    desc1:
      "Developed a modern, clean, and user-friendly interface using Next.js, TypeScript, and Tailwind, elevating user experience through intuitive design principles.",
    desc2:
      "Connected Merriam-Webster, GNews APIs and Cheerio to deliver accurate definitions, examples, and efficient web scraping, providing comprehensive content.",
    desc3:
      "Enhanced usability and accessibility by implementing responsive design and best practices, ensuring the app delivers a seamless experience across devices and for all users.",
  },
];
