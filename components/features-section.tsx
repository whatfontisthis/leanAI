"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

export function FeaturesSection() {
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

  const features = [
    {
      title: "AX Fundamental",
      price: "100만원",
      value: "반복 업무 제거",
      target: "AI/자동화 경험이 적고 즉각적 효율화가 필요한 스타트업",
      description:
        "Google Workspace 기반 업무 자동화, Slack 알림/봇 구축, Notion 데이터베이스 자동 업데이트, 기본 워크플로우 자동화 (n8n 3-5개 시나리오), 월 1회 유지보수",
    },
    {
      title: "AX Leap",
      price: "250만원",
      value: "AI로 업무 재설계",
      target: "자동화 경험이 있고 AI로 업무 고도화를 원하는 스타트업",
      description:
        "LLM 기반 지능형 자동화, 복잡한 멀티스텝 워크플로우 (n8n 10+ 시나리오), 커스텀 AI 에이전트 구축, Notion AI 통합, 주 1회 최적화 미팅",
    },
    {
      title: "AX Breakthrough",
      price: "맞춤형",
      value: "AI로 비즈니스 모델 혁신",
      target: "복잡한 비즈니스 프로세스를 가지며 AI를 핵심 경쟁력으로 만들고 싶은 기업",
      description:
        "완전 맞춤형 AI 솔루션 설계 및 구축, 다중 LLM 통합 (GPT, Claude 등), RAG 기반 기업 전용 지식 시스템",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`mb-12 text-center text-3xl font-bold text-foreground ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          서비스
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 ${isVisible ? `fade-in-stagger-${index}` : "opacity-0"}`}
            >
              <div className="bg-accent px-6 py-3">
                <h3 className="text-center text-lg font-bold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-center text-sm text-white/90">{feature.price}</p>
              </div>
              <div className="bg-background px-6 py-6">
                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {feature.value}
                  </span>
                  <p className="text-xs text-muted mt-2">{feature.target}</p>
                </div>
                <p className="text-muted leading-relaxed text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

