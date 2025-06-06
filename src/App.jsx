import React from "react";
import Parallax from "./components/Parallax";
import MyProjects from "./components/MyProjects";
import Lenis from "lenis";
import { useEffect } from "react";
import ContactMe from "./components/ContactMe";
const App = () => {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <>
      <Parallax />
      <MyProjects />
      <ContactMe />
    </>
  );
};

export default App;
