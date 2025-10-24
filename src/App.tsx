import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import PersonalInfo from "./components/PersonalInfo";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ScrollReveal from "./components/ScrollReveal";
import cursor from "/assets/cursor.png";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [newMouseCoordinate, setCoord] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const handleGlobalMovement = (e: MouseEvent) => {
      setCoord([e.clientX, e.clientY]);
    };

    window.addEventListener("mousemove", handleGlobalMovement);
    return () => window.removeEventListener("mousemove", handleGlobalMovement);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 4;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#1c2942] via-[#162033] to-[#111927]">
      <Analytics />
      <SpeedInsights />

      <div
        className="fixed pointer-events-none sm:flex md:flex hidden select-none"
        style={{
          left: `${newMouseCoordinate[0]}px`,
          top: `${newMouseCoordinate[1]}px`,
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
        }}
      >
        <img src={cursor} className="w-full h-full" alt="Custom cursor" />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-40 mx-auto min-h-screen max-w-screen-xl px-5 py-8 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="w-full lg:w-1/4 lg:sticky lg:top-0 lg:h-screen sm:h-fit">
          <div className="lg:sticky lg:top-24">
            <PersonalInfo activeSection={activeSection} />
          </div>
        </div>

        <div className="py-0 lg:py-20 flex flex-col w-full lg:w-3/4 will-change-transform">
          <div className="space-y-8 lg:space-y-12 md:space-y-12">
            <ScrollReveal>
              <div id="about">
                <About />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div id="skills">
                <Skills />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div id="experience">
                <Experience />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div id="projects">
                <Projects />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
