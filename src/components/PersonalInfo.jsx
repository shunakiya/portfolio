import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail, IoIosArrowUp } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import pfp from "../assets/pfp.png";

export default function PersonalInfo() {
  const writeEmail = () => {
    const mailLink = "mailto:shunakiya@gmail.com";
    window.open(mailLink, "_blank");
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
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
            I build scalable, user-friendly applications across front and back
            end.
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
  );
}