"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProcessSection } from "@/components/process-section";
import { CaseStudies } from "@/components/case-studies";
import { MarqueeTestimonials } from "@/components/marquee-testimonials";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { SignupModal } from "@/components/signup-modal";

const sectionDividerStyle: React.CSSProperties = {
  borderStyle: 'solid',
  borderWidth: '1px 0px 0px 0px',
  borderColor: '#034ea2',
  color: '#808080',
  lineHeight: '25.6px',
  margin: '0 auto',
  width: '1000px'
};

const spacerStyle: React.CSSProperties = {
  height: '140px'
};

const contentWrapperStyle: React.CSSProperties = {
  maxWidth: '1000px',
  margin: '0 auto',
  width: '100%'
};

export default function Home() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryModalOpen(true);
  const closeInquiryModal = () => setIsInquiryModalOpen(false);

  return (
    <main>
      <PageWrapper>
        <Navbar onInquiryClick={openInquiryModal} />

        <div style={contentWrapperStyle}>
          <HeroSection onInquiryClick={openInquiryModal} />
        </div>

        <hr style={sectionDividerStyle} />
        <div style={spacerStyle} />
        <div style={contentWrapperStyle}>
          <FeaturesSection />
        </div>
        <div style={spacerStyle} />
        <div style={contentWrapperStyle}>
          <ProcessSection />
        </div>
        <div style={spacerStyle} />
        <div style={contentWrapperStyle}>
          <CaseStudies />
        </div>



        <MarqueeTestimonials />

        <div style={spacerStyle} />


        <div style={contentWrapperStyle}>
          <PricingSection onInquiryClick={openInquiryModal} />
        </div>

        <div style={spacerStyle} />

        <div style={spacerStyle} />
        <div style={contentWrapperStyle}>
          <FAQSection />
        </div>
        <div style={spacerStyle} />

        <div style={contentWrapperStyle}>
          <AboutSection />
        </div>
        <div style={spacerStyle} />
        <Footer />

        {/* Inquiry Modal - Shared across all sections */}
        <SignupModal isOpen={isInquiryModalOpen} onClose={closeInquiryModal} />
      </PageWrapper>
    </main>
  );
}
