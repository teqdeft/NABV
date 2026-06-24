"use client";

import { Gift, ArrowRight, Clock } from "lucide-react";

export function AffiliateReward() {
  return (
    <section 
      className="section-padding bg-white border-t border-primary-100"
      aria-labelledby="affiliate-heading"
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-warm-bg text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="w-4 h-4" aria-hidden="true" />
            <span>NABV Member Reward Program</span>
          </div>
          
          <h2 id="affiliate-heading" className="text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-4">
            After 90 days, earn from your referral
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            This isn&apos;t the reason to join — it&apos;s a thank-you. After 90 days of active use, 
            NABV-negotiated commissions let you earn from monthly revenue when colleagues enroll through you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-primary-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">90-Day Active Use</h3>
              </div>
              <p className="text-gray-600 text-sm">Use the service for your family. After 3 months, you qualify.</p>
            </div>
            
            <div className="p-6 bg-primary-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <ArrowRight className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">Share Your Link</h3>
              </div>
              <p className="text-gray-600 text-sm">Refer fellow NABV members. They get the same member rate.</p>
            </div>
            
            <div className="p-6 bg-primary-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="w-6 h-6 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">Earn Monthly</h3>
              </div>
              <p className="text-gray-600 text-sm">NABV-negotiated commission on revenue from your referrals.</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            <strong>This is a reward, not the lead reason.</strong> Join for your family&apos;s care. 
            The referral benefit is NABV&apos;s way of saying thank you for spreading the word.
          </p>
        </div>
      </div>
    </section>
  );
}