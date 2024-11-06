import { useState, useEffect } from "react";
import PersonalInfo from "./components/PersonalInfo";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowLeft(true);
    }, 100);

    const secondTimer = setTimeout(() => {
      setShowRight(true);
    }, 205);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  });

  return (
    <div className="bg-gradient-to-r from-[#1c2942] via-[#162033] to-[#111927] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-44 mx-auto min-h-screen max-w-screen-xl px-6 py-8 md:px-12 md:py-20 lg:px-24 lg:py-0">
        {/* left side info */}
        <div className="w-full lg:w-1/4 lg:sticky lg:top-0 lg:h-screen">
          <div className="lg:sticky lg:top-24">
            <div
              className={`transition-all ease-out duration-[800ms] ${
                showLeft
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
            >
              <PersonalInfo />
            </div>
          </div>
        </div>

        {/* right side info */}
        <div className="py-8 lg:py-20 flex flex-col w-full lg:w-3/4">
          <div className="space-y-7">
            <div
              className={`transition-all ease-out duration-1000 ${
                showRight
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <About />
            </div>

            <div
              className={`transition-all ease-out duration-[1050ms] delay-200 ${
                showRight
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <Skills />
            </div>

            <div
              className={`transition-all ease-out duration-[1100ms] delay-[300ms] ${
                showRight
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <Experience />
            </div>

            <div
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
