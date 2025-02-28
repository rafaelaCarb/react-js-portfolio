import React, { useState, useEffect, useRef } from "react";
import { CornerRightDown, LockKeyhole } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
const MyProjects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mouseIn, setMouseIn] = useState(false);
  const animationFrameRef = useRef();
  const prevTimeRef = useRef(0);

  const data = [
    {
      id: 2,
      title: "Landing Page — Visioncar, Website",
      img: "https://cdn.dribbble.com/userupload/16392755/file/original-f7a203380bfddfe2f4a3689e573e8be3.png?resize=1024x768&vertical=center",
      icons: [FaReact, RiJavascriptLine],
    },
    {
      id: 3,
      title: "Landing Page — DxBrasil, Website",
      img: "https://cdn.dribbble.com/userupload/18315901/file/original-d593e8e2cbd31d02eedfd61df3b74717.png?resize=1024x768&vertical=center",
      icons: [FaReact, RiJavascriptLine],
    },
    {
      id: 4,
      title: "ReactTs — Ecommerce de Roupas",
      img: "https://cdn.dribbble.com/userupload/18315901/file/original-d593e8e2cbd31d02eedfd61df3b74717.png?resize=1024x768&vertical=center",
      icons: [FaReact, TbBrandTypescript],
    },
    {
      id: 1,
      title: "Bootstrap — Projeto Perfumaria",
      img: "https://cdn.dribbble.com/userupload/17128713/file/original-e79aaeacea8897d40c36b1dedb395ab0.png?resize=1024x768&vertical=center",
      icons: [FaReact],
    },
  ];

  useEffect(() => {
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
  }, []);

  useEffect(() => {
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
  }, [mousePosition, cursorPosition]);

  return (
    <div className="h-screen w-full px-4">
      <div
        className="fixed z-50 pointer-events-none"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {mouseIn && (
          <div
            style={{ backgroundImage: `url(${data[mouseIn - 1].img})` }}
            className="bg-center bg-cover h-80 w-64 rounded-md"
          ></div>
        )}
      </div>

      <div className="w-full flex py-10 border-b items-center justify-start">
        <CornerRightDown size={70} /> <p className="text-[80px]">Projetos</p>
      </div>

      <div className="flex items-start justify-center">
        <div className="w-full">
          {data.map((work, index) => (
            <div
              onMouseEnter={() => setMouseIn(index + 1)}
              onMouseLeave={() => setMouseIn(false)}
              key={work.id}
              className="flex justify-between group p-10 border-b cursor-pointer hover:bg-black hover:text-white"
            >
              <div className="flex items-center gap-2">
                {work.icons.map((Icon, i) => (
                  <Icon key={i} className="" size={25}/>
                ))}
                <h1 className="text-2xl font-light capitalize">{work.title}</h1>
              </div>
              <button className="text-xs rounded-sm p-2 border flex gap-1 bg-white text-black">
                <LockKeyhole size={14} />
                CONTACT FOR DETAILS
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
