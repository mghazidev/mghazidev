import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="text-center bg-white py-16">
      <div className="mx-auto w-[90%]">
        <h2 className="text-4xl font-extrabold mb-4 text-black">Tech</h2>
        <div className="grid grid-cols-2 md:grid-cols-8 gap-2">
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/html.svg" alt="HTML" />
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/css.svg" alt="CSS" />
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/js.svg" alt="JavaScript" />
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/react.svg" alt="React" />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              src="/tailwind.svg"
              alt="Tailwind CSS"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/ts.svg" alt="TypeScript" />
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} height={100} src="/tail.svg" alt="Tail" />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
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
