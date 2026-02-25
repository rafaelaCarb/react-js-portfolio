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
import voors from "../assets/voors.png";

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
      id: 1,
      title: "Sistema ERP — Voors",
      subtitle:
        "Ferramentas com IA, modernização de módulos e evolução de legados.",
      img: voors,
      icons: [FaReact, TbBrandTypescript],
      tags: ["ERP", "React", "TypeScript", "Tailwind CSS"],
      badge: "Corporativo",
    },
    {
      id: 2,
      title: "Landing Page — Visioncar",
      subtitle: "Website institucional focado em apresentação de servicos.",
      img: vs,
      icons: [FaReact, RiJavascriptLine],
      tags: ["Landing Page", "React", "JavaScript"],
      badge: "Website",
    },
    {
      id: 3,
      title: "Landing Page — DxBrasil",
      subtitle: "Pagina institucional com layout responsivo e estrutura leve.",
      img: dx,
      icons: [FaReact, RiJavascriptLine],
      tags: ["Landing Page", "React", "JavaScript"],
      badge: "Website",
    },
    {
      id: 4,
      title: "ReactTS — Ecommerce de Roupas",
      subtitle: "Projeto de estudo com foco em componentização e fluxo de compra.",
      img: ecommerce,
      icons: [FaReact, TbBrandTypescript],
      tags: ["Ecommerce", "React", "TypeScript"],
      badge: "Projeto pessoal",
    },
    {
      id: 5,
      title: "Bootstrap — Projeto Perfumaria",
      subtitle: "Landing page simples para praticar layout e grid.",
      img: perfumaria,
      icons: [FaReact],
      tags: ["Landing Page", "Bootstrap"],
      badge: "Projeto pessoal",
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
    <div className="h-full w-screen px-3 sm:px-4 overflow-x-hidden">
      <div className="w-full py-10 border-b">
        <div className="flex items-center gap-4">
          <CornerRightDown size={70} className="hidden md:block" />
          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-[80px]">
            Projetos
          </h1>
        </div>
      </div>

      <div className="flex items-start justify-center">
        <div className="w-full">
          {data.map((work, index) => (
            <div
              onMouseEnter={() => !isMobile && setMouseIn(index + 1)}
              onMouseLeave={() => !isMobile && setMouseIn(false)}
              key={work.id}
              className="flex flex-col md:flex-row justify-between group p-5 sm:p-6 md:p-10 border border-black/10 md:border-b md:border-black/10 md:border-x-0 md:border-t-0 cursor-pointer transition-colors md:hover:bg-black md:hover:text-white rounded-2xl md:rounded-none bg-white md:bg-transparent shadow-sm md:shadow-none mb-4 md:mb-0"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                {isMobile && (
                  <div
                    className="bg-center bg-cover h-44 sm:h-48 w-full rounded-xl ring-1 ring-black/10"
                    style={{ backgroundImage: `url(${work.img})` }}
                  />
                )}

                <div className="flex flex-wrap items-center gap-2">
                  {work.icons.map((Icon, i) => (
                    <Icon key={i} size={22} />
                  ))}
                  <h1 className="text-xl md:text-2xl font-light capitalize">
                    {work.title}
                  </h1>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-500 md:group-hover:text-white/60">
                    {work.badge}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 md:group-hover:text-white/70 max-w-2xl">
                  {work.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 rounded-full border border-black/10 text-[10px] sm:text-xs text-gray-600 md:group-hover:text-white md:group-hover:border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-4 md:mt-0 text-xs rounded-sm p-2 border flex gap-1 bg-white text-black self-stretch md:self-center justify-center w-full md:w-auto">
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
