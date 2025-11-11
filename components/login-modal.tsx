"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-lg border border-border p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">로그인</h2>
            <p className="text-sm text-muted">계정에 로그인하세요</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                이메일
              </label>
              <input
                id="email"
                type="email"
                placeholder="이메일을 입력하세요"
                className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button className="w-full" size="lg">
              로그인
            </Button>
            <Button variant="outline" className="w-full" size="lg" onClick={onClose}>
              취소
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted">
              계정이 없으신가요?{" "}
              <button className="text-accent hover:underline font-medium">
                회원가입
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

