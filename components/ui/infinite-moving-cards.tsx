"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    avatarUrl?: string;
    location?: string;
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

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
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
        "scroller relative z-20 m-auto overflow-hidden ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <blockquote
            key={item.name}
            className="border border-border w-full max-w-sm rounded-xl p-6 flex-shrink-0"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 rounded-full overflow-clip">
                <img
                  src={item.avatarUrl}
                  className="w-full h-full object-cover object-center "
                />
              </div>
              <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.60178 19H0.260742V8.80087C0.260742 6.05917 0.883478 3.97547 2.12895 2.54978C3.49897 1.06926 5.80309 0.219337 9.04131 0V4.85282C7.92039 4.85282 6.98629 5.26407 6.239 6.08658C5.86536 6.52525 5.67854 7.37518 5.67854 8.63637V10.1991H9.60178V19ZM24.1738 19H14.8328V8.80087C14.8328 6.05917 15.3932 4.05772 16.5141 2.79654C18.0087 1.15152 20.3751 0.219337 23.6133 0V4.85282C21.6828 4.85282 20.5931 5.70274 20.344 7.4026C20.2817 7.62194 20.2506 8.03319 20.2506 8.63637V10.1991H24.1738V19Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <h5 className="font-bold mb-1">
              {item.name}, <br /> {item.location}
            </h5>
            <p className="text-xs font-bold text-muted-foreground mb-5">
              {item.title}
            </p>

            <p>&#8212; {item.quote}</p>
          </blockquote>
        ))}
      </ul>
    </div>
  );
};
