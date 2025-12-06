"use client";

import { useEffect, useRef, useState } from "react";

export function CaseStudies() {
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

  const cases = [
    {
      company: "수료증 발급 자동화",
      level: "AX Fundamental",
      metric: "98%",
      metricLabel: "시간 절감",
      result: "수작업 1시간 15분 → 자동화 1분 소요",
      description:
        "수료증 발급 업무를 완전 자동화하여 작업 시간을 98% 감소시켰습니다. 에러율 제로를 달성하고, 담당자는 다른 업무에 집중할 수 있게 되었습니다.",
    },
    {
      company: "교육 운영 자동화",
      level: "AX Leap",
      metric: "67%",
      metricLabel: "운영비용 절감",
      result: "Google Workspace 연동 강사 관리 및 교육 운영 자동화",
      description:
        "강사 출결, 일지, 현장 사진, 일정 관리, 데이터 통합을 자동화하여 운영 비용을 1/3로 절감했습니다. 서비스의 질적 관리도 크게 향상되었습니다.",
    },
    {
      company: "콘텐츠 제작 프로세스 재설계",
      level: "AX Leap",
      metric: "50%",
      metricLabel: "제작 기간 단축",
      result: "영상 40차시 납품: 6-8개월 → 3-4개월",
      description:
        "NotebookLM 도입 및 LLM 활용 자동 초안 생성, AI 검수를 통해 콘텐츠 제작 기간을 절반으로 단축했습니다. 팀은 창의적인 기획과 검수에만 집중할 수 있게 되었습니다.",
    },
    {
      company: "감정평가 파일럿",
      level: "AX Breakthrough",
      metric: "획기적",
      metricLabel: "인력/시간 절감",
      result: "AI 기반 OCR 및 데이터 표준화 솔루션",
      description:
        "감정평가서 DB 구축을 반자동화하여 투입 인력과 시간을 획기적으로 절감했습니다. ROI를 확보하며 지속 가능한 프로세스로 전환했습니다.",
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="py-20 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4">
        <h2 className={`mb-16 text-center text-3xl font-bold text-foreground ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          성공사례
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-6xl mx-auto px-4 md:px-0">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className={`relative group ${isVisible ? `fade-in-stagger-${index}` : "opacity-0"}`}
            >
              {/* Metric circle - large and bold */}
              <div className="absolute left-0 md:-left-4 top-0 flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                <div className="text-xl md:text-2xl font-bold leading-none">{caseStudy.metric}</div>
                <div className="text-xs mt-1 text-center px-2 leading-tight opacity-90">{caseStudy.metricLabel}</div>
              </div>

              {/* Content area with left padding for metric */}
              <div className="pl-20 md:pl-24 pt-2">
                <div className="mb-2">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded">
                    {caseStudy.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {caseStudy.company}
                </h3>

                {/* Result with accent bar */}
                <div className="relative pl-4 mb-4 border-l-4 border-accent">
                  <p className="text-sm font-medium text-accent leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

