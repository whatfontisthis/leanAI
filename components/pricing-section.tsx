"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface PricingSectionProps {
  onInquiryClick: () => void;
}

export function PricingSection({ onInquiryClick }: PricingSectionProps) {
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
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate cards with stagger
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: "AI 도입",
      description: "프로세스 자동화와 AI 솔루션 구현",
      features: [
        "프로세스 진단 및 분석",
        "AI 자동화 솔루션 설계",
        "맞춤형 AI 도구 구현",
        "기본 팀 교육 (2회)",
        "구현 후 1개월 지원",
      ],
    },
    {
      name: "파트너십",
      description: "장기 협력을 통한 조직 혁신",
      features: [
        "전사 프로세스 진단 및 로드맵",
        "지속적인 AI 솔루션 개발",
        "정기 워크숍 및 교육 프로그램",
        "조직 문화 혁신 컨설팅",
        "전담 매니저 배정",
        "우선 기술 지원",
      ],
      duration: "6개월 또는 1년 계약",
      popular: true,
    },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-16 text-center text-3xl font-bold text-foreground">
          가격
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* AI 도입 Plan */}
          <Card className="p-8 rounded-3xl border border-border flex flex-col min-h-[450px]">
            <div className="flex-grow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plans[0].name}</h3>
                <p className="text-sm text-muted mb-4">{plans[0].description}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plans[0].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-muted">
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

          {/* 챔바 할인 Card - Center */}
          <Card className="p-8 rounded-3xl bg-gradient-to-br from-accent to-accent/80 text-white border-2 border-accent shadow-2xl flex flex-col min-h-[450px]">
            <div className="text-center flex-grow">
              <div className="mb-4">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-semibold mb-4">
                  특별 할인
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-3">챔바 할인</h3>
              <div className="text-5xl font-bold mb-4">무료</div>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                현재 챔바 프로그램 참여 기업에게
                <br />
                모든 서비스를 무료로 제공합니다
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
                <p className="text-xs text-white/80 leading-relaxed">
                  ✓ AI 도입 서비스 전체 무료<br />
                  ✓ 파트너십 프로그램 무료<br />
                  ✓ 추가 비용 없음
                </p>
              </div>
            </div>
            <Button className="w-full bg-white text-accent hover:bg-white/90" size="lg" onClick={onInquiryClick}>
              지금 신청하기
            </Button>
          </Card>

          {/* 파트너십 Plan */}
          <Card className="p-8 rounded-3xl border-2 border-accent shadow-xl relative flex flex-col min-h-[450px]">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                추천
              </span>
            </div>

            <div className="flex-grow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plans[1].name}</h3>
                <p className="text-sm text-muted mb-4">{plans[1].description}</p>
                <p className="text-xs text-accent font-medium">{plans[1].duration}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plans[1].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-muted">
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
        </div>
      </div>
    </section>
  );
}

