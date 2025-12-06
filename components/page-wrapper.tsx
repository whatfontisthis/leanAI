"use client";

import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <div className="min-h-screen overflow-x-hidden w-full">{children}</div>;
}

