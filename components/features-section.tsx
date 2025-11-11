"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, ...(cardsRef.current?.children || [])], {
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

      // Animate cards with stagger
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "프로세스 진단",
      description:
        " 문제와, 업무 흐름을 분석해 반복되는 작업, 비효율한 단계, AI로 자동화 및 의사결정 할 수 있는 영역을 찾아냅니다. 데이터 기반의 개선 기회를 2-3주 내 상세 리포트로 제공합니다.",
    },
    {
      title: "AI 자동화 설계 & 구현",
      description:
        "비즈니스 목표와 팀의 상황을 고려해 맞춤형 AI 도입 솔루션을 설계합니다. 파일럿부터 전면 확장까지 단계적으로 진행합니다.",
    },
    {
      title: "조직 문화 & 역량 강화",
      description:
        "아무리 좋은 툴도 문화 없이 정착되지 않습니다. 리더쉽, 실무진 맞춤형 워크숍, 온라인 교육을 통해 팀이 자연스럽게 새로운 방식을 수용하고 주도적으로 활용하도록 지원합니다.",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-12 text-center text-3xl font-bold text-foreground">
          서비스
        </h2>
        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
              <div className="bg-accent px-6 py-1">
                <h3 className="text-center text-lg font-light text-white">
                  {feature.title}
                </h3>
              </div>
              <div className="bg-background px-6 py-6">
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

