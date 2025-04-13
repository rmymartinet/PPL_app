"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface TableOfContentsProps {
  items: string[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: "-5% 0px -90% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const id = item.toLowerCase().replace(/\s+/g, "-");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      items.forEach((item) => {
        const id = item.toLowerCase().replace(/\s+/g, "-");
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id); // correction : active manuellement la section
    }
  };

  return (
    <aside className="sticky top-20 text-sm text-gray-800 px-4">
      <h4 className="mb-4 font-medium text-xs uppercase tracking-wide text-gray-500">
        Sur cette page
      </h4>

      <div className="relative pl-6">
        {/* Le tube vertical */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="absolute left-0 w-1 bg-black rounded-full transition-all duration-300"
            style={{
              height: `${100 / items.length}%`,
              top: `${
                (items.findIndex(
                  (item) => item.toLowerCase().replace(/\s+/g, "-") === activeId
                ) *
                  100) /
                items.length
              }%`,
            }}
          />
        </div>

        {/* Liste des sections */}
        <div className="space-y-3 ml-4">
          {items.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "-");
            const isActive = activeId === id;

            return (
              <div
                key={id}
                onClick={() => scrollToSection(id)}
                className={clsx(
                  "cursor-pointer transition-colors duration-200",
                  isActive
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-black"
                )}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
