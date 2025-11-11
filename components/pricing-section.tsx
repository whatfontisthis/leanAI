"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function PricingSection() {
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

  const features = [
    "프로세스 진단",
    "AI 솔루션 설계",
    "팀 교육",
    "맞춤형 솔루션",
    "지속 지원",
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-12 text-center text-3xl font-bold text-foreground">
          가격
        </h2>
        <div ref={cardsRef} className="flex justify-center">
          <Card className="p-8 max-w-lg w-full">
            <div className="text-center mb-6">
              <div className="mb-2 text-3xl font-bold text-accent">무료</div>
              <div className="mb-4 text-sm text-muted">
                현재 챔바 할인으로 무료 진행
              </div>
            </div>
            <ul className="mb-8 space-y-3">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center justify-center text-muted">
                  <span className="mr-2 text-accent">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full" size="lg">문의하기</Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

