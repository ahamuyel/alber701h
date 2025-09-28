"use client"
import { useRef, useState, useEffect } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiGithub,
  SiFigma,
  SiPostgresql,
  SiMysql,
  SiNginx,
  SiLinux,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export default function Stacks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const stacks = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "Git & GitHub", icon: SiGithub, color: "text-orange-500" },
    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "Nginx", icon: SiNginx, color: "text-green-600" },
    { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  ];

  const updateButtonVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateButtonVisibility);
      updateButtonVisibility();
      return () =>
        container.removeEventListener("scroll", updateButtonVisibility);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section
      id="stacks"
      className="min-h-screen flex items-center justify-center z-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Minhas Stacks
        </h2>
        <div className="relative">
          {showPrev && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full hover:bg-coral-500 transition-colors z-20"
              aria-label="Previous stack"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth gap-4 py-4 px-2 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {stacks.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <div
                  key={index}
                  className="card-stack flex-shrink-0 w-32 h-32 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center text-center shadow-md hover:bg-coral-500/20 transition-colors"
                >
                  <Icon className={`w-10 h-10 mb-2 ${stack.color}`} />
                  <span className="text-sm font-semibold text-gray-400">
                    {stack.name}
                  </span>
                </div>
              );
            })}
          </div>
          {showNext && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full hover:bg-coral-500 transition-colors z-20"
              aria-label="Next stack"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
