import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Home
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#achievements" className="mr-5 hover:text-white">
            Achievements
          </a>
          <a href="#contact" className="mr-5 hover:text=white">
            Contact
          </a>
        </nav>
        <a
          href="https://drive.google.com/file/d/1IM8QYHYH3O926q4VhzjZdhwozIqYjAYo/view?usp=sharing"
          className="inline-flex items-center box-border hover:box-content h-15 w-30 p-4 border-4  mt-4 md:mt-0">
          Download CV
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
