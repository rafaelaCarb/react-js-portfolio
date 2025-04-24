import Hero from "./Hero";
import AboutMe from "./AboutMe";
import React from "react";

const Parallax = () => {
  return (
    <>
      <main className="relative">
        <Hero />
        <div className="relative">
          {" "}
          <AboutMe />
        </div>
      </main>
    </>
  );
};

export default Parallax;
