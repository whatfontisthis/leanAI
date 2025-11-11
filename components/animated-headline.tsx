"use client";

export function AnimatedHeadline() {
  return (
    <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl ">
      AI 도입, 혼자 고민하지 마세요.<br />
      <span className="relative inline-block text-accent mt-2">
        LeanAI
        <span className="absolute bottom-0 left-0 h-2 w-full" style={{ backgroundColor: "rgba(10, 17, 114, 0.15)" }} />
      </span>
      와 함께하세요. 
    </h1>
  );
}

