import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function App() {
  const writeEmail = () => {
    const mailLink = "mailto:shunakiya@gmail.com";
    window.open(mailLink, "_blank");
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      {/* header */}
      <div className="sticky flex flex-col py-24">
        <h1 className="text-5xl font-bold">Shunsuke Akiya</h1>

        <div className="mt-3">
          <p className="text-xl font-medium mb-4">
            Fullstack{""}
            <span className="animate-text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-[200%_auto] bg-clip-text text-transparent mx-1">
              React
            </span>
            {""}
            Developer
          </p>

          <p className="text-lg w-[335px]">
            I build scalable, user-friendly applications across front and back
            end.
          </p>
        </div>
      </div>

      {/* nav buttons */}
      <div className="flex flex-col items-start tracking-wider">
        <button>ABOUT</button>

        <button>PROJECTS</button>
      </div>

      {/* socials */}
      <div className="flex items-center">
        <div className="flex space-x-5 items-center">
          <a href="https://github.com/shunakiya" target="_blank">
            <FaGithub size={30} />
          </a>

          <a href="https://linkedin.com/in/shunsuke-akiya/" target="_blank">
            <FaLinkedin size={30} />
          </a>
          <button onClick={writeEmail}>
            <IoIosMail size={40} />
          </button>
        </div>
      </div>
    </div>
  );
}
