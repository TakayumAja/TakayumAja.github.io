import React from "react";
import ImageProfile from "../../assets/profile-asraf.png";

const AboutPage = () => {
  return (
    <section className="text-white">
      <div className="mx-auto container px-4">
        <div
          id="aboutWrapper"
          className="flex flex-col-reverse gap-4 md:flex-row items-center justify-between"
        >
          <div id="aboutme" className="md:w-3/6">
            <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl md:mb-6 mb-2">
              About Me
            </h1>
            <p className="leading-relaxed text-justify mb-4  md:text-base text-sm lg:text-lg">
              Hello, world! My name is Muhammad Asraf Takayuma. I'm a Junior
              Front-end Developer, Computer Science Student. I live in East
              Java, Indonesia. I was born in Banyuwangi on October 12, 2001 (21
              years old).
            </p>
            <p className="leading-relaxed text-justify  md:text-base text-sm lg:text-lg">
              I have experience as a Junior Web Developer. I have an interest in
              a career as a Front-end Developer. I’m a fast learner and
              self-taught. I have learned a lot of new technologies in the past
              few years by myself on the Internet.
            </p>
          </div>

          <div id="img" className="md:w-2/6">
            <img
              src={ImageProfile}
              alt="takayums"
              className="mx-auto w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
