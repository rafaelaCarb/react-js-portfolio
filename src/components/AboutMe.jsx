import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dxlogo from "../assets/dxlogo.png";
import flye from "../assets/flye.jpg";
import logoViasoft from "../assets/logo_viasoft.png";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const taglineRef = useRef(null);
  const containerRef = useRef(null);
  const experiences = [
    {
      id: 1,
      role: "Suporte Técnico",
      company: "Flye",
      period: "08/23 - 01/24",
      logo: flye,
      type: "image",
    },
    {
      id: 2,
      role: "Desenvolvedora Frontend",
      company: "DX Brasil",
      period: "04/24 - 03/25",
      logo: dxlogo,
      type: "image",
    },
    {
      id: 3,
      role: "Desenvolvedora Full Stack Jr",
      company: "Viasoft",
      period: "05/25 - atual",
      logo: logoViasoft,
      type: "image",
    },
  ];
  const highlights = [
    {
      title: "Modernização de legado",
      text: "Atualização de módulos e reestruturação de setores com foco em performance.",
    },
    {
      title: "Integração com APIs",
      text: "Trabalho alinhado ao backend para transformar regras de negócio em UI.",
    },
    {
      title: "Arquitetura Frontend",
      text: "Padrões de componentes, manutenibilidade e qualidade de código.",
    },
    {
      title: "Ferramentas com IA",
      text: "Desenvolvimento de chats de IA e recursos inteligentes para o negócio.",
    },
  ];
  const stack = [
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "REST APIs",
    "Git"
  ];

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
      <section className="w-full bg-black text-white">
        <div className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row gap-10">
          <h1 className="text-[12vw] sm:text-[100px] md:text-[120px]">
            <span ref={titleRef}>Sobre</span>
          </h1>
          <div className="w-full md:w-3/5 space-y-10 md:space-y-16">
            <p
              ref={paragraphRef}
              className="text-base text-justify sm:text-xl leading-loose opacity-0 transform translate-y-4"
            >
              Sou Rafaela Carbelim Bandeira, 20 anos, desenvolvedora frontend com
              foco em React, JavaScript, TypeScript e Next.js. Nasci em São José
              dos Campos (SP) e, aos 17 anos, me mudei para Pato Branco (PR) para
              cursar Análise e Desenvolvimento de Sistemas na UTFPR, concluída em
              dezembro de 2025. Hoje atuo como Desenvolvedora Full Stack Júnior na
              Viasoft, contribuindo com modernização de modulos, integração com
              APIs, interfaces em React e Tailwind CSS, e ferramentas com IA,
              incluindo chats de IA.
            </p>
            <div className="space-y-4">
              <p
                ref={taglineRef}
                className="font-light uppercase tracking-[0.3em] text-white/60 opacity-0 transform translate-y-4"
              >
                Experiência profissional
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {experiences.map((experience) => (
                  <div
                    key={experience.id}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 opacity-0 transform translate-x-4 experience-item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg w-12 h-12 bg-white/10 flex items-center justify-center">
                        {experience.type === "image" ? (
                          <img
                            src={experience.logo}
                            className="rounded-md p-2 w-full h-full object-contain"
                            alt={`Logo ${experience.company}`}
                          />
                        ) : (
                          <span className="text-sm font-semibold">
                            {experience.initials}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium leading-tight">
                          {experience.role}
                        </p>
                        <p className="text-white/60 text-sm">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm mt-3">
                      {experience.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="container mx-auto px-6 py-14 space-y-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl font-semibold">
                Foco e diferenciais
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Minha trajetória une autonomia, trabalho em equipe e vontade constante
                de evoluir. Gosto de transformar requisitos em interfaces claras,
                performáticas e bem estruturadas.
              </p>
            </div>
            <div className="rounded-2xl bg-black text-white p-5">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/10 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-gradient-to-br from-white via-[#f6f6f6] to-[#ececec] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    {item.title}
                  </p>
                  <p className="mt-3 text-base text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 h-full flex flex-col">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                Formação
              </p>
              <p className="mt-3 text-lg font-medium">Análise e Desenvolvimento de Sistemas — Universidade Tecnológica Federal do Paraná</p>
              <p className="text-sm text-gray-600 mt-3">
                Iniciado em 2023 - Conclusão em dezembro de 2025
              </p>
              <p className="text-sm text-gray-600 mt-auto pt-6 border-t border-black/10">
                Pato Branco, PR
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
