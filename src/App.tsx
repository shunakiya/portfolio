import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import pfp from "./assets/pfp.png";

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const writeEmail = () => {
    const mailLink = "mailto:shunakiya@gmail.com";
    window.open(mailLink, "_blank");
  };

  return (
    <div className="flex flex-row gap-12 mx-auto min-h-screen max-w-screen-xl px-6 py-8 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      {/* left side info */}
      <div className="py-20 h-screen sticky flex flex-col w-1/2">
        <div className="flex flex-col">
          <div>
            <img src={pfp} className="w-36 h-36 rounded-full mb-3" />
            <h1 className="text-4xl font-bold">Shunsuke Akiya</h1>
          </div>

          <div className="mt-3">
            <p className="text-xl font-medium mb-3">
              <span className="animate-text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-[200%_auto] bg-clip-text text-transparent mr-1">
                Full-Stack
              </span>
              {""}
              Developer
            </p>

            <div className="flex flex-row">
              <p className="text-[17px] mb-3 -ml-[8.5px]">
                📍La Quinta, California
              </p>
              <p className="mt-[2px] ml-[6px]">🇺🇸</p>
            </div>

            <p className="text-[16px] w-[335px] text-gray-400">
              I build scalable, user-friendly applications across front and back
              end.
            </p>
          </div>
        </div>

        {/* nav buttons */}
        <div className="flex flex-col items-start tracking-widest my-auto gap-2">
          <button>About</button>

          <button>Experience</button>

          <button>Projects</button>
        </div>

        {/* socials */}
        <div className="flex items-center bottom-0">
          <div className="flex space-x-8 items-center">
            <a href="https://github.com/shunakiya" target="_blank">
              <FaGithub size={25} />
            </a>

            <a href="https://linkedin.com/in/shunsuke-akiya/" target="_blank">
              <FaLinkedin size={25} />
            </a>
            <button onClick={writeEmail}>
              <IoIosMail size={33} />
            </button>
          </div>
        </div>
      </div>

      {/* right side info */}
      <div className="py-20 h-screen flex flex-col">
        <h1 className="text-2xl">About</h1>
        <p>Work in progress</p>
      </div>
    </div>
  );
}
