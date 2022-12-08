import React from "react";
import { AcademicCapIcon} from "@heroicons/react/solid";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon  className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Education and Achievements
        </h1>
        <div className="flex flex-wrap m-4">
          {achievements.map((achievements) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <AcademicCapIcon className="block w-8 text-gray-500 mb-4" />
                <p className="title-font font-medium text-white mb-6">{achievements.degree}</p>
                <div className="inline-flex items-center">
                  {/* <p
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  >{}</p> */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="leading-relaxed">
                      {achievements.college}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {achievements.GPA}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
