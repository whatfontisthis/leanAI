"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
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

  return (
    <section ref={sectionRef} id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`mb-8 text-center text-3xl font-bold text-foreground ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          회사소개
        </h2>
        <div className={`mx-auto max-w-3xl ${isVisible ? "animate-fade-in-delay-1" : "opacity-0"}`}>
          <div className="text-center mb-8">
            <p className="mb-6 text-muted leading-relaxed">
              <strong className="text-foreground">"바로 쓰는 실무 중심 AI, 가벼운 AX"</strong><br/>
              LeanAI는 빠른 의사결정이 가능한 10인 미만 스타트업을 위한 AI Transformation 파트너입니다.
            </p>
            <p className="mb-6 text-muted leading-relaxed">
              글로벌 AI 도입 실패율 74%의 문제를 해결하기 위해,<br/>
              고객의 AI 활용 성숙도에 맞춰 3단계 패키지를 제공하여 ROI를 극대화합니다.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">팀</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-2">이우빈</h4>
                <p className="text-sm text-muted mb-3">LeanAI Founder</p>
                <p className="text-sm text-muted leading-relaxed">
                  개발자 출신 PM, 스타트업 실무 경험<br/>
                  전) 글로벌 기업(구글, LG, 삼성, MS) AI 교육 개발 PM
                </p>
              </div>
              <div className="bg-surface rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-2">최은미 Ph.D</h4>
                <p className="text-sm text-muted mb-3">AX 조직진단 전문가</p>
                <p className="text-sm text-muted leading-relaxed">
                  현) 이화여자대학교 인재개발원 초빙교수<br/>
                  전) CJ제일제당 식품마케팅본부 그룹공채
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

