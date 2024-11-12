import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail, IoIosArrowUp } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import pfp from "../assets/pfp.png";
import usa from "../assets/usa.svg";

export default function PersonalInfo() {
  const [activeButton, setActive] = useState<string | null>(null);

  const toggleActive = (buttonName: string) => {
    if (activeButton === buttonName) {
      setActive(null);
    } else {
      setActive(buttonName);
    }
  };

  const writeEmail = () => {
    const mailLink = "mailto:shunakiya@gmail.com";
    window.open(mailLink, "_blank");
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="py-20 h-screen flex flex-col sticky top-0">
      <div className="flex flex-col">
        <div>
          <img src={pfp} className="w-36 h-36 rounded-full mb-2" />
          <h1 className="text-4xl font-bold">Shunsuke Akiya</h1>
        </div>

        <div className="mt-2">
          <p className="text-xl  mb-2">
            <span className="animate-text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-[200%_auto] bg-clip-text text-transparent mr-1">
              Full-Stack
            </span>
            {""}
            Developer
          </p>

          <div className="flex flex-row items-center">
            <p className="text-[16px] mb-3 -ml-[8.5px]">
              📍La Quinta, California
            </p>
            <img src={usa} className="w-5 h-3 ml-[7px] mb-2" />
          </div>

          <p className="text-[15px] w-[335px] text-slate-400">
            I build scalable, user-friendly applications across front and back
            end.
          </p>
        </div>
      </div>

      {/* nav buttons */}
      <div className="flex flex-col items-start tracking-widest my-auto gap-0.5">
        <p className="text-xs text-slate-500 tracking-normal">Coming soon</p>
        {/* about */}
        <div className="text-slate-400">
          <button
            onClick={() => toggleActive("about")}
            className={`flex flex-row gap-1.5 items-center group ${
              activeButton === "about" ? "text-white" : ""
            }`}
          >
            <IoIosArrowUp
              className={`transition-transform duration-300 ease-in-out mt-0.5 transform
            ${activeButton === "about" ? "rotate-90" : ""}
            group-hover:rotate-90 group-hover:fill-white`}
            />
            <p className="transition -100 ease-in-out group-hover:text-white">
              About
            </p>
          </button>
        </div>

        {/* skills */}
        <div className="text-slate-400">
          <button
            onClick={() => toggleActive("skills")}
            className={`flex flex-row gap-1.5 items-center group ${
              activeButton === "skills" ? "text-white" : ""
            }`}
          >
            <IoIosArrowUp
              className={`transition-transform duration-300 ease-in-out mt-0.5 transform
            ${activeButton === "skills" ? "rotate-90" : ""}
            group-hover:rotate-90 group-hover:fill-white`}
            />
            <p className="transition -100 ease-in-out group-hover:text-white">
              Skills
            </p>
          </button>
        </div>

        {/* experience */}
        <div className="text-slate-400">
          <button
            onClick={() => toggleActive("experience")}
            className={`flex flex-row gap-1.5 items-center group ${
              activeButton === "experience" ? "text-white" : ""
            }`}
          >
            <IoIosArrowUp
              className={`transition-transform duration-300 ease-in-out mt-0.5 transform
            ${activeButton === "experience" ? "rotate-90" : ""}
            group-hover:rotate-90 group-hover:fill-white`}
            />
            <p className="transition -100 ease-in-out group-hover:text-white">
              Experience
            </p>
          </button>
        </div>

        {/* projects */}
        <div className="text-slate-400">
          <button
            onClick={() => toggleActive("projects")}
            className={`flex flex-row gap-1.5 items-center group ${
              activeButton === "projects" ? "text-white " : ""
            }`}
          >
            <IoIosArrowUp
              className={`transition-transform duration-300 ease-in-out mt-0.5 transform
            ${activeButton === "projects" ? "rotate-90" : ""}
            group-hover:rotate-90 group-hover:fill-white`}
            />
            <p className="transition -100 ease-in-out group-hover:text-white">
              Projects
            </p>
          </button>
        </div>
      </div>

      {/* socials */}
      <div className="flex items-center bottom-0 text-slate-400">
        <div className="flex space-x-8 items-center">
          {/* resume */}
          <button
            onClick={openResume}
            className=" hover:transition hover:ease-in-out duration-100 hover:text-[#e6f0ff]"
            title="Resume"
          >
            <div className="flex flex-row border-2 duration-100 border-slate-400 hover:border-[#e6f0ff] rounded-xl p-2 gap-2">
              <p className="">Resume </p>
              <IoDocumentText size={25} />
            </div>
          </button>

          {/* github */}
          <a href="https://github.com/shunakiya" target="_blank" title="GitHub">
            <FaGithub
              size={25}
              className="hover:transition hover:ease-in-out duration-100 hover:fill-[#e6f0ff]"
            />
          </a>

          {/* linkedin */}
          <a
            href="https://linkedin.com/in/shunsuke-akiya/"
            target="_blank"
            title="LinkedIn"
          >
            <FaLinkedin
              size={25}
              className="hover:transition hover:ease-in-out duration-100
              hover:fill-[#e6f0ff]"
            />
          </a>

          {/* email */}
          <button onClick={writeEmail} title="Send Email">
            <IoIosMail
              size={33}
              className="hover:transition hover:ease-in-out duration-100 hover:fill-[#e6f0ff]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
