"use client"
import { useRef, useState, useEffect } from 'react';

export default function Stacks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const stacks = [
    { name: 'React', icon: 'M18.5 12a6.5 6.5 0 01-6.5 6.5A6.5 6.5 0 015.5 12a6.5 6.5 0 016.5-6.5A6.5 6.5 0 0118.5 12zM12 3v3m0 15v3' },
    { name: 'Next.js', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
    { name: 'Tailwind CSS', icon: 'M4 6h16M4 12h16M4 18h16' },
    { name: 'JavaScript', icon: 'M6 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { name: 'TypeScript', icon: 'M3 3h18v18H3V3zm9 4v10m-4-4h8' },
    { name: 'Node.js', icon: 'M12 4v16m-8-8h16' },
    { name: 'Next.js', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
    { name: 'Tailwind CSS', icon: 'M4 6h16M4 12h16M4 18h16' },
    { name: 'JavaScript', icon: 'M6 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { name: 'TypeScript', icon: 'M3 3h18v18H3V3zm9 4v10m-4-4h8' },
    { name: 'Node.js', icon: 'M12 4v16m-8-8h16' },
  ];

  const updateButtonVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft < scrollWidth - clientWidth - 1); // -1 for rounding errors
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateButtonVisibility);
      updateButtonVisibility(); // Initial check
      return () => container.removeEventListener('scroll', updateButtonVisibility);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="stacks" className="min-h-screen flex items-center justify-center z-10">
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth gap-4 py-4 px-2 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="card-stack flex-shrink-0 w-32 h-32 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center text-center shadow-md hover:bg-coral-500/20 transition-colors"
              >
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stack.icon} />
                </svg>
                <span className="text-sm font-semibold text-gray-400">{stack.name}</span>
              </div>
            ))}
          </div>
          {showNext && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full hover:bg-coral-500 transition-colors z-20"
              aria-label="Next stack"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}