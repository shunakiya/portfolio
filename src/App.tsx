// import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { IoIosMail, IoIosArrowUp } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { SiTypescript, SiMysql, SiFlask } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import pfp from "./assets/pfp.png";
import lsa from "./assets/lsa.png";

export default function App() {
  const writeEmail = () => {
    const mailLink = "mailto:shunakiya@gmail.com";
    window.open(mailLink, "_blank");
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <body className="bg-gradient-to-r from-[#1c2942] via-[#162033] to-[#111927] min-h-screen">
      <div className="flex flex-row gap-40 mx-auto min-h-screen max-w-screen-xl px-6 py-8 md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-x-hidden">
        {/* left side info */}
        <div className="py-20 h-screen flex flex-col w-[42%] sticky top-0">
          <div className="flex flex-col">
            <div>
              <img src={pfp} className="w-36 h-36 rounded-full mb-2" />
              <h1 className="text-4xl font-bold">Shunsuke Akiya</h1>
            </div>

            <div className="mt-2">
              <p className="text-xl font-medium mb-2">
                <span className="animate-text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-[200%_auto] bg-clip-text text-transparent mr-1">
                  Full-Stack
                </span>
                {""}
                Developer
              </p>

              <div className="flex flex-row">
                <p className="text-[16px] mb-3 -ml-[8.5px]">
                  📍La Quinta, California
                </p>
                <p className="mt-[1.5px] ml-[6px]">🇺🇸</p>
              </div>

              <p className="text-[15px] w-[335px] text-slate-400">
                I build scalable, user-friendly applications across front and
                back end.
              </p>
            </div>
          </div>

          {/* nav buttons */}
          <div className="flex flex-col items-start tracking-widest my-auto gap-1">
            <p className="text-sm text-slate-500 tracking-normal">
              Buttons are work in progress
            </p>
            <div className="flex flex-row gap-1.5 items-center">
              <IoIosArrowUp className="" />

              <button
                className="hover:transition ease-in-out duration-100
              hover:text-[#ffffff] hover:font-medium"
              >
                About
              </button>
            </div>

            <div className="flex flex-row gap-1.5 items-center">
              <IoIosArrowUp className="" />

              <button>Skills</button>
            </div>

            <div className="flex flex-row gap-1.5 items-center">
              <IoIosArrowUp className="" />

              <button>Expereince</button>
            </div>

            <div className="flex flex-row gap-1.5 items-center">
              <IoIosArrowUp className="" />

              <button>Projects</button>
            </div>
          </div>

          {/* socials */}
          <div className="flex items-center bottom-0 text-slate-400">
            {/* resume button */}
            <div className="flex space-x-8 items-center">
              <button
                onClick={openResume}
                className=" hover:transition hover:ease-in-out duration-100 hover:text-[#e6f0ff]"
              >
                <div className="flex flex-row border-2 duration-100 border-slate-400 hover:border-[#e6f0ff] rounded-xl p-2 gap-2">
                  <p className="font-medium">Resume </p>
                  <IoDocumentText size={25} />
                </div>
              </button>

              <a href="https://github.com/shunakiya" target="_blank">
                <FaGithub
                  size={25}
                  className="hover:transition hover:ease-in-out duration-100 hover:fill-[#e6f0ff]"
                />
              </a>

              <a href="https://linkedin.com/in/shunsuke-akiya/" target="_blank">
                <FaLinkedin
                  size={25}
                  className="hover:transition hover:ease-in-out duration-100
              hover:fill-[#e6f0ff]"
                />
              </a>
              <button onClick={writeEmail}>
                <IoIosMail
                  size={33}
                  className="hover:transition hover:ease-in-out duration-100 hover:fill-[#e6f0ff]"
                />
              </button>
            </div>
          </div>
        </div>

        {/* right side info */}
        <div className="py-20 flex flex-col w-[70%] ml-auto space-y-7">
          {/* about */}
          <div className="mb-1">
            <h1 className="text-2xl font-semibold mb-1.5">About</h1>
            <div className="space-y-4 text-[#a4b4cb]">
              <p>
                I’m a 21-year-old Full-Stack Developer who enjoys learning and
                building high-quality applications. I started programming young
                in{" "}
                <a
                  href="https://www.kipr.org/"
                  target="blank"
                  className="font-semibold text-blue-400 hover:text-blue-500"
                >
                  robotics
                </a>
                , but my Software Developer internship sparked my path into
                Full-Stack Development. Since then, I’ve committed to expanding
                my skills, from TypeScript and full-stack knowledge to
                algorithms and data structures.
              </p>
              <p>
                I enjoy working in both design and engineering, aiming for a
                balance between performance and functionality. Whether building
                a dynamic frontend interface or coding efficient backend logic,
                I continue to grow my toolkit and am ready to face new
                challenges.
              </p>
              <p>
                Outside of coding, I enjoy playing Overwatch with{" "}
                <span>my girlfriend</span>, building and modding custom
                mechanical keyboards, or liking <span>cat pictures.</span>
              </p>
            </div>
          </div>

          {/* skills */}
          <div>
            <h1 className="text-2xl font-semibold mb-1.5">Skills</h1>

            <div className="flex flex-col mb-1">
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
            </div>
          </div>

          {/* experience */}
          <div className="mb-4 ">
            <h1 className="text-2xl font-semibold mb-1.5">Experience</h1>
            <div className="border-l-2 border-slate-400 pb-1">
              <div className="ml-4">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <img
                    src={lsa}
                    className="w-16 h-16 p-2 border-2 rounded-full bg-white mr-1"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-semibold">
                      Software Developer Internship
                    </h1>
                    <p className="text-base font-medium">
                      Torrance, California
                    </p>
                    <p className="text-slate-500 text-sm">
                      June 2024 - August 2024
                    </p>
                  </div>
                </div>

                <div className="list-inside space-y-1 text-[#a4b4cb]">
                  <li className="flex gap-2">
                    <p>•</p>
                    <p>Developed a worklog application for the company.</p>
                  </li>
                  <li className="flex gap-2">
                    <p>•</p>
                    <p>
                      Implemented Login Authentication, CRUD functionality, and
                      a user-friendly interface designed with Tailwind.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <p>•</p>
                    <p>
                      Utilized Svelte as Frontend, Flask as Backend, and MySQL
                      for database.
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>

          {/* projects */}
          <div className="">
            <h1 className="text-2xl font-semibold mb-1">Projects</h1>
            <p className="text-sm text-slate-500 tracking-normal">
              Work in progress
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
