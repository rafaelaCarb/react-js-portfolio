import React, { use } from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ia from "../assets/iafoto.png";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="sticky top-0 z-0">
      <div className="h-screen relative">
        <div className="absolute h-full flex items-center">
          <div className="h-screen w-screen flex justify-center items-end">
            <img src={ia} alt="" className="z-50" />
          </div>
          <div className="relative flex whitespace-nowrap font-jedira">
            <p ref={firstText} className="z-0 m-2 text-[228px]">
              Frontend Developer -
            </p>
            <p
              ref={secondText}
              className="z-0 m-2 text-[228px] absolute left-[100%]"
            >
              Frontend Developer -
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
