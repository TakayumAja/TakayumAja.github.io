import React from "react";
import { HeroSection } from "../../components";

const HomePage = () => {
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto text-center flex flex-col gap-5 px-4 lg:px-0">
        <HeroSection />
      </div>
    </section>
  );
};

export default HomePage;
