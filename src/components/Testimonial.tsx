"use client";

import { Quote, Users } from "lucide-react";

export function Testimonial() {
  return (
    <section 
      className="section-padding bg-white"
      aria-labelledby="testimonial-heading"
    >
      <div className="container-main">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>Trusted by NABV members nationwide</span>
            </div>
          </div>

          <article 
            className="bg-primary-50 rounded-2xl p-8 md:p-12 relative"
          >
            <Quote className="w-12 h-12 text-primary-200 absolute top-6 left-6" aria-hidden="true" />
            
            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                &ldquo;We believe that our partnership not only enhances the value of NABV membership but also contributes to a more supportive and resilient veterinary community. We are excited about the potential for ongoing collaboration and the positive changes we can achieve together.&rdquo;
              </p>
              
              <footer className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">AJD</span>
                </div>
                <div>
                  <cite className="not-italic font-semibold text-foreground block">
                    Annie J. Daniel, PhD
                  </cite>
                  <span className="text-sm text-gray-500">
                    NABV Member
                  </span>
                </div>
              </footer>
            </blockquote>
          </article>
        </div>
      </div>
    </section>
  );
}