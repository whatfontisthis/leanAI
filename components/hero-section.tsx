"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedHeadline } from "./animated-headline";

interface HeroSectionProps {
  onInquiryClick: () => void;
}

export function HeroSection({ onInquiryClick }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true); // Hero section appears immediately
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className={isVisible ? "animate-fade-in" : "opacity-0"}>
          <Badge className="mb-6 text-sm px-4 py-1.5">AX 파트너십</Badge>
        </div>
        <div className={isVisible ? "animate-fade-in-delay-1" : "opacity-0"}>
          <AnimatedHeadline />
        </div>
        <p className={`mx-auto mb-8 max-w-2xl font-medium text-muted ${isVisible ? "animate-fade-in-delay-2" : "opacity-0"}`}>
          바로 쓰는 실무 중심 AI, 가벼운 AX<br/>
          10인 미만 스타트업을 위한 AI Transformation 파트너
        </p>
        <div className={`flex flex-col items-center justify-center gap-4 sm:flex-row ${isVisible ? "animate-fade-in-delay-3" : "opacity-0"}`}>
          <Button size="lg" onClick={onInquiryClick}>무료 상담 예약하기</Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#case-studies">성공사례</a>
          </Button>
        </div>
        
      </div>
    </section>
  );
}

