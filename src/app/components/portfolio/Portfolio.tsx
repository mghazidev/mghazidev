import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 py-20 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-black mb-6">Portfolio</h2>

        {/* Profile Image */}
        <Image
          width={180}
          height={180}
          className="rounded-full mb-10 object-cover "
          alt="profile"
          src="/ghazi_image_2.jpg"
        />

        {/* Subheading */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          Portfolio Link / Company Website
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          {/* Softex Button */}
          <Link href="https://softexsolution.com/" target="_blank">
            <div className="flex items-center gap-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 px-8 py-4 rounded-xl shadow-sm hover:shadow-md cursor-pointer min-w-[260px] justify-center">
              <Image
                src="/softex_logo.png"
                alt="Softex"
                width={48}
                height={48}
              />
              <span className="text-lg font-semibold text-gray-800 mt-[12px]">
                Softex Solutions
              </span>
            </div>
          </Link>

          {/* Github Button */}
          <Link href="https://github.com/mghazidev" target="_blank">
            <div className="flex items-center gap-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300 px-8 py-4 rounded-xl shadow-sm hover:shadow-md cursor-pointer min-w-[260px] justify-center">
              <Image src="/git.svg" alt="Github" width={38} height={38} />
              <span className="text-lg font-semibold text-gray-800 mt-[12px]">
                GitHub
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Portfolio = () => {
//   return (
//     <section className="text-gray-600 body-font bg-white">
//       <div className="container mx-auto flex flex-col px-5 py-16 justify-center items-center">
//         <h2 className="text-4xl font-extrabold mb-4 text-black">Portfolio</h2>
//         <Image
//           width={200}
//           height={200}
//           className="lg:w-1/6 md:w-1/6 w-1/4 mb-10 object-cover object-center rounded-full"
//           alt="profile"
//           src="/Profile.jpeg"
//         />
//         <div className="w-full md:w-2/3 flex flex-col mb-4 items-center text-center">
//           <h1 className="sm:text-sm text-sm mb-4 text-black">
//             Portfolio-Link / Company Website
//           </h1>
//           <div className="flex">
//             <Link href="https://softexsolution.com/">
//               <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
//                 <Image
//                   src="/softex_logo.png"
//                   alt="dpk"
//                   width={20}
//                   height={20}
//                 />
//                 <span className="ml-4 flex items-start flex-col leading-none">
//                   {/* <span className="title-font font-medium">DevsquarePk</span> */}
//                   <span className="title-font font-medium">
//                     Softex Solutions
//                   </span>
//                 </span>
//               </button>
//             </Link>
//             <Link href="https://github.com/mghazidev">
//               <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
//                 <Image src="/git.svg" alt="git" width={16} height={16} />
//                 <span className="ml-4 flex items-start flex-col leading-none">
//                   <span className="title-font font-medium">Github</span>
//                 </span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Portfolio;
