import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dxlogo from "../assets/dxlogo.png";
import flye from "../assets/flye.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const taglineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const animateLetters = (element, baseDelay = 0) => {
      const text = element.innerText;
      element.innerHTML = "";

      [...text].forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        element.appendChild(span);
      });

      const letters = element.querySelectorAll("span");

      gsap.to(letters, {
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.05,
          from: "edges",
          ease: "power2.out",
        },
        duration: 0.8,
        delay: baseDelay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    };

    animateLetters(titleRef.current, 0.2);

    gsap.to(paragraphRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 100%",
        toggleActions: "play none none reset",
      },
    });

    gsap.to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.8,
      scrollTrigger: {
        trigger: taglineRef.current,
        start: "top 100%",
        toggleActions: "play none none reset",
      },
    });

    const experienceItems =
      containerRef.current.querySelectorAll(".experience-item");
    gsap.to(experienceItems, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="w-screen flex flex-col bg-white">
      <div className="h-fit py-7 w-full bg-black text-white px-4 flex flex-col md:flex-row justify-between pt-9">
        <h1 className="text-[8vw] sm:text-[100px]">
          <span ref={titleRef}>Sobre</span>
        </h1>
        <div className="w-full px-4 md:w-4/6 pt-3 space-y-10 md:space-y-24">
          <p
            ref={paragraphRef}
            className="text-base text-justify sm:text-2xl leading-loose opacity-0 transform translate-y-4"
          >
            Oi! Me chamo Rafaela, tenho 19 anos e estou quase me formando em
            Análise e Desenvolvimento de Sistemas na UTFPR, em Pato Branco.
            Comecei a faculdade aos 17 e, desde então, venho me apaixonando cada
            vez mais pelo desenvolvimento frontend. Já atuei como dev na Vision
            Car, onde trabalhei com React e Tailwind CSS. Hoje, tenho certeza de
            que é no frontend que quero me especializar. Gosto de aprender,
            encarar novos desafios e estou sempre em busca de evolução.
          </p>
          <div className="flex flex-col">
            <p
              ref={taglineRef}
              className="font-light opacity-0 transform translate-y-4"
            >
              MINHAS EXPERIÊNCIAS PROFISSIONAIS
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-wrap gap-4 mt-5">
                <div className="rounded-lg w-16 h-16 bg-[#444444] opacity-0 experience-item">
                  <img src={flye} className="rounded-md p-2" alt="Logo Flye" />
                </div>
                <div className="opacity-0 transform translate-x-4 experience-item">
                  <p>Suporte Técnico</p>
                  <p className="text-stone-400">08/23 - 01/24</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-5">
                <div className="rounded-lg w-16 h-16 bg-[#444444] opacity-0 experience-item">
                  <img src={dxlogo} className="rounded-md p-2" alt="Logo Dx" />
                </div>
                <div className="opacity-0 transform translate-x-4 experience-item">
                  <p>Desenvolvedora Frontend</p>
                  <p className="text-stone-400">04/24 - 03/25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
