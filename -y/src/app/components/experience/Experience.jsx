import React from "react";

const Experience = () => {
  return (
    <section className="text-white body-font overflow-hidden">
      <div className="container w-[90%] px-5 py-16 mx-auto">
        <h1 className="text-4xl mb-12"> Experience </h1>
        <div className="-my-8 divide-y-2 divide-white">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white text-xl">
                Junior Frontend Engineer
              </span>
              <span className="mt-1 text-gray-300 text-sm">DevsquarePK</span>
              <span className="mt-1 text-gray-300 text-sm">
                Karachi, Pakistan
              </span>
              <span className="mt-1 text-gray-300 text-sm">
                Oct 2022 - Present
              </span>
            </div>
            <div className="md:flex-grow md:mx-10 mx-0">
              <ul class="list-disc list-inside text-sm">
                <li>
                  Collaborated on the development of an in-house product using
                  cutting-edge technologies such as Next.js, React, TypeScript,
                  and MUI.
                </li>
                <li>
                  Overseeing the entire lifecycle from feature requirement
                  gathering to successful deployment.
                </li>
                <li>
                  Crafted multiple WordPress websites for clients, enhancing
                  their digital presence and portfolios.
                </li>
                <li>
                  Distinguished for my expertise in achieving pixel-perfect PSD
                  to HTML conversions, utilizing Tailwind CSS and Bootstrap to
                  ensure precision in design implementation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
