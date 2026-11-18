"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type TimelineRailProps = {
  children: React.ReactNode;
};

/**
 * Rail vertical dont le remplissage suit la progression du scroll dans la frise.
 * Rempli d’office si l’utilisateur préfère réduire les animations.
 */
export function TimelineRail({ children }: TimelineRailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          fillRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              end: "bottom 65%",
              scrub: 0.4,
            },
          },
        );

        gsap.utils
          .toArray<HTMLElement>("[data-timeline-node]")
          .forEach((node) => {
            ScrollTrigger.create({
              trigger: node,
              start: "top 65%",
              toggleClass: { targets: node, className: "is-active" },
            });
          });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(fillRef.current, { scaleY: 1 });
        gsap.utils
          .toArray<HTMLElement>("[data-timeline-node]")
          .forEach((node) => node.classList.add("is-active"));
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[5px] w-px bg-border"
      >
        <div
          ref={fillRef}
          className="h-full w-full origin-top bg-primary"
          style={{ transform: "scaleY(0)" }}
        />
      </div>
      {children}
    </div>
  );
}
