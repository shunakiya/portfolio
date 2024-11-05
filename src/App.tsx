import PersonalInfo from "./components/PersonalInfo.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-[#1c2942] via-[#162033] to-[#111927] min-h-screen">
      <div className="flex flex-row gap-36 mx-auto min-h-screen max-w-screen-xl px-6 py-8 md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-x-hidden">
        {/* left side info */}
        <PersonalInfo />

        {/* right side info */}
        <div className="py-20 flex flex-col w-[85%] ml-auto">
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
