"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    phone: "",
    email: "",
    participants: "",
    region: "",
    budget: "",
    startDate: "",
    inquiry: "",
  });
  const [isRefining, setIsRefining] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Prevent scrolling and add padding to prevent content shift
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Also apply padding to fixed navbar
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";

      // Remove padding from navbar
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.paddingRight = "0px";
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";

      // Cleanup navbar padding
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.paddingRight = "0px";
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  const handleRefineInquiry = async () => {
    if (!formData.inquiry.trim()) {
      alert("문의 내용을 먼저 입력해주세요.");
      return;
    }

    setIsRefining(true);

    try {
      // Call our secure API route (API key stays on server)
      const response = await fetch("/api/refine-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inquiry: formData.inquiry
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to refine inquiry");
      }

      const data = await response.json();
      const refinedText = data.refinedText || formData.inquiry;

      setFormData({ ...formData, inquiry: refinedText });
    } catch (error) {
      console.error("Error refining inquiry:", error);
      alert("문의 내용 다듬기에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsRefining(false);
    }
  };

  const budgetOptions = [
    "100~200만원",
    "200~300만원",
    "300~400만원",
    "400만원 이상",
  ];

  const startDateOptions = [
    "1개월 이내",
    "2~3개월 이내",
    "4~6개월 이내",
    "7개월~1년 이내",
    "미정",
  ];

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
      style={{
        margin: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg border border-border p-8 max-h-[90vh] overflow-y-auto my-auto z-[70]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">문의하기</h2>
            <p className="text-sm text-muted">상담을 위한 정보를 입력해주세요</p>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                회사명 <span className="text-red-500">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                전화번호 <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                회신 받을 메일 주소 <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="participants" className="block text-sm font-medium text-foreground mb-2">
                예상 수강 인원(명)
              </label>
              <input
                id="participants"
                type="number"
                value={formData.participants}
                onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="region" className="block text-sm font-medium text-foreground mb-2">
                지역(오프라인인 경우)
              </label>
              <input
                id="region"
                type="text"
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </div>

          {/* Radio Button Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                가용 예산(안) <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {budgetOptions.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-3 rounded-sm border border-border cursor-pointer transition-colors ${
                      formData.budget === option
                        ? "bg-accent-soft border-accent"
                        : "bg-background hover:bg-surface"
                    }`}
                  >
                    <input
                      type="radio"
                      name="budget"
                      value={option}
                      required
                      checked={formData.budget === option}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="mr-3 w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                희망 교육 시작 일정 <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {startDateOptions.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-3 rounded-sm border border-border cursor-pointer transition-colors ${
                      formData.startDate === option
                        ? "bg-accent-soft border-accent"
                        : "bg-background hover:bg-surface"
                    }`}
                  >
                    <input
                      type="radio"
                      name="startDate"
                      value={option}
                      required
                      checked={formData.startDate === option}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="mr-3 w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-foreground">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry Text Area */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="inquiry" className="block text-sm font-medium text-foreground">
                상담 문의 내용
              </label>
              <Button
                type="button"
                variant="outline"
                size="default"
                onClick={handleRefineInquiry}
                disabled={isRefining || !formData.inquiry.trim()}
                className="text-sm px-6"
              >
                {isRefining ? "다듬는 중..." : "✨ AI로 다듬기"}
              </Button>
            </div>
            <p className="text-xs text-muted mb-3">
              ※ 교육 목적 및 수강 대상을 포함해 상담을 원하는 내용을 구체적으로 작성해 주시면, 더욱 빠르고 정확하게 안내해 드릴 수 있습니다.
            </p>
            <textarea
              id="inquiry"
              rows={6}
              value={formData.inquiry}
              onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              placeholder="상담 문의 내용을 입력하세요"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Button type="submit" className="w-full" size="lg">
              제출하기
            </Button>
            <Button type="button" variant="outline" className="w-full" size="lg" onClick={onClose}>
              취소
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

