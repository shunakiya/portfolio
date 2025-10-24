export interface SkillsList {
  iconType: "component" | "image";
  iconName?: string;
  imageSrc?: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor?: string;
  iconSize?: number;
}

export const skillsListItems: SkillsList[] = [
  {
    iconType: "component",
    iconName: "SiNextdotjs",
    title: "Next.js",
    description: "React Framework",
    bgColor: "bg-white/10",
    iconColor: "fill-white",
    iconSize: 28,
  },
  {
    iconType: "component",
    iconName: "FaReact",
    title: "React",
    description: "JavaScript Library",
    bgColor: "bg-[#58C4DC30]",
    iconColor: "fill-[#58C4DC]",
    iconSize: 28,
  },
  {
    iconType: "component",
    iconName: "SiTypescript",
    title: "Typescript",
    description: "JavaScript but easier",
    bgColor: "bg-[#3178C630]",
    iconColor: "fill-[#3178C6]",
    iconSize: 26,
  },
  {
    iconType: "component",
    iconName: "SiJavascript",
    title: "JavaScript",
    description: "Language",
    bgColor: "bg-[#F7E01830]",
    iconColor: "fill-[#F7E018]",
    iconSize: 26,
  },
  {
    iconType: "component",
    iconName: "RiTailwindCssFill",
    title: "Tailwind CSS",
    description: "CSS Framework",
    bgColor: "bg-[#38BDF830]",
    iconColor: "fill-[#38BDF8]",
    iconSize: 28,
  },
  {
    iconType: "image",
    imageSrc: "/assets/logos/motion.png",
    title: "Motion.dev",
    description: "Animation Library",
    bgColor: "bg-[#FFF31230]",
    iconSize: 24,
  },
  {
    iconType: "image",
    imageSrc: "/assets/logos/figma.svg",
    title: "Figma",
    description: "Design Tool",
    bgColor: "bg-[#8B879A30]",
    iconSize: 36,
  },
  {
    iconType: "image",
    imageSrc: "/assets/logos/python.svg",
    title: "Python",
    description: "Language",
    bgColor: "bg-[#FFD24130]",
    iconSize: 32,
  },
  {
    iconType: "component",
    iconName: "FaGitAlt",
    title: "Git",
    description: "Control System",
    bgColor: "bg-[#F0513330]",
    iconColor: "fill-[#F05133]",
    iconSize: 28,
  },
];
