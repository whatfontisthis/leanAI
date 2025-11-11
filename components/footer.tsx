"use client";

import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Logo showSubheading={true} size="small" className="mb-4" />
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">서비스</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="#services">프로세스 진단</Link>
              </li>
              <li>
                <Link href="#services">AI 도입</Link>
              </li>
              <li>
                <Link href="#services">팀 교육</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">회사</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="#about">회사소개</Link>
              </li>
              <li>
                <Link href="#case-studies">성공사례</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">연락처</h4>
            <p className="text-sm text-muted">woobin.dev@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted">
          <p>© 2025 LeanAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

