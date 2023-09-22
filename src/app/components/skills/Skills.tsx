import React from "react";
import Image from "next/image";

const Skills = () => {
  // const icons = [
  //   {
  //     src: "/html.svg",
  //     alt: "HTML5",
  //   },
  //   {
  //     src: "/css.svg",
  //     alt: "CSS3",
  //   },
  //   {
  //     src: "/js.svg",
  //     alt: "Javascript",
  //   },
  //   {
  //     src: "/react.svg",
  //     alt: "React",
  //   },
  //   {
  //     src: "/tailwind.svg",
  //     alt: "Nextjs",
  //   },
  //   {
  //     src: "/ts.svg",
  //     alt: "Typescript",
  //   },
  //   {
  //     src: "/mui.svg",
  //     alt: "MaterialUI",
  //   },
  //   {
  //     src: "/bootstrap.svg",
  //     alt: "Bootstrap",
  //   },
  //   {
  //     src: "/wordpress.svg",
  //     alt: "Wordpress",
  //   },
  //   {
  //     src: "/tailwind-css-2.svg",
  //     alt: "TailwindCSS",
  //   },
  // ];

  return (
    <div className="text-center bg-white py-16">
      <div className="mx-auto w-[90%]">
        <h2 className="text-4xl font-extrabold mb-4 text-black">Tech</h2>
        <div className="grid grid-cols-6 md:grid-cols-10 gap-5">
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/html.svg"
              alt="HTML"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/css.svg"
              alt="CSS"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/js.svg"
              alt="JavaScript"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/react.svg"
              alt="React"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/tailwind.svg"
              alt="Nextjs"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/ts.svg"
              alt="TypeScript"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/mui.svg"
              alt="Mui"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/tailwind-css-2.svg"
              alt="Tailwind Css"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/wordpress.svg"
              alt="WordPress"
            />
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={100}
              height={100}
              className="md:w-[100px] w-[70px]"
              src="/bootstrap.svg"
              alt="bootstrap"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
