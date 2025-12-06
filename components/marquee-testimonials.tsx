"use client";

// Mask middle character(s) in name
const maskName = (name: string) => {
  if (name.length <= 2) return name;
  const firstChar = name[0];
  const lastChar = name[name.length - 1];
  const middleLength = name.length - 2;
  const masked = '*'.repeat(middleLength);
  return `${firstChar}${masked}${lastChar}`;
};

export function MarqueeTestimonials() {

  const testimonials = [
    {
      text: "LeanFlow와 함께한 변환이 정말 인상적이었습니다.",
      name: "김철수",
      avatar: "KS",
      color: "bg-accent",
    },
    {
      text: "AI 도입 과정이 체계적이고 전문적이었습니다.",
      name: "이영희",
      avatar: "YH",
      color: "bg-accent/90",
    },
    {
      text: "팀 교육이 실무에 바로 적용 가능했습니다.",
      name: "박민수",
      avatar: "MS",
      color: "bg-accent/80",
    },
    {
      text: "생산성이 크게 향상되었어요.",
      name: "정수진",
      avatar: "SJ",
      color: "bg-accent/70",
    },
    {
      text: "AI 활용법을 제대로 배울 수 있었습니다.",
      name: "최동욱",
      avatar: "DW",
      color: "bg-accent",
    },
  ];

  // Create seamless infinite loop by duplicating content multiple times
  // When first set completes, second set is in exact same position for seamless continuation
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-12 overflow-hidden">
      <div className="overflow-hidden w-full max-w-full">
        <div className="flex animate-marquee-left gap-6 w-fit">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-4"
            >
              {/* Avatar */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm`}>
                {testimonial.avatar}
              </div>
              
              {/* Speech Bubble */}
              <div className="relative bg-white border border-border rounded-2xl px-5 py-4 shadow-md max-w-xs">
                {/* Quote mark */}
                <div className="absolute top-1 left-2 text-3xl text-accent opacity-15 font-serif leading-none">"</div>

                <p className="text-sm text-foreground leading-relaxed relative z-10 pt-2">
                  {testimonial.text}
                </p>

                {/* Speech bubble tail pointing to avatar */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 bg-white border-l border-b border-border transform rotate-45"></div>
                </div>

                <div className="mt-2 text-xs text-muted font-medium">
                  - {maskName(testimonial.name)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

