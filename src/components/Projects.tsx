import { MdOpenInNew } from "react-icons/md";
import { ProjectsList, projectsListItems } from "../data/ProjectsList";

export default function Projects() {
  return (
    <div className="overflow-hidden mb-6">
      <h1 className="text-2xl font-medium mb-1.5">Relevant Projects</h1>

      <div className="space-y-6">
        {projectsListItems.map((item: ProjectsList, index: number) => (
          <div key={index} className="border-l-2 border-slate-400 pb-1">
            <div className="ml-4">
              <div className="flex flex-row items-center gap-2 mb-2">
                <img
                  src={item.logo}
                  className="w-16 h-16 rounded-full mr-1"
                  alt={`${item.title} logo`}
                />
                <div className="flex flex-col">
                  <a
                    className="flex flex-row items-center group gap-1.5"
                    href={item.repoPage}
                    target="_blank"
                  >
                    <h1 className="text-xl font-medium transition duration-150 ease-in-out group-hover:text-slate-300">
                      {item.title}
                    </h1>
                    <MdOpenInNew
                      className="transition duration-150 ease-in-out group-hover:text-slate-300"
                      size={19}
                    />
                  </a>

                  <p className="text-base text-slate-300">{item.location}</p>

                  <p className="text-sm text-slate-500">{item.time}</p>
                </div>
              </div>

              <div className="list-inside space-y-1 text-slate-400">
                <li className="flex gap-2">
                  <p>•</p>
                  <p>{item.desc}</p>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
