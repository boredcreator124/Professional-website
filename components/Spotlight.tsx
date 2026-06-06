"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!ref.current) return;
      ref.current.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        { duration: 3000, fill: "forwards", easing: "ease-out" }
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background:
          "radial-gradient(800px circle at 0px 0px, color-mix(in srgb, var(--accent) 3.5%, transparent), transparent 40%)",
      }}
    />
  );
}
