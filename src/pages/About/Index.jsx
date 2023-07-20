import React from "react";
import ImageProfile from "../../assets/profile-asraf.png";
import LogoJs from "../../assets/javascript.png";
import LogoHtml from "../../assets/html5.png";
import LogoCss from "../../assets/css3.png";
import LogoPy from "../../assets/python.png";
import LogoMysql from "../../assets/mysql.png";
import LogoBootstrap from "../../assets/bootstrap.png";
import LogoFigma from "../../assets/figma.png";
import LogoReact from "../../assets/react.png";
import LogoTailwindcss from "../../assets/tailwindcss.png";
import LogoRedux from "../../assets/redux.png";

const AboutPage = () => {
  return (
    <section className="text-white">
      <div className="mx-auto container px-4">
        <div
          id="aboutWrapper"
          className="flex flex-col-reverse gap-4 md:flex-row items-center justify-between mb-12"
        >
          <div
            id="aboutme"
            className="md:w-3/6 flex flex-col items-center md:items-start"
          >
            <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl md:mb-6 mb-2">
              About Me
            </h1>
            <p className="leading-relaxed text-justify mb-4  md:text-base text-sm lg:text-lg">
              Hello, world! My name is Muhammad Asraf Takayuma. I'm a Junior
              Front-end Developer, Computer Science Student. I live in East
              Java, Indonesia. I was born in Banyuwangi on October 12, 2001 (21
              years old).
            </p>
            <p className="leading-relaxed text-justify  md:text-base text-sm lg:text-lg lg:mb-8 mb-4">
              I have experience as a Junior Web Developer. I have an interest in
              a career as a Front-end Developer. I’m a fast learner and
              self-taught. I have learned a lot of new technologies in the past
              few years by myself on the Internet.
            </p>
            <button className="px-4 py-4 md:px-6 rounded-lg bg-blue-600 font-semibold">
              Download Cv
            </button>
          </div>

          <div id="img" className="md:w-2/6">
            <img
              src={ImageProfile}
              alt="takayums"
              className="mx-auto w-full h-auto"
            />
          </div>
        </div>

        <div className="lg:flex lg:justify-between lg:gap-16">
          <div id="experience" className="mb-10 lg:w-3/6">
            <h2 className="text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white">
              Education
            </h2>
            <div id="item mb-4" className="mb-6">
              <p className="text-lg font-medium">
                Habibullah Islamic Boarding School
              </p>
              <div className="flex justify-between text-gray-400 text-sm border-b-2 border-blue-500 pb-6">
                <p>Junior High School</p>
                <p>2013-2016</p>
              </div>
            </div>
            <div id="item mb-4" className="mb-6">
              <p className="text-lg font-medium">Man 2 Banyuwangi</p>
              <div className="flex justify-between text-gray-400 text-sm border-b-2 border-blue-500 pb-6">
                <p>Natural Science</p>
                <p>2016-2019</p>
              </div>
            </div>
            <div id="item mb-4" className="mb-6">
              <p className="text-lg font-medium">University of Jember</p>
              <div className="flex justify-between text-gray-400 text-sm border-b-2 border-blue-500 pb-6">
                <p>Computer Science</p>
                <p>2019-Present</p>
              </div>
            </div>
          </div>

          <div id="experience" className="mb-10 lg:w-3/6">
            <h2 className="text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white">
              Experience
            </h2>
            <div id="item mb-4" className="mb-6">
              <p className="text-lg font-medium">MSIB Kampus Merdeka</p>
              <div className="flex justify-between text-gray-400 text-sm border-b-2 border-blue-500 pb-6">
                <p>React JS Front-End Engineer</p>
                <p>2021-2022</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h1 className="font-semibold text-3xl xl:text-4xl mb-6 text-center">
            Skills
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <img src={LogoHtml} alt="Html Logo" className="w-[120px] h-auto" />
            <img src={LogoCss} alt="Css Logo" className="w-[120px] h-auto" />
            <img
              src={LogoJs}
              alt="Javascript Logo"
              className="w-[120px] h-auto"
            />
            <img src={LogoPy} alt="Python Logo" className="w-[120px] h-auto" />
            <img
              src={LogoMysql}
              alt="Mysql Logo"
              className="w-[120px] h-auto"
            />
            <img
              src={LogoBootstrap}
              alt="Bootstrap Logo"
              className="w-[120px] h-auto"
            />
            <img
              src={LogoTailwindcss}
              alt="Tailwindcss Logo"
              className="w-[120px] h-auto"
            />
            <img
              src={LogoReact}
              alt="Reactjs Logo"
              className="w-[120px] h-auto"
            />
            <img
              src={LogoRedux}
              alt="Redux Logo"
              className="w-[120px] h-auto"
            />
            <img
              src={LogoFigma}
              alt="Figma Logo"
              className="w-[120px] h-auto"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutPage;
