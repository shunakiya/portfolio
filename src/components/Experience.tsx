import lsa from "../assets/lsa.png";

export default function Experience() {
  return (
    <div className="mb-4">
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
                LOGISTEED Solutions America, Ltd.
              </p>
              <p className="text-base font-medium">
                Torrance, California · On-site
              </p>
              <p className="text-slate-500 text-sm">June 2024 - August 2024</p>
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
                Implemented Login Authentication, CRUD functionality, and a
                user-friendly interface designed with Tailwind.
              </p>
            </li>
            <li className="flex gap-2">
              <p>•</p>
              <p>
                Utilized Svelte as Frontend, Flask as Backend, and MySQL for
                database.
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
