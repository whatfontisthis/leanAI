"use client";

import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
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

  const faqs = [
    {
      question: "프로세스 진단은 어떻게 진행되나요?",
      answer:
        "먼저 귀사의 주요 업무 프로세스를 파악하기 위해 실무진, 리더십팀과 만나 심층 인터뷰를 진행합니다. 그 다음 실제 업무 데이터를 분석해 반복되는 작업, 의사결정 지점, 병목 구간을 파악합니다. 마지막으로 조직의 변화 수용도를 평가한 후, 자동화 가능 영역과 우선순위, 예상 ROI를 담은 상세 진단 리포트를 2-3주 내 제공합니다.",
    },
    {
      question: "AI 도입에는 얼마나 시간이 걸리나요?",
      answer:
        "프로젝트의 복잡도에 따라 다릅니다. 간단한 단일 프로세스 자동화는 파일럿 단계에 2-4주, 전면 배포는 1-2개월이 소요됩니다. 복잡한 다중 시스템 통합이 필요하면 파일럿 2-3개월, 전면 확장 3-6개월을 예상하세요. 모든 단계에서 팀의 학습과 적응 속도를 고려해 일정을 조정합니다.",
    },
    {
      question: "우리 조직이 준비가 되지 않았으면 어떻게 하나요?",
      answer:
        "조직의 변화 수용도 평가는 진단 단계에 포함됩니다. 만약 즉시 도입이 어렵다면, 단계적인 문화 변화 로드맵을 제시하고, 작은 파일럿부터 시작해 팀의 신뢰를 먼저 쌓는 방식으로 진행할 수 있습니다. 성공 경험이 조직의 수용도를 크게 높입니다.",
    },
    {
      question: "도입 후 교육은 어떻게 제공되나요?",
      answer:
        "실무진을 위한 맞춤형 워크숍으로 새 도구의 기본부터 고급 활용법까지 가르칩니다. 온라인 교육 자료도 제공해 시간이 걸리는 팀원들도 따라올 수 있게 지원하고, 도입 후 3개월간 정기적인 사후 지원을 통해 실제 업무에서의 문제를 해결해드립니다.",
    },
    {
      question: "도입 후 효과가 없으면 어떻게 되나요?",
      answer:
        "진단 단계에서 예상 ROI를 명확히 제시하고, 도입 후 3개월 단위로 성과를 측정합니다. 만약 목표치를 달성하지 못하면 워크플로우를 함께 개선하거나 다른 방식을 시도합니다. 우리는 당신의 성공이 우리의 포트폴리오가 되는 만큼, 함께 성공에 도달할 때까지 노력합니다.",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <h2 className={`mb-12 text-center text-3xl font-bold text-foreground ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          자주 묻는 질문
        </h2>
        <div className={`mx-auto max-w-2xl ${isVisible ? "animate-fade-in-delay-1" : "opacity-0"}`}>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

