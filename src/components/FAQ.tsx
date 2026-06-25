"use client";

import { useState } from "react";
import {
  ChevronDown,
  Shield,
  HeartPulse,
  Gift,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Is the discount real or is there a catch?",
    answer:
      "The discount is real — NABV negotiated it directly with iWILL 'til I'm Well for all current members. There's no catch, no hidden fees, and no contract. You pay the member rate ($35 individual / $50 family) as long as you're a NABV member. Cancel anytime.",
    icon: Shield,
  },
  {
    question: "I have insurance and a vet already — why would I need this?",
    answer:
      "This doesn't replace insurance or your primary vet. It's a complement: $0 copay virtual visits for things insurance makes expensive or slow (urgent care, therapy, pet triage). Use it for after-hours questions, prescription refills, behavioral health, or when you can't get an appointment. Many members keep insurance for major events and use this for everything else.",
    icon: HeartPulse,
  },
  {
    question: "What's the catch with the affiliate reward?",
    answer:
      "No catch — it's a thank-you from NABV, not an MLM. After 90 days of active use (so you know the service), you qualify for a NABV-negotiated commission on revenue from members who enroll through your link. You don't sell anything. You just share a benefit you already use. The reward is optional and never the reason to join.",
    icon: Gift,
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="faq-heading"
            className="text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-4"
          >
            Questions from NABV members
          </h2>
          <p className="text-lg text-gray-600">
            The three things members ask before unlocking their rate.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group bg-white border border-primary-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-200 hover:shadow-lg hover:shadow-primary/10"
              open={openIndex === index}
            >
              <summary
                className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <faq.icon
                      className="w-5 h-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground pr-10">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="accent"
            size="lg"
            onClick={() =>
              document
                .getElementById("unlock-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Unlock My NABV Rate Now
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
