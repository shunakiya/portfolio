export default function About() {
  return (
    <div className="mb-1">
      <h1 className="text-2xl font-semibold mb-0.5">About</h1>
      <div className="space-y-4 text-[#a4b4cb]">
        <p>
          I’m a new grad who enjoys learning and building user-friendly web
          apps. I started programming young in{" "}
          <a
            href="https://www.kipr.org/"
            target="blank"
            className="font-semibold text-blue-400 hover:text-blue-500"
          >
            robotics
          </a>
          , but a software developer internship sparked my path into web
          development. Since then, I’ve been committed to learning front-end
          design and animations.
        </p>
        <p>
          I'm currently focused on gaining experience and studying UI/UX
          princpals, along with smooth animations. I enjoy keeping
          up with the latest web dev trends and experimenting with new tools to
          build better user experiences.
        </p>
        <p>
          Outside of coding, I enjoy playing PC games with my girlfriend,{" "}
          <a
            href="https://pcpartpicker.com/list/pD8CJn"
            target="_blank"
            className="font-semibold text-blue-400 hover:text-blue-500"
          >
            building computers
          </a>
          ,{" "}
          <a
            href="https://iv-works.com/av4/"
            target="_blank"
            className="font-semibold text-blue-400 hover:text-blue-500"
          >
            custom mechanical keyboards
          </a>
          , or looking for{" "}
          <a className="font-semibold text-cyan-400 hover:text-cyan-500 hover:cursor-[url('./assets/pepper.png'),auto]">
            cat pictures.
          </a>
        </p>
      </div>
    </div>
  );
}
