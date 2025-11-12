"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "./logo";
import { LoginModal } from "./login-modal";

interface NavbarProps {
  onInquiryClick: () => void;
}

export function Navbar({ onInquiryClick }: NavbarProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-[60] w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Logo showSubheading={true} size="small" subheadingText="Your AX Partner" />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <Link href="#services" className="text-sm text-foreground hover:text-accent hover:font-bold transition-all">
            서비스
          </Link>
          <Link href="#pricing" className="text-sm text-foreground hover:text-accent hover:font-bold transition-all">
            가격
          </Link>
          <Link href="#process" className="text-sm text-foreground hover:text-accent hover:font-bold transition-all">
            프로세스
          </Link>
          <Link href="#case-studies" className="text-sm text-foreground hover:text-accent hover:font-bold transition-all">
            성공사례
          </Link>
          <Link href="#about" className="text-sm text-foreground hover:text-accent hover:font-bold transition-all">
            회사소개
          </Link>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" size="sm" onClick={() => setIsLoginModalOpen(true)}>
            로그인
          </Button>
          <Button size="sm" onClick={onInquiryClick}>문의하기</Button>
        </div>
        <MobileMenu
          onLoginClick={() => setIsLoginModalOpen(true)}
          onSignupClick={onInquiryClick}
        />
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      </div>
    </nav>
  );
}

