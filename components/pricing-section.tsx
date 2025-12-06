"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  onInquiryClick: () => void;
}

export function PricingSection({ onInquiryClick }: PricingSectionProps) {
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

  const plans = [
    {
      name: "AX Fundamental",
      price: "100만원",
      value: "반복 업무 제거",
      target: "AI/자동화 경험이 적고 즉각적 효율화가 필요한 스타트업",
      features: [
        "Google Workspace 기반 업무 자동화 (AppScript)",
        "Slack 알림/봇 구축",
        "Notion 데이터베이스 자동 업데이트",
        "기본 워크플로우 자동화 (n8n 3-5개 시나리오)",
        "월 1회 유지보수",
      ],
    },
    {
      name: "AX Leap",
      price: "250만원",
      value: "AI로 업무 재설계",
      target: "자동화 경험이 있고 AI로 업무 고도화를 원하는 스타트업",
      features: [
        "LLM 기반 지능형 자동화",
        "복잡한 멀티스텝 워크플로우 (n8n 10+ 시나리오)",
        "커스텀 AI 에이전트 구축",
        "Notion AI 통합",
        "주 1회 최적화 미팅",
      ],
      popular: true,
    },
    {
      name: "AX Breakthrough",
      price: "맞춤형",
      value: "AI로 비즈니스 모델 혁신",
      target: "복잡한 비즈니스 프로세스를 가지며 AI를 핵심 경쟁력으로 만들고 싶은 기업",
      features: [
        "완전 맞춤형 AI 솔루션 설계 및 구축",
        "다중 LLM 통합 (GPT, Claude 등)",
        "RAG 기반 기업 전용 지식 시스템",
        "전담 컨설턴트 배정",
        "지속적인 최적화 및 확장 지원",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className={`mb-16 text-center text-3xl font-bold text-foreground ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          가격
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* AX Fundamental */}
          <Card className={`p-8 rounded-3xl border border-border flex flex-col min-h-[500px] ${isVisible ? "fade-in-stagger-0" : "opacity-0"}`}>
            <div className="flex-grow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plans[0].name}</h3>
                <div className="text-3xl font-bold text-accent mb-2">{plans[0].price}</div>
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {plans[0].value}
                </span>
                <p className="text-xs text-muted mt-2">{plans[0].target}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plans[0].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-muted text-sm">
                    <span className="mr-3 text-accent font-bold text-lg leading-none">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full" size="lg" variant="outline" onClick={onInquiryClick}>
              문의하기
            </Button>
          </Card>

          {/* AX Leap - Popular */}
          <Card className={`p-8 rounded-3xl border-2 border-accent shadow-xl relative flex flex-col min-h-[500px] ${isVisible ? "fade-in-stagger-1" : "opacity-0"}`}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                추천
              </span>
            </div>

            <div className="flex-grow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plans[1].name}</h3>
                <div className="text-3xl font-bold text-accent mb-2">{plans[1].price}</div>
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {plans[1].value}
                </span>
                <p className="text-xs text-muted mt-2">{plans[1].target}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plans[1].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-muted text-sm">
                    <span className="mr-3 text-accent font-bold text-lg leading-none">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full" size="lg" onClick={onInquiryClick}>
              문의하기
            </Button>
          </Card>

          {/* AX Breakthrough */}
          <Card className={`p-8 rounded-3xl border border-border flex flex-col min-h-[500px] ${isVisible ? "fade-in-stagger-2" : "opacity-0"}`}>
            <div className="flex-grow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plans[2].name}</h3>
                <div className="text-3xl font-bold text-accent mb-2">{plans[2].price}</div>
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {plans[2].value}
                </span>
                <p className="text-xs text-muted mt-2">{plans[2].target}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plans[2].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-muted text-sm">
                    <span className="mr-3 text-accent font-bold text-lg leading-none">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full" size="lg" variant="outline" onClick={onInquiryClick}>
              문의하기
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

