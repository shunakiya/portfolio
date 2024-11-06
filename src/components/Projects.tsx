import csusb from "../assets/csusb.png";
import { MdOpenInNew } from "react-icons/md";

export default function Projects() {
  return (
    <div>
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
                <a
                  className="flex flex-row items-center"
                  href="https://github.com/shunakiya/tail-recursion-project"
                  target="_blank"
                >
                  <h1 className="text-xl font-semibold underline text-[#e6f0ff] -mb-0.5">
                    Tail Recursion
                  </h1>
                  <MdOpenInNew className="mt-1.5 ml-2" size={19} />
                </a>

                <p className="text-slate-500 text-sm">Fall 2023</p>
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

        {/* project 2 */}
        <div className="border-l-2 border-slate-400 pb-1 mb-8">
          <div className="ml-4">
            <div className="flex flex-row items-center gap-2 mb-2">
              <img
                src={csusb}
                className="w-[68px] h-[68px] rounded-full  mr-1"
              />
              <div className="flex flex-col gap-2">
                <a
                  className="flex flex-row items-center"
                  href="https://github.com/shunakiya/three-algorithms"
                  target="_blank"
                >
                  <h1 className="text-xl font-semibold underline text-[#e6f0ff] -mb-0.5">
                    3 Search Algorithm
                  </h1>
                  <MdOpenInNew className="mt-1.5 ml-2" size={19} />
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
