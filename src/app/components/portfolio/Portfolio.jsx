import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section class="text-gray-600 body-font bg-white">
      <div class="container mx-auto flex flex-col px-5 py-16 justify-center items-center">
        <h2 className="text-4xl font-extrabold mb-4 text-black">Portfolio</h2>
        <img
          class="lg:w-1/6 md:w-1/6 w-5/6 mb-10 object-cover object-center rounded-full"
          alt="profile"
          src="/profile.jpeg"
        />
        <div class="w-full md:w-2/3 flex flex-col mb-4 items-center text-center">
          <h1 class="sm:text-sm text-sm mb-4 text-black">
            Portfolio Link / Company Website
          </h1>
          <div class="flex">
            <Link href="https://github.com/mghazidev">
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <Image src="/dpk.png" width={20} height={20} />
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="title-font font-medium">DevsquarePk</span>
                </span>
              </button>
            </Link>
            <Link href="https://devsquarepk.com/">
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
                <Image src="/git.svg" width={16} height={16} />
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="title-font font-medium">Github</span>
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
