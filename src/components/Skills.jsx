import { FaReact } from "react-icons/fa";
import { SiTypescript, SiMysql, SiFlask } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

export default function Skills() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-1.5">Skills</h1>

      <div className="flex flex-row mb-3 gap-x-4">
        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600">
          <div className="bg-[#58C4DC30] w-11 h-11 justify-center flex items-center rounded-lg">
            <FaReact size={28} className="fill-[#58C4DC]" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              React
            </p>
            <p className="text-xs text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              JavaScript Framework
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600">
          <div className="bg-[#3178C630] w-11 h-11 justify-center flex items-center rounded-lg">
            <SiTypescript size={28} className="fill-[#3178C6]" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Typescript
            </p>
            <p className="text-xs text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              JavaScript but better
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600">
          <div className="bg-[#38BDF830] w-11 h-11 justify-center flex items-center rounded-lg">
            <RiTailwindCssFill size={28} className="fill-[#38BDF8]" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              TailwindCSS
            </p>
            <p className="text-xs text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              CSS Framework
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-x-4">
        <div className="relative group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600">
          <div className="bg-[#d8e1e230] w-11 h-11 justify-center flex items-center rounded-lg">
            <RiNextjsFill size={28} className="fill-[#d8e1e2]" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Next.js
            </p>
            <p className="text-xs text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              React Framework
            </p>
          </div>

          <div className="absolute top-1 right-1 bg-yellow-500 text-xs text-slate-900 px-1.5 py-0.5 rounded-lg">
            In Progress
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600">
          <div className="bg-[#E48E0030] w-11 h-11 justify-center flex items-center rounded-lg">
            <SiMysql size={28} className="fill-[#E48E00]" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              MySQL
            </p>
            <p className="text-xs text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              Database System
            </p>
          </div>
        </div>

        <div className="group flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 w-52 py-2.5 border border-transparent transition-all duration-150 ease-in-out hover:border-slate-600">
          <div className="bg-[#ffffff30] w-11 h-11 justify-center flex items-center rounded-lg">
            <SiFlask size={28} className="fill-black" />
          </div>
          <div className="flex flex-col mx-2 ml-2.5">
            <p className="text-base mb-0.5 text-[#a4b4cb] transition-colors duration-150 ease-in-out group-hover:text-[#e6f0ff]">
              Flask
            </p>
            <p className="text-xs text-slate-500 transition-colors duration-150 ease-in-out group-hover:text-[#a4b4cb]">
              Micro Framework
            </p>
          </div>
        </div>
      </div>
    </>
  );
}