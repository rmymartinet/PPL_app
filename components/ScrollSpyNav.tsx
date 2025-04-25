"use client";

import { useEffect, useRef, useState } from "react";

type ScrollSpyItem = {
  id: string;
  label: string;
};

type ScrollSpyNavProps = {
  items: ScrollSpyItem[];
};

export default function ScrollSpyNav({ items }: ScrollSpyNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [items]);

  return (
    <aside className=" right-10 top-32 z-50 hidden md:block">
      <div className="relative h-full flex items-start">
        {/* Barre verticale */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300 rounded-full" />

        <ul ref={containerRef} className="space-y-6 pl-6 relative">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="relative flex items-center group">
                {/* Dot */}
                <span
                  className={`w-3 h-3 rounded-full absolute left-[-26px] transition-all duration-300
                    ${isActive ? "bg-black scale-125" : "bg-gray-300"}`}
                />
                <a
                  href={`#${item.id}`}
                  className={`text-sm transition-colors font-medium ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-400 group-hover:text-black"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
