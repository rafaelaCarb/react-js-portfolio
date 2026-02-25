import React from "react";
import Parallax from "./components/Parallax";
import MyProjects from "./components/MyProjects";
import Lenis from "lenis";
import { useEffect } from "react";
import ContactMe from "./components/ContactMe";
const App = () => {

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) return;

    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Parallax />
      <MyProjects />
      <ContactMe />
    </>
  );
};

export default App;
