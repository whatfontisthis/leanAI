"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, ...(contentRef.current?.children || [])], {
        opacity: 0,
        y: 40,
      });

      // Animate title
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate content paragraphs with stagger
      gsap.to(contentRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-8 text-center text-3xl font-bold text-foreground">
          회사소개
        </h2>
        <div ref={contentRef} className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-muted leading-relaxed">
            AX(AI Transformation)를 실현하기 위해 필요한 것은 기술만이 아닙니다.<br/>
            진정한 변화는 AI를 받아들이고 함께 성장할 수 있는 조직 문화에서 시작됩니다.
          </p>
          <p className="mb-6 text-muted leading-relaxed">
            LeanAI는 개발자와 조직 전문가가 함께 만든 AI Transformation 파트너입니다.<br/>
            우리는 단순히 'AI 도구'를 제공하는데 그치지 않습니다.<br/>
            AI 도입이 실제 성과로 이어질 수 있도록, 솔루션 구축부터 교육, 그리고 조직 문화 변화까지 전 과정을 함께합니다.
          </p>
          <p className="text-muted leading-relaxed">
            사람이 잘하는 일은 사람이 하고, AI가 더 잘할 수 있는 일은 AI가 할 수 있도록 하는 것이 LeanAI의 철학입니다.<br/>
            이미 많은 사람들이 LeanAI와 함께 눈에 보이는 변화와 성과를 경험하고 있습니다. 여러분도 지금 바로 시작하세요.
          </p>
        </div>
      </div>
    </section>
  );
}

