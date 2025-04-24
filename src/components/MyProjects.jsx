import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CornerRightDown, LockKeyhole } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

import vs from "../assets/vs.png";
import dx from "../assets/dx.png";
import ecommerce from "../assets/ecommerce.png";
import perfumaria from "../assets/perfumaria.png";

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mouseIn, setMouseIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef();
  const prevTimeRef = useRef(0);
  const titleRef = useRef(null);

  const data = [
    {
      id: 2,
      title: "Landing Page — Visioncar, Website",
      img: vs,
      icons: [FaReact, RiJavascriptLine],
    },
    {
      id: 3,
      title: "Landing Page — DxBrasil, Website",
      img: dx,
      icons: [FaReact, RiJavascriptLine],
    },
    {
      id: 4,
      title: "ReactTs — Ecommerce de Roupas",
      img: ecommerce,
      icons: [FaReact, TbBrandTypescript],
    },
    {
      id: 1,
      title: "Bootstrap — Projeto Perfumaria",
      img: perfumaria,
      icons: [FaReact],
    },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;

    const animateLetters = (element) => {
      const text = element.innerText;
      element.innerHTML = "";

      [...text].forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(40px)";
        element.appendChild(span);
      });

      const letters = element.querySelectorAll("span");

      gsap.to(letters, {
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.03,
          from: "edges", 
        },
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: "top 110%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      });
    };

    animateLetters(titleRef.current);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    if (
      cursorPosition.x === 0 &&
      cursorPosition.y === 0 &&
      mousePosition.x !== 0 &&
      mousePosition.y !== 0
    ) {
      setCursorPosition(mousePosition);
    }

    const smoothFollow = (timestamp) => {
      if (!prevTimeRef.current) prevTimeRef.current = timestamp;

      prevTimeRef.current = timestamp;
      const smoothFactor = 0.12;

      const dx = mousePosition.x - cursorPosition.x;
      const dy = mousePosition.y - cursorPosition.y;

      setCursorPosition((prev) => ({
        x: prev.x + dx * smoothFactor,
        y: prev.y + dy * smoothFactor,
      }));
      animationFrameRef.current = requestAnimationFrame(smoothFollow);
    };

    if (mousePosition.x !== 0 || mousePosition.y !== 0) {
      animationFrameRef.current = requestAnimationFrame(smoothFollow);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, cursorPosition, isMobile]);

  return (
    <div className="h-full w-screen px-4 overflow-x-hidden">
      <div className="w-full flex py-10 border-b items-center justify-start">
        <CornerRightDown size={70} className="hidden md:block" />
        <h1 ref={titleRef} className="text-5xl md:text-[80px]">
          Projetos
        </h1>
      </div>

      <div className="flex items-start justify-center">
        <div className="w-full">
          {data.map((work, index) => (
            <div
              onMouseEnter={() => !isMobile && setMouseIn(index + 1)}
              onMouseLeave={() => !isMobile && setMouseIn(false)}
              key={work.id}
              className="flex flex-col md:flex-row justify-between group p-6 md:p-10 border-b cursor-pointer hover:bg-black hover:text-white"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                {isMobile && (
                  <div 
                    className="bg-center bg-cover h-40 w-full mb-4 rounded-md"
                    style={{ backgroundImage: `url(${work.img})` }}
                  />
                )}
                
                <div className="flex items-center gap-2">
                  {work.icons.map((Icon, i) => (
                    <Icon key={i} size={25} />
                  ))}
                  <h1 className="text-xl md:text-2xl font-light capitalize">
                    {work.title}
                  </h1>
                </div>
              </div>
              <button className="mt-4 md:mt-0 text-xs rounded-sm p-2 border flex gap-1 bg-white text-black self-start md:self-center">
                <LockKeyhole size={14} />
                CONTATE PARA DETALHES
              </button>
            </div>
          ))}
        </div>
      </div>

      {!isMobile && (
        <div
          className="fixed z-50 pointer-events-none hidden md:block"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {mouseIn && (
            <div
              style={{ backgroundImage: `url(${data[mouseIn - 1].img})` }}
              className="bg-center bg-cover h-60 w-60 md:h-80 md:w-80 rounded-md"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MyProjects;