import React from "react";

const Experience = () => {
  return (
    <section className="text-white bg-black body-font overflow-hidden">
      <div className="container w-[90%] px-5 py-16 mx-auto">
        <h1 className="text-4xl mb-12 text-white">Experience</h1>
        <div className="-my-8 divide-y-2 divide-white">
          {/* DevsquarePK */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-xl">Frontend Engineer</span>
              <span className="mt-1 text-gray-300 text-sm">DevsquarePK</span>
              <span className="text-gray-400 text-sm">
                Munich, Bavaria, Germany (Remote)
              </span>
              <span className="mt-1 text-gray-300 text-sm">
                Oct 2022 – Jan 2025
              </span>
            </div>

            <div className="md:flex-grow md:mx-10">
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  Developed and scaled an in-house product using Next.js, React,
                  TypeScript, and MUI.
                </li>
                <li>
                  Implemented authentication with NextAuth and handled backend
                  tasks using Node.js.
                </li>
                <li>
                  Built reusable component libraries documented in Storybook.
                </li>
                <li>
                  Managed features end-to-end: requirements to deployment.
                </li>
                <li>
                  Delivered pixel-perfect UI using Tailwind CSS & Bootstrap.
                </li>
              </ul>
            </div>
          </div>

          {/* WordPress Freelance */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-xl">
                WordPress Developer (Freelance)
              </span>
              <span className="mt-1 text-gray-300 text-sm">Outsourceage</span>
              <span className="text-gray-400 text-sm">Remote (Freelance)</span>
              <span className="mt-1 text-gray-300 text-sm">
                Feb 2025 – Mar 2025
              </span>
            </div>

            <div className="md:flex-grow md:mx-10">
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  Developed and delivered a complete business website using
                  WordPress.
                </li>
                <li>
                  Customized themes and plugins to align with client branding.
                </li>
                <li>
                  Collaborated directly with client to ensure timely delivery.
                </li>
              </ul>
            </div>
          </div>

          {/* Flutter Internship */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold text-xl">
                Flutter Developer Intern
              </span>
              <span className="mt-1 text-gray-300 text-sm">
                Softex Solution
              </span>
              <span className="text-gray-400 text-sm">
                United States (Remote)
              </span>
              <span className="mt-1 text-gray-300 text-sm">
                Dec 2025 – Present
              </span>
            </div>

            <div className="md:flex-grow md:mx-10">
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  Developed and delivered 3 production-ready mobile apps using
                  Flutter & Dart.
                </li>
                <li>
                  Built Buy n Grab (B2C marketplace), HRM system, and real-time
                  Chat application.
                </li>
                <li>
                  Integrated REST APIs, implemented state management, and
                  optimized performance.
                </li>
                <li>
                  Designed responsive, high-quality UI with clean architecture.
                </li>

                <li>Used Getx and Riverpod State managements in the apps.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

// import React from "react";

// const Experience = () => {
//   return (
//     <section className="text-white bg-black body-font overflow-hidden">
//       <div className="container w-[90%] px-5 py-16 mx-auto">
//         <h1 className="text-4xl mb-12 text-white"> Experience </h1>
//         <div className="-my-8 divide-y-2 divide-white">
//           <div className="py-8 flex flex-wrap md:flex-nowrap">
//             <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//               <span className="font-semibold title-font text-white text-xl">
//                 Junior Frontend Engineer
//               </span>
//               <span className="mt-1 text-gray-300 text-sm">DevsquarePK</span>
//               <span className="mt-1 text-gray-300 text-sm">
//                 Karachi, Pakistan
//               </span>
//               <span className="mt-1 text-gray-300 text-sm">
//                 Oct 2022 - Present
//               </span>
//             </div>
//             <div className="md:flex-grow md:mx-10 mx-0">
//               <ul className="list-disc list-inside text-sm text-white">
//                 <li>
//                   Collaborated on the development of an in-house product using
//                   cutting-edge technologies such as Next.js, Node Js, React,
//                   TypeScript, and MUI.
//                 </li>
//                 <li>
//                   Overseeing the entire lifecycle from feature requirement
//                   gathering to successful deployment.
//                 </li>
//                 <li>
//                   Crafted multiple WordPress websites for clients, enhancing
//                   their digital presence and portfolios.
//                 </li>
//                 <li>
//                   Distinguished for my expertise in achieving pixel-perfect PSD
//                   to HTML conversions, utilizing Tailwind CSS and Bootstrap to
//                   ensure precision in design implementation.
//                 </li>
//                 <li>Integrated Next-Auth for customer authorization.</li>
//                 <li>
//                   Built shared components and showcase them in a Storybook.
//                 </li>
//                 <li>
//                   Started learning Node.js a few months ago, quickly grasping
//                   server-side development and handling backend tasks
//                   effectively.
//                 </li>
//                 <li>
//                   Demonstrated a strong ability to learn new technologies
//                   rapidly and apply them efficiently in projects.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Experience;
