import { FaReact } from "react-icons/fa";
import { SiTypescript, SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
// import { SkillsList, skillsListItems } from "../utils/SkillsList";
import figma from "../assets/logos/figma.svg";
import python from "../assets/logos/python.svg";

export default function Skills() {
  return (
    <div className="flex flex-col mb-1">
      <h1 className="text-2xl font-semibold mb-1.5">Skills</h1>

      {/* <>
        <div>
          {skillsListItems.map((item: SkillsList, index: number) => (
            <div key={index}>
              {item.title}
              {item.description}
              {item.color}
            </div>
          ))}
        </div>
      </> */}

      <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-3 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 gap-4">
        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-[168px] lg:w-52 md:w-52 sm:w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600 hover:bg-[#252f3e]">
          <div className="bg-[#58C4DC30] w-11 h-11 justify-center flex items-center rounded-lg">
            <FaReact size={28} className="fill-[#58C4DC]" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              React
            </p>
            <p className="text-[11px] lg:text-[10px] md:text-[10px] sm:text-[11px] text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              JavaScript Library
            </p>
          </div>
        </div>

         <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-[168px] lg:w-52 md:w-52 sm:w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600 hover:bg-[#252f3e]">
          <div className="bg-white/10 w-11 h-11 justify-center flex items-center rounded-lg">
            <SiNextdotjs size={28} className="fill-white/60" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Next.js
            </p>
            <p className="text-[11px] lg:text-[10px] md:text-[10px] sm:text-[11px] text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              React Framework
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-[168px] lg:w-52 md:w-52 sm:w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600 hover:bg-[#252f3e]">
          <div className="bg-[#3178C630] w-11 h-11 justify-center flex items-center rounded-lg">
            <SiTypescript size={26} className="fill-[#3178C6]" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Typescript
            </p>
            <p className="text-[11px] lg:text-[10px] md:text-[10px] sm:text-[11px] text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              JavaScript but easier
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-[168px] lg:w-52 md:w-52 sm:w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600 hover:bg-[#252f3e]">
          <div className="bg-[#38BDF830] w-11 h-11 justify-center flex items-center rounded-lg">
            <RiTailwindCssFill size={28} className="fill-[#38BDF8]" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Tailwind CSS
            </p>
            <p className="text-[11px] lg:text-[10px] md:text-[10px] sm:text-[11px] text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              CSS Framework
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-[168px] lg:w-52 md:w-52 sm:w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600 hover:bg-[#252f3e]">
          <div className="bg-[#00ED6430] w-11 h-11 justify-center flex items-center rounded-lg">
            <SiMongodb size={28} className="fill-[#00ED64]" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              MongoDB
            </p>
            <p className="text-[11px] lg:text-[10px] md:text-[10px] sm:text-[11px] text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              Database System
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-[168px] lg:w-52 md:w-52 sm:w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600 hover:bg-[#252f3e]">
          <div className="bg-[#ffffff30] w-11 h-11 justify-center flex items-center rounded-lg">
            <SiFlask size={28} className="fill-black" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Flask
            </p>
            <p className="text-[11px] lg:text-[10px] md:text-[10px] sm:text-[11px] text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              Micro Framework
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-[168px] lg:w-52 md:w-52 sm:w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600 hover:bg-[#252f3e]">
          <div className="bg-[#8B879A30] w-11 h-11 justify-center flex items-center rounded-lg">
            <img src={figma} className="h-9 w-9" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Figma
            </p>
            <p className="text-[11px] lg:text-[10px] md:text-[10px] sm:text-[11px] text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              Design Tool
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-[168px] lg:w-52 md:w-52 sm:w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600 hover:bg-[#252f3e]">
          <div className="bg-[#FFD24130] w-11 h-11 justify-center flex items-center rounded-lg">
            <img src={python} className="h-8 w-8" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Python
            </p>
            <p className="text-[11px] lg:text-[10px] md:text-[10px] sm:text-[11px] text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              Programming Language
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-[168px] lg:w-52 md:w-52 sm:w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600 hover:bg-[#252f3e]">
          <div className="bg-[#F0513330] w-11 h-11 justify-center flex items-center rounded-lg">
            <FaGitAlt size={28} className="fill-[#F05133]"/>
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Git
            </p>
            <p className="text-[11px] lg:text-[10px] md:text-[10px] sm:text-[11px] text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              Control System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
