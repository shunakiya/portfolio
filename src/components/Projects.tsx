import csusb from "../assets/csusb.png";
import { MdOpenInNew } from "react-icons/md";

export default function Projects() {
  return (
    <div className="overflow-hidden">
      <h1 className="text-2xl font-semibold mb-1.5">Projects</h1>

      <div className="">
        {/* project 1 */}
        <div className="border-l-2 border-slate-400 pb-1 mb-8">
          <div className="ml-4">
            <div className="flex flex-row items-center gap-2 mb-2">
              <img
                src={csusb}
                className="w-[68px] h-[68px] rounded-full  mr-1"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3">
                  <a
                    className="flex flex-row items-center group justify-between"
                    href="https://github.com/shunakiya/salsnb"
                    target="_blank"
                  >
                    <h1 className="text-xl w-fit font-semibold text-[#e6f0ff] underline -mb-0.5 group-hover:transition group-hover:ease-in-out duration-[25ms] hover:text-slate-400">
                      Secure Access Locking Sytem with NFC and Biometrics
                    </h1>

                    <MdOpenInNew
                      className="mt-1.5 ml-2 group-hover:transition group-hover:ease-in-out duration-[25ms] group-hover:text-slate-400 min-h-[19px] min-w-[19px]"
                      size={19}
                    />
                  </a>
                </div>

                <p className="text-slate-500 text-sm">
                  Fall 2024 - Spring 2025
                </p>

                <p className="bg-yellow-500 text-slate-700 text-xs -mt-0.5 py-1 px-2 w-max rounded-lg">
                  In Progress
                </p>
              </div>
            </div>

            <div className="list-inside space-y-1 text-[#a4b4cb]">
              <li className="flex gap-2">
                <p>•</p>
                <p>
                  Developed a smart-lock with fingerprint sensor, NFC, and key
                  access.
                </p>
              </li>
              <li className="flex gap-2">
                <p>•</p>
                <p>
                  Integrated remote control, solenoid-powered lock, fingerprint
                  reader, and smartphone NFC system.
                </p>
              </li>
              <li className="flex gap-2">
                <p>•</p>
                <p>
                  Used a Raspberry Pi to host a Flask backend server, with data
                  fetched by a React frontend designed with Tailwind.
                </p>
              </li>
            </div>
          </div>
        </div>

        {/* project 2 */}
        {/* rewrite so that it talks about my persective and the challenges i faced, since right
        now it just looks very generic and talks about what the outcome was. do that for project 2 and 3 */}
        <div className="border-l-2 border-slate-400 pb-1 mb-8">
          <div className="ml-4">
            <div className="flex flex-row items-center gap-2 mb-2">
              <img
                src={csusb}
                className="w-[68px] h-[68px] rounded-full  mr-1"
              />
              <div className="flex flex-col gap-2">
                <a
                  className="flex flex-row items-center group"
                  href="https://github.com/shunakiya/tail-recursion-project"
                  target="_blank"
                >
                  <h1 className="text-xl font-semibold underline text-[#e6f0ff] -mb-0.5 group-hover:transition group-hover:ease-in-out duration-[25ms] hover:text-slate-400">
                    Tail Recursion
                  </h1>
                  <MdOpenInNew
                    className="mt-1.5 ml-2 group-hover:transition group-hover:ease-in-out duration-[25ms] group-hover:text-slate-400"
                    size={19}
                  />
                </a>

                <p className="text-slate-400 text-sm">Fall 2023</p>
              </div>
            </div>

            <div className="list-inside space-y-1 text-[#a4b4cb]">
              <li className="flex gap-2">
                <p>•</p>
                <p>
                  Implemented 12 tail-recursive functions that handle common
                  Java operations.
                </p>
              </li>
              <li className="flex gap-2">
                <p>•</p>
                <p>Optimized for time complexity (aimed for O(n) or better).</p>
              </li>
              <li className="flex gap-2">
                <p>•</p>
                <p>
                  Followed constraints: no non-local variables, no arrays, no
                  non-recursive loops.
                </p>
              </li>
            </div>
          </div>
        </div>

        {/* project 3 */}
        <div className="border-l-2 border-slate-400 pb-1 mb-8">
          <div className="ml-4">
            <div className="flex flex-row items-center gap-2 mb-2">
              <img
                src={csusb}
                className="w-[68px] h-[68px] rounded-full  mr-1"
              />
              <div className="flex flex-col gap-2">
                <a
                  className="group flex flex-row items-center"
                  href="https://github.com/shunakiya/three-algorithms"
                  target="_blank"
                >
                  <h1 className="text-xl font-semibold underline text-[#e6f0ff] -mb-0.5 group-hover:transition group-hover:ease-in-out duration-[25ms] hover:text-slate-400">
                    3 Search Algorithm
                  </h1>
                  <MdOpenInNew
                    className="mt-1.5 ml-2 group-hover:ease-in-out duration-[25ms] group-hover:text-slate-400"
                    size={19}
                  />
                </a>

                <p className="text-slate-500 text-sm">Fall 2023</p>
              </div>
            </div>

            <div className="list-inside space-y-1 text-[#a4b4cb]">
              <li className="flex gap-2">
                <p>•</p>
                <p>
                  Implemented graph search algorithms (DFS, BFS, A* Search) in
                  Java.
                </p>
              </li>
              <li className="flex gap-2">
                <p>•</p>
                <p>
                  Utilized object-oriented programming concepts like abstract
                  classes, interfaces, and inheritance.
                </p>
              </li>
              <li className="flex gap-2">
                <p>•</p>
                <p>
                  Solved pathfinding problems using Maze and Sliding Puzzle as
                  examples.
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
