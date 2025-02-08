import csusb from "../assets/logos/csusb.png";
import { MdOpenInNew } from "react-icons/md";
import { ProjectsList, projectsListItems } from "../utils/ProjectsList";

export default function Projects() {
  return (
    <div className="overflow-hidden">
      <h1 className="text-2xl font-semibold mb-1.5">Projects</h1>

      <div className="">
        {/* rewrite so that it talks about my persective and the challenges i faced, since right
        now it just looks very generic and talks about what the outcome was. do that for project 2 and 3 */}
        {projectsListItems.map((item: ProjectsList, index: number) => (
          <div key={index} className="border-l-2 border-slate-400 pb-1 mb-8">
            <div className="ml-4">
              <div className="flex flex-row items-center gap-2 mb-2">
                <img
                  src={csusb}
                  className="w-[68px] h-[68px] rounded-full  mr-1"
                />
                <div className="flex flex-col">
                  <a
                    className="flex flex-row items-center group"
                    href={item.repoPage}
                    target="_blank"
                  >
                    <h1 className="text-xl font-semibold text-[#e6f0ff] -mb-0.5 group-hover:transition group-hover:ease-in-out duration-[25ms] hover:text-slate-400">
                      {item.title}
                    </h1>
                    <MdOpenInNew
                      className="mt-1.5 ml-2 group-hover:transition group-hover:ease-in-out duration-[25ms] group-hover:text-slate-400"
                      size={19}
                    />
                  </a>

                  <p className="text-base font-medium">{item.location}</p>

                  <p className="text-slate-500 text-sm">{item.time}</p>
                </div>
              </div>

              <div className="list-inside space-y-1 text-[#a4b4cb]">
                <li className="flex gap-2">
                  <p>•</p>
                  <p>{item.desc1}</p>
                </li>
                <li className="flex gap-2">
                  <p>•</p>
                  <p>{item.desc2}</p>
                </li>
                <li className="flex gap-2">
                  <p>•</p>
                  <p>{item.desc3}</p>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
