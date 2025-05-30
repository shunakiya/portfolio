import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail, IoIosArrowUp } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import pfp from "../assets/pfp.png";
import usa from "../assets/usa.svg";

interface PersonalInfoProps {
  activeSection: string;
}

export default function PersonalInfo({ activeSection }: PersonalInfoProps) {
  const writeEmail = () => {
    const mailLink = "mailto:shunakiya@gmail.com";
    window.open(mailLink, "_blank");
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-0 sm:py-6 md:py-8 lg:py-20 flex flex-col sticky gap-6 top-0 h-fit">
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
            <img src={usa} className="w-5 h-3 ml-[7px] mb-2" alt="USA flag" />
          </div>

          <p className="text-[15px] w-[335px] text-slate-400">
            I build responsive, user-friendly applications across front and back
            end.
          </p>
        </div>
      </div>

      {/* nav buttons */}
      <div className="flex-col items-start tracking-widest my-auto gap-0.5 sm:flex md:flex hidden">
        {["about", "skills", "experience", "projects"].map((section) => (
          <div key={section} className="text-slate-400">
            <a
              href={`#${section}`}
              onClick={(e) => handleSmoothScroll(e, section)}
              className={`flex flex-row gap-1.5 items-center group ${
                activeSection === section ? "text-white" : ""
              }`}
            >
              <IoIosArrowUp
                className={`transition-transform duration-300 ease-in-out mt-0.5 transform
                ${activeSection === section ? "rotate-90" : ""}
                group-hover:rotate-90 group-hover:fill-white`}
              />
              <p className="transition -100 ease-in-out group-hover:text-white capitalize">
                {section}
              </p>
            </a>
          </div>
        ))}
      </div>

      {/* socials */}
      <div className="flex items-center bottom-0 text-slate-400 sm:mt-5 sm:-ml-0.5">
        <div className="flex space-x-8 items-center">
          {/* resume */}
          <button
            onClick={openResume}
            className="hover:transition hover:ease-in-out duration-100 hover:text-[#e6f0ff]"
            title="Resume"
          >
            <div className="flex flex-row border-2 duration-100 border-slate-400 hover:border-[#e6f0ff] rounded-xl p-2 gap-2">
              <p className="">Resume </p>
              <IoDocumentText size={25} />
            </div>
          </button>

          {/* github */}
          <a
            href="https://github.com/shunakiya"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub
              size={25}
              className="hover:transition hover:ease-in-out duration-100 hover:fill-[#e6f0ff]"
            />
          </a>

          {/* linkedin */}
          <a
            href="https://linkedin.com/in/shunsuke-akiya/"
            target="_blank"
            rel="noopener noreferrer"
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
