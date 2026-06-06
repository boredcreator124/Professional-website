"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth) * 40 - 20;
      const y = (e.clientY / window.innerHeight) * 40 - 20;
      ref.current.style.setProperty("--x", `${x}px`);
      ref.current.style.setProperty("--y", `${y}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        maskImage:
          "radial-gradient(ellipse 80% 50% at 50% 50%, black 30%, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 50% at 50% 50%, black 30%, transparent 70%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "translate(var(--x, 0px), var(--y, 0px))",
          transition: "transform 0.3s ease-out",
        }}
      />
    </div>
  );
}
