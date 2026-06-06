"use client";

import { useState, useEffect } from "react";

const sections = ["hero", "about", "projects", "contact"];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    };

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        });
        observer.observe(el);
        observers.push(observer);
      }
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, []);

  return activeSection;
}
