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
          {/* Ensures MyProjects appears after scrolling */}
          <AboutMe />
        </div>
      </main>
    </>
  );
};

export default Parallax;
