import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import PersonalInfo from "./components/PersonalInfo";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import cursor from "./assets/cursor.png";

export default function App() {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [newMouseCoordinate, setCoord] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const firstTimer = setTimeout(() => setShowLeft(true), 150);
    const secondTimer = setTimeout(() => setShowRight(true), 255);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

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
      const scrollPosition = window.scrollY + window.innerHeight / 8;

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
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-44 mx-auto min-h-screen max-w-screen-xl px-6 py-8 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="w-full lg:w-1/4 lg:sticky lg:top-0 lg:h-screen sm:h-fit">
          <div className="lg:sticky lg:top-24">
            <div
              className={`transition-all ease-ou  t duration-[800ms] ${
                showLeft
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
            >
              <PersonalInfo activeSection={activeSection} />
            </div>
          </div>
        </div>

        <div className="py-8 lg:py-20 flex flex-col w-full lg:w-3/4">
          <div className="space-y-16">
            <div
              id="about"
              className={`transition-all ease-out duration-1000 ${
                showRight
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <About />
            </div>

            <div
              id="skills"
              className={`transition-all ease-out duration-[1050ms] delay-200 ${
                showRight
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <Skills />
            </div>

            <div
              id="experience"
              className={`transition-all ease-out duration-[1100ms] delay-[300ms] ${
                showRight
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <Experience />
            </div>

            <div
              id="projects"
              className={`transition-all ease-out duration-[1150ms] delay-[400ms] ${
                showRight
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
