export default function About() {
  return (
    <div className="mb-1">
      <h1 className="text-2xl font-semibold mb-1.5">About</h1>
      <div className="space-y-4 text-[#a4b4cb]">
        <p>
          I’m a 21-year-old Full-Stack Developer who enjoys learning and
          building high-quality applications. I started programming young in{" "}
          <a
            href="https://www.kipr.org/"
            target="blank"
            className="font-semibold text-blue-400 hover:text-blue-500"
          >
            robotics
          </a>
          , but my Software Developer internship sparked my path into Full-Stack
          Development. Since then, I’ve committed to expanding my skills, from
          TypeScript and full-stack knowledge to algorithms and data structures.
        </p>
        <p>
          I enjoy working in both design and engineering, aiming for a balance
          between performance and functionality. Whether building a dynamic
          frontend interface or coding efficient backend logic, I continue to
          grow my toolkit and am ready to face new challenges.
        </p>
        <p>
          Outside of coding, I enjoy playing Overwatch with{" "}
          <span>my girlfriend</span>, building and modding custom mechanical
          keyboards, or liking <span>cat pictures.</span>
        </p>
      </div>
    </div>
  );
}