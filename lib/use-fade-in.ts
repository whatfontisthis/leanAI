"use client";

import { useEffect, useRef, useState } from "react";

export function useFadeIn(options?: { threshold?: number; delay?: number }) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options?.threshold]);

  return {
    ref: elementRef,
    className: isVisible ? "animate-fade-in" : "opacity-0",
  };
}

