import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-col px-5 py-16 justify-center items-center">
        <h2 className="text-4xl font-extrabold mb-4 text-black">Portfolio</h2>
        <Image
          width={200}
          height={200}
          className="lg:w-1/6 md:w-1/6 w-5/6 mb-10 object-cover object-center rounded-full"
          alt="profile"
          src="/Profile.jpeg"
        />
        <div className="w-full md:w-2/3 flex flex-col mb-4 items-center text-center">
          <h1 className="sm:text-sm text-sm mb-4 text-black">
            Portfolio Link / Company Website
          </h1>
          <div className="flex">
            <Link href="https://github.com/mghazidev">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <Image src="/dpk.png" alt="dpk" width={20} height={20} />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="title-font font-medium">DevsquarePk</span>
                </span>
              </button>
            </Link>
            <Link href="https://devsquarepk.com/">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
                <Image src="/git.svg" alt="git" width={16} height={16} />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="title-font font-medium">Github</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
