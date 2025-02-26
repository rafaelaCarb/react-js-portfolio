import React from "react";
import Parallax from "./components/Parallax";

import Lenis from "lenis";
import { useEffect } from "react";

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
    </>
  );
};

export default App;
