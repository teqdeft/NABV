"use client";

import { Button } from "@/components/ui/button";
import { Check, Users, Shield } from "lucide-react";

const plans = [
  {
    name: "Individual",
    price: 35,
    period: "/month",
    description: "Perfect for solo members",
    features: [
      "Unlimited Medical visits",
      "Clinically Determined Behavioral Health visits",
      "Unlimited TeleVet consults for a low Extra of $20",
      "1 member covered",
      "No copays, no deductibles",
      "Cancel anytime",
    ],
    cta: "Unlock Individual Access",
    popular: false,
  },
  {
    name: "Family",
    price: 50,
    period: "/month",
    description: "Best value — covers everyone",
    features: [
      "Everything in Individual",
      "Up to 8 family members",
      "Spouse/partner + dependents",
      "Shared family dashboard",
      "No copays, no deductibles",
      "Cancel anytime",
    ],
    cta: "Unlock Family Access",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding bg-primary-50/50"
      aria-labelledby="pricing-heading"
    >
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="pricing-heading"
            className="text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-4"
          >
            NABV-negotiated member rates
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Your association secured exclusive pricing. No hidden fees. No
            contracts.
          </p>
          {/* <div className="inline-flex items-center gap-2 bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>Promo code NABV000 applied automatically at unlock</span>
          </div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? "bg-white border-2 border-primary shadow-xl shadow-primary/10"
                  : "bg-white border border-primary-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  {plan.description}
                </h3>
                <h4 className="text-2xl font-bold text-foreground mb-1">
                  {plan.name}
                </h4>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8" role="list">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "accent" : "default"}
                size="lg"
                className="w-full"
                onClick={() =>
                  document
                    .getElementById("unlock-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            <strong>Promo code</strong> — Applied automatically when
            you unlock below. Code is also emailed for recovery. Enter it at
            checkout on app.iwilltilimwell.com/register.
          </p>
        </div>
      </div>
    </section>
  );
}
