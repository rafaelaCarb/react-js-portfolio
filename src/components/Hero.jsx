import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ia from "../assets/imagem.png";

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
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="sticky overflow-hidden top-0 z-0">
      <div className="h-screen relative grid-background overflow-hidden">
        <div className="absolute h-full flex items-center" ref={slider}>
          <div className="relative flex whitespace-nowrap font-jedira">
            <p ref={firstText} className="z-0 m-2 text-[12vw] sm:text-[140px] md:text-[180px] lg:text-[228px]">
              &nbsp;Rafaela Carbelim Bandeira -
            </p>
            <p
              ref={secondText}
              className="z-0 m-2 absolute left-[99%] text-[12vw] sm:text-[140px] md:text-[180px] lg:text-[228px]"
            >
              &nbsp;Rafaela Carbelim Bandeira -
            </p>
          </div>
        </div>

        <img
          src={ia}
          alt="IA"
          className="z-20 absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] sm:w-[600px] md:w-[700px] lg:w-[870px] max-h-[90%] object-contain"
        />

        <div className="absolute z-30 bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl">
          <div className="bg-white/85 backdrop-blur-md border border-black/10 rounded-2xl p-4 md:p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-gray-500">
                  Portfolio 2026
                </p>
                <h1 className="text-2xl md:text-3xl font-semibold text-black">
                  Rafaela Carbelim Bandeira
                </h1>
                <p className="text-sm md:text-base text-gray-600">
                  Desenvolvedora Frontend • React, JavaScript, TypeScript e Next.js
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black text-white text-xs">
                  Pato Branco, PR
                </span>
                <span className="px-3 py-1 rounded-full bg-black text-white text-xs">
                  Full Stack Jr na Viasoft
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
