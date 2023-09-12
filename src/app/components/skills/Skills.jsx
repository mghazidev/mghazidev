import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="text-center bg-white py-16">
      <div className="mx-auto w-[90%]">
        <h2 className="text-4xl font-extrabold mb-4 text-black">Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-2">
          <div className="flex flex-col items-center">
            <img className="md:w-[100px] w-[70px]" src="/html.svg" alt="HTML" />
          </div>
          <div className="flex flex-col items-center">
            <img className="md:w-[100px] w-[70px]" src="/css.svg" alt="CSS" />
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:w-[100px] w-[70px]"
              src="/js.svg"
              alt="JavaScript"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:w-[100px] w-[70px]"
              src="/react.svg"
              alt="React"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:w-[100px] w-[70px]"
              src="/tailwind.svg"
              alt="Tailwind CSS"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:w-[100px] w-[70px]"
              src="/ts.svg"
              alt="TypeScript"
            />
          </div>
          <div className="flex flex-col items-center">
            <img className="md:w-[100px] w-[70px]" src="/tail.svg" alt="Tail" />
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:w-[100px] w-[70px]"
              src="/wordpress.svg"
              alt="WordPress"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;