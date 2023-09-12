import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const IntroSection = () => {
  return (
    <>
      <section className=" bg-[#0e2f4b] text-whit body-font">
        <div className="container w-[90%] mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-4xl font-extrabold mb-4">Ghazi Zaidi</h1>
            <p className="text-lg mb-4">
              Frontend Engineer with over a year of experience in designing and
              developing user-centric web interfaces, proficient in modern
              frontend technologies and passionate about delivering exceptional
              user experiences. Ever since i was a child, I was fascinated with
              the digital world. I spent hours tinkering with my computer,
              eagerly learning about programming languages and algorithms. My
              love for coding only grew stronger and I eventually decided to
              pursue a career as a JS React Developer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-yellow-500">
                <TwitterIcon />
              </a>
              <a href="#" className="text-2xl hover:text-yellow-500">
                <FacebookIcon />
              </a>
              <a href="#" className="text-2xl hover:text-yellow-500">
                <LinkedInIcon />
              </a>
              <a href="#" className="text-2xl hover:text-yellow-500">
                <GitHubIcon />
              </a>
              <a href="#" className="text-2xl hover:text-yellow-500">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src="/pol.jpeg" alt="poljpg" width={270} height={100} />
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;