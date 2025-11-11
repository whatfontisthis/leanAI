"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export function MobileMenu({ onLoginClick, onSignupClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-border bg-background">
          <div className="flex flex-col gap-4 p-4">
            <Link href="#services" className="text-sm text-foreground">
              서비스
            </Link>
            <Link href="#pricing" className="text-sm text-foreground">
              가격
            </Link>
            <Link href="#process" className="text-sm text-foreground">
              프로세스
            </Link>
            <Link href="#case-studies" className="text-sm text-foreground">
              성공사례
            </Link>
            <Link href="#about" className="text-sm text-foreground">
              회사소개
            </Link>
            <div className="flex gap-2 pt-4">
              <Button variant="ghost" size="sm" className="flex-1" onClick={onLoginClick}>
                로그인
              </Button>
              <Button size="sm" className="flex-1" onClick={onSignupClick}>
                문의하기
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

