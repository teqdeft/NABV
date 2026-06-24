"use client";

import { Stethoscope, Brain, PawPrint, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Medical Care",
    description: "Unlimited virtual visits for urgent care, primary care, and chronic condition management — for every family member.",
    outcome: "Get a prescription or care plan in minutes, not hours.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Behavioral Health",
    description: "Licensed therapists for anxiety, depression, stress, parenting support, and more — available on your schedule.",
    outcome: "Book a session this week, not next month.",
    color: "primary",
  },
  {
    icon: PawPrint,
    title: "TeleVet",
    description: "Video consults for your pets — wellness checks, skin issues, behavioral concerns, and after-hours triage.",
    outcome: "Avoid the emergency vet for non-critical issues.",
    color: "primary",
  },
];

export function Features() {
  return (
    <section 
      id="features"
      className="section-padding bg-white"
      aria-labelledby="features-heading"
    >
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="features-heading" className="text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-4">
            What&apos;s included for your whole family
          </h2>
          <p className="text-lg text-gray-600">
            Three care pillars. One membership. Every person (and pet) in your household covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative bg-white border border-primary-100 rounded-2xl p-8 transition-all duration-500 hover:border-primary-200 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.color}-100 flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="flex items-start gap-3 text-primary">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-medium">{feature.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}