import React from "react";

const Education = () => {
  return (
    <section className="text-white body-font overflow-hidden">
      <div className="container w-[90%] px-5 py-16 mx-auto">
        <h1 className="text-4xl mb-12"> Education</h1>
        <div className="-my-8 divide-y-2 divide-white">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white text-xl">
                Matriculation
              </span>
              <span className="mt-1 text-gray-300 text-sm">The Educators</span>
              <span className="mt-1 text-gray-300 text-sm">
                March 2020 - May 2021
              </span>
            </div>
            <div className="md:flex-grow md:mx-10 mx-0">
              <ul className="list-disc list-inside text-sm">
                <li>
                  I studied computer science at The Educators School, laying a
                  strong foundation for my educational journey.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="-my-8 divide-y-2 divide-white">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white text-xl">
                FSC
              </span>
              <span className="mt-1 text-gray-300 text-sm">Govt. College</span>
              <span className="mt-1 text-gray-300 text-sm">2021 - 2023</span>
            </div>
            <div className="md:flex-grow md:mx-10 mx-0">
              <ul className="list-disc list-inside text-sm">
                <li>
                  At Govt College, my focus remained on computer science,
                  enhancing my analytical skills and knowledge.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="-my-8 divide-y-2 divide-white">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white text-xl">
                Degree
              </span>
              <span className="mt-1 text-gray-300 text-sm">Present</span>
            </div>
            <div className="md:flex-grow md:mx-10 mx-0">
              <ul className="list-disc list-inside text-sm">
                <li>
                  I am eagerly looking forward to enrolling in the university
                  once admissions open, where I'll continue my pursuit of
                  knowledge and growth in the field of computer science.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
