import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiNextdotjs, SiTypescript } from "react-icons/si";
import { SkillsList, skillsListItems } from "../data/SkillsList";

const iconComponents = {
  SiNextdotjs,
  FaReact,
  SiTypescript,
  SiJavascript,
  RiTailwindCssFill,
  FaGitAlt,
};

export default function Skills() {
  return (
    <div className="flex flex-col mb-6">
      <h1 className="text-2xl font-medium mb-1.5">Skills</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-3">
        {skillsListItems.map((item: SkillsList, index: number) => {
          const IconComponent = item.iconName
            ? iconComponents[item.iconName as keyof typeof iconComponents]
            : null;

          return (
            <div
              key={index}
              className="flex flex-row items-center bg-slate-800 p-2 rounded-lg px-3 py-2.5 border border-slate-700 min-w-0"
            >
              <div
                className={`${item.bgColor} w-11 h-11 justify-center flex items-center rounded-lg`}
              >
                {item.iconType === "component" && IconComponent ? (
                  <IconComponent
                    size={item.iconSize}
                    className={item.iconColor}
                  />
                ) : (
                  <img
                    src={item.imageSrc}
                    className={
                      item.iconSize === 24
                        ? "h-6 w-6"
                        : item.iconSize === 32
                        ? "h-8 w-8"
                        : "h-9 w-9"
                    }
                    alt={`${item.title} logo`}
                  />
                )}
              </div>
              <div className="flex flex-col mx-2 ml-2.5">
                <p className="text-base mb-0.5 text-slate-200">{item.title}</p>
                <p className="text-xs text-slate-400">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
