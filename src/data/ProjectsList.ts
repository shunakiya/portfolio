export interface ProjectsList {
  logo: string;
  title: string;
  location: string;
  time: string;
  repoPage: string;
  desc: string;
}

export const projectsListItems: ProjectsList[] = [
  {
    logo: "/assets/logos/waypoint.png",
    title: "Waypoint | AI Itinerary Planner",
    location: "La Quinta, California",
    time: "Jun 2025 - Present",
    repoPage: "https://waypoint-ai.app",
    desc: " Spearheading an AI travel automation tool with Next.js, TypeScript, Tailwind, Supabase, and Stripe that generates personalized itineraries using Perplexity and Google APIs, automatically scheduling optimized trips to users' Google Calendars.",
  },
  {
    logo: "/assets/logos/open.png",
    title: "Secure Access Locking Sytem with NFC & Biometrics",
    location: "California State University, San Bernardino",
    time: "Aug 2024 - May 2025",
    repoPage: "https://un-lock.vercel.app",
    desc: "  Deployed a Next.js web app with TypeScript and Tailwind interfacing with Raspberry Pi to control a custom smart lock, engineering MongoDB authentication and secure RESTful APIs for fingerprint/NFC access control.",
  },
  {
    logo: "/assets/logos/ponder.png",
    title: "Ponder",
    location: "San Bernardino, California",
    time: "Feb 2025 - May 2025",
    repoPage: "https://ponder-it.vercel.app",
    desc: "Built a modern Next.js app with TypeScript and Tailwind, integrating Merriam-Webster and GNews APIs plus Cheerio for definitions, news, and web scraping with responsive, accessible design.",
  },
];
