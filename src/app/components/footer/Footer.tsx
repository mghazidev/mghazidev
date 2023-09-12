import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white bg-[#0e2f4b] body-font">
      <div className="container w-[90%] px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <Image src="/log.png" alt="logoimage" width={70} height={10} />
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Ghazi Zaidi. All Rights Reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 gap-3 justify-center sm:justify-start">
          <Link
            href="https://twitter.com/Ghazi99418953"
            className="text-2xl hover:text-yellow-500"
          >
            <TwitterIcon />
          </Link>
          <Link
            href="https://www.facebook.com/people/Ghazi-Mohammad/pfbid026mHsRRaNgGy3EkAAT6rPXXwWhz8njhSkpFT6U4Va3N2HyzMZ7TJm7CXXz1hbgB5vl/"
            className="text-2xl hover:text-yellow-500"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mghazidev/"
            className="text-2xl hover:text-yellow-500"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/mghazidev"
            className="text-2xl hover:text-yellow-500"
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.instagram.com/mghazidev/"
            className="text-2xl hover:text-yellow-500"
          >
            <InstagramIcon />
          </Link>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
