"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function CaseStudies() {
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

      // Animate cards
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

  const cases = [
    {
      company: "콘텐츠 제작",
      result: "동영상 콘텐츠 원고 작성부터 영상 생성까지",
      description:
        "콘텐츠 제작 시간을 50% 이상 단축하고, 제작 속도를 2배 올렸습니다. 팀은 창의적인 기획과 검수에만 집중할 수 있게 되었습니다.",
    },
    {
      company: "프로젝트 관리",
      result: "회의록을 자동으로 작성해서 노션에 저장",
      description:
        "주간 회의록 작성 시간을 90% 이상 절감했습니다. AI가 회의 음성을 전사하고 핵심 내용을 요약하여 노션에 자동 저장합니다.",
    },
    {
      company: "문서 작성",
      result: "기획서, 결과보고서 등 자주 작성하는 폼에 AI를 도입하여 작성 시간 단축",
      description:
        "기획서와 결과보고서 작성 시간을 70% 이상 단축했습니다. AI가 템플릿과 데이터를 분석하여 초안을 자동 생성하고, 팀원들은 검토와 수정에만 집중합니다.",
    },
    {
      company: "조직 변화",
      result: "LeanAI 교육 프로그램을 통해 AI 중심 프로세스로 전환",
      description:
        "자체 AI 교육 시도가 실패했던 조직이 LeanAI의 맞춤형 교육 프로그램을 통해 실무 중심의 AI 활용법을 학습하고, 팀 전체가 AI 중심 업무 방식으로 전환하기 시작했습니다.",
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-12 text-center text-3xl font-bold text-foreground">
          성공사례
        </h2>
        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {cases.map((caseStudy, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 w-1/3">
                <h3 className="mb-3 text-xl font-semibold text-black">
                  {caseStudy.company}
                </h3>
                <p className="text-base font-light text-accent">
                  {caseStudy.result}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-muted leading-relaxed">{caseStudy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

