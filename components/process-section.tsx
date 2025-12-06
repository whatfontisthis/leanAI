"use client";

import { useEffect, useRef, useState } from "react";

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "작업 워크플로우 진단",
      description:
        "업무 프로세스를 분석하고, AI로 자동화할 수 있는 기회와 조직의 도입 준비도를 평가합니다.",
    },
    {
      number: "02",
      title: "AI 업무 프로세스 구축",
      description:
        "고객의 AI 활용 성숙도에 맞는 패키지를 선택하고, 필요한 만큼의 교육과 솔루션을 제공합니다.",
    },
    {
      number: "03",
      title: "확실한 ROI 실현",
      description:
        "실무에 바로 적용 가능한 AI 솔루션으로 즉각적인 성과를 확인하고, 지속적인 최적화를 진행합니다.",
    },
    {
      number: "04",
      title: "AX 도입 성공",
      description:
        "높은 학습 곡선과 문화 정착 실패의 반복 사이클을 깨고, 지속 가능한 AI 활용 조직으로 전환합니다.",
    },
  ];

  return (
    <section ref={sectionRef} id="process" className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <h2 className={`mb-16 text-center text-3xl font-bold text-foreground ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          프로세스
        </h2>
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {/* 긴 가로선 하나 */}
          <div className="absolute top-8 left-0 right-0 lg:left-[12.5%] lg:right-[12.5%] z-0 hidden h-0.5 bg-border lg:block" />
          
          {steps.map((step, index) => (
            <div key={index} className={`relative z-10 ${isVisible ? `fade-in-stagger-${index}` : "opacity-0"}`}>
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


