import React from "react";

const Experience = () => {
  return (
    <section className="text-white bg-black body-font overflow-hidden">
      <div className="container w-[90%] px-5 py-16 mx-auto">
        <h1 className="text-4xl mb-12 text-white"> Experience </h1>
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
              <ul className="list-disc list-inside text-sm text-white">
                <li>
                  Collaborated on the development of an in-house product using
                  cutting-edge technologies such as Next.js, Node Js, React,
                  TypeScript, and MUI.
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
                <li>Integrated Next-Auth for customer authorization.</li>
                <li>
                  Built shared components and showcase them in a Storybook.
                </li>
                <li>
                  Started learning Node.js a few months ago, quickly grasping
                  server-side development and handling backend tasks
                  effectively.
                </li>
                <li>
                  Demonstrated a strong ability to learn new technologies
                  rapidly and apply them efficiently in projects.
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
