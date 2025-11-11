"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, ...(stepsRef.current?.children || [])], {
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

      // Animate steps with stagger
      gsap.to(stepsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "진단",
      description:
        "함께 업무 프로세스를 분석하고, AI로 자동화할 수 있는 기회와 조직의 준비 수준을 평가합니다.",
    },
    {
      number: "02",
      title: "설계",
      description:
        "함께 비즈니스 목표에 맞는 AI 솔루션을 설계합니다. 팀의 상황을 고려해 최적의 조합을 찾습니다.",
    },
    {
      number: "03",
      title: "구현",
      description:
        "함께 파일럿 프로그램을 시작하고, 팀원 교육을 시작합니다.",
    },
    {
      number: "04",
      title: "성장",
      description:
        "함께 조직 문화 정착과 ROI 극대화를 위한 모니터링 및 피드백 반영을 진행합니다.",
    },
  ];

  return (
    <section ref={sectionRef} id="process" className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-16 text-center text-3xl font-bold text-foreground">
          프로세스
        </h2>
        <div ref={stepsRef} className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 긴 가로선 하나 */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] z-0 hidden h-0.5 bg-border lg:block" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background text-2xl font-bold text-accent">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


