import { ExperienceList, experienceListItems } from "../utils/ExperienceList";

export default function Experience() {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-semibold mb-1.5">Experience</h1>

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
                    <h1 className="text-xl font-semibold">{item.position}</h1>
                    <p className="text-base font-medium">{item.company}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}
