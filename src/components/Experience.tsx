import { ExperienceList, experienceListItems } from "../data/ExperienceList";

export default function Experience() {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-medium mb-1.5">Professional Experience</h1>
      <div className="space-y-6">
        {experienceListItems.map((item: ExperienceList, index: number) => (
          <div key={index}>
            <div className="border-l-2 border-slate-400 pb-1">
              <div className="ml-4">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <img
                    src={item.logo}
                    className="w-16 h-16 p-2 border-2 rounded-full bg-white mr-1"
                    alt={`${item.company} logo`}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-medium">{item.position}</h1>
                    <p className="text-base text-slate-300">{item.company}</p>
                    <p className="text-sm text-slate-400">{item.location}</p>
                    <p className="text-sm text-slate-500">{item.time}</p>
                  </div>
                </div>
                <div className="list-inside space-y-1 text-slate-400">
                  {[item.desc]
                    .filter((desc) => desc && desc.trim() !== "")
                    .map((desc, idx) => (
                      <li key={idx} className="flex gap-2">
                        <p className="ml-1">{desc}</p>
                      </li>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
