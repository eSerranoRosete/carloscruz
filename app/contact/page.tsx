"use client";

import { ScreenSection } from "@/components/blocks/ScreenSection";
import ContactForm from "@/components/contact/ContactForm";

export default function Page() {
  return (
    <ScreenSection className="relative overflow-clip">
      <div className="relative z-10">
        <ContactForm />
      </div>
      <div className="h-full absolute aspect-square rounded-full border border-primary scale-110 left-0 -translate-x-2/3 top-0 -translate-y-1/2"></div>
      <div className="h-full absolute aspect-square rounded-full border border-primary scale-90 left-0 -translate-x-2/3 top-0 -translate-y-1/2"></div>
      <div className="h-full absolute aspect-square rounded-full border border-primary scale-110 right-0 translate-x-2/3 bottom-0 translate-y-1/2"></div>
      <div className="h-full absolute aspect-square rounded-full border border-primary scale-90 right-0 translate-x-2/3 bottom-0 translate-y-1/2"></div>
    </ScreenSection>
  );
}
