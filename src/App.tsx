import PersonalInfo from "./components/PersonalInfo.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-[#1c2942] via-[#162033] to-[#111927] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-44 mx-auto min-h-screen max-w-screen-xl px-6 py-8 md:px-12 md:py-20 lg:px-24 lg:py-0">
        {/* left side info */}
        <div className="w-full lg:w-1/4 lg:sticky lg:top-0 lg:h-screen">
          <div className="lg:sticky lg:top-24">
            <PersonalInfo />
          </div>
        </div>

        {/* right side info */}
        <div className="py-8 lg:py-20 flex flex-col w-full lg:w-3/4">
          <div className="space-y-7">
            <div>
              <About />
            </div>

            <div>
              <Skills />
            </div>

            <div>
              <Experience />
            </div>

            <div>
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
