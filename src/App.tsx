// @ts-ignore
import PersonalInfo from "./components/PersonalInfo";
// @ts-ignore
import About from "./components/About";
// @ts-ignore
import Skills from "./components/Skills";
// @ts-ignore
import Experience from "./components/Experience";
// @ts-ignore
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-[#1c2942] via-[#162033] to-[#111927] min-h-screen">
      <div className="flex flex-row gap-40 mx-auto min-h-screen max-w-screen-xl px-6 py-8 md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-x-hidden">
        {/* left side info */}
        <PersonalInfo />

        {/* right side info */}
        <div className="py-20 flex flex-col w-[70%] ml-auto space-y-7">
          <div className="mb-1">
            <About />
          </div>

          <div>
            <div className="flex flex-col mb-1">
              <Skills />
            </div>
          </div>

          <div className="mb-4 ">
            <Experience />
          </div>

          {/* projects */}
          <div>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
