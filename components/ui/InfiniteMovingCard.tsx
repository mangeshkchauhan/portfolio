"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const hasInitRef = React.useRef(false);

  useEffect(() => {
    if (!(containerRef.current && scrollerRef.current)) return;

    // Duplicate items once to enable seamless scroll
    if (!hasInitRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current!.appendChild(duplicatedItem);
      });
      hasInitRef.current = true;
    }

    // Apply direction
    if (direction === "left") {
      containerRef.current.style.setProperty("--animation-direction", "forwards");
    } else {
      containerRef.current.style.setProperty("--animation-direction", "reverse");
    }

    // Apply speed
    if (speed === "fast") {
      containerRef.current.style.setProperty("--animation-duration", "20s");
    } else if (speed === "normal") {
      containerRef.current.style.setProperty("--animation-duration", "40s");
    } else {
      containerRef.current.style.setProperty("--animation-duration", "80s");
    }

    setStart(true);
  }, [direction, speed]);
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 sm:gap-8 md:gap-12 lg:gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="group w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[25vw] max-w-full relative flex-shrink-0 rounded-2xl glass border-white/[0.08] p-5 sm:p-6 md:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-black/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_10px_25px_rgba(0,0,0,0.5)]"
            key={idx}
          >
            {/* Decorative glows */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(80%_50%_at_50%_-20%,hsl(var(--brand-primary)/0.15),transparent)]" />
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

            <blockquote className="relative z-10">
              {/* Quote mark */}
              <div className="mb-3 sm:mb-4 text-brand-primary/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  aria-hidden
                >
                  <path d="M7.17 6C4.86 6 3 7.86 3 10.17 3 12.49 4.86 14.34 7.17 14.34c.45 0 .88-.08 1.28-.22-.51 2.09-2.17 3.61-4.45 4.04a.75.75 0 0 0 .14 1.49c4.12-.8 6.86-3.94 6.86-8.15C11 8.2 9.14 6 7.17 6Zm9.66 0C14.52 6 12.66 7.86 12.66 10.17c0 2.32 1.86 4.17 4.17 4.17.45 0 .88-.08 1.28-.22-.51 2.09-2.17 3.61-4.45 4.04a.75.75 0 0 0 .14 1.49c4.12-.8 6.86-3.94 6.86-8.15C21 8.2 19.14 6 16.83 6Z" />
                </svg>
              </div>

              <p className="leading-relaxed text-text-primary text-body-md sm:text-body-lg font-normal font-sans">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-6 sm:mt-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-primary/60" />
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-semibold leading-tight text-text-primary font-season">
                      {item.name}
                    </span>
                    <span className="text-body-sm leading-snug text-text-secondary font-normal font-sans">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
