"use client";

import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedHeadline } from "./animated-headline";
import { gsap } from "@/lib/gsap";

export function HeroSection() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Set initial states
      gsap.set([badgeRef.current, headlineRef.current, subtitleRef.current, buttonsRef.current, bottomTextRef.current], {
        opacity: 0,
        y: 20,
      });

      // Animate in sequence
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          bottomTextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20 text-center">
        <div ref={badgeRef}>
          <Badge className="mb-6 text-sm px-4 py-1.5">AX 파트너십</Badge>
        </div>
        <div ref={headlineRef}>
          <AnimatedHeadline />
        </div>
        <p ref={subtitleRef} className="mx-auto mb-8 max-w-2xl font-medium text-muted">
          AI 실전 도입부터 정착까지, 조직의 변화가 있을때 까지 함께하겠습니다.
        </p>
        <div ref={buttonsRef} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">무료 상담 예약하기</Button>
          <Button size="lg" variant="outline">
            성공사례
          </Button>
        </div>
        
      </div>
    </section>
  );
}

