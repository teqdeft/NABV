"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, HeartPulse, Stethoscope } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section 
      className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-primary-50/50 to-white"
      aria-labelledby="hero-heading"
    >
      <div className="container-main">
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <p className="font-script text-2xl lg:text-3xl text-primary font-medium mb-4 animate-fade-up">
              Your association secured this for you
            </p>
            <h1 
              id="hero-heading"
              className="text-4xl lg:text-5xl xl:text-[56px] font-bold leading-[1.1] text-foreground mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Whole-family virtual care — <span className="text-primary">already negotiated</span> for NABV members
            </h1>
            <p 
              className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Medical, Behavioral Health & TeleVet for you + up to 7 family members. 
              No copays. No surprise bills. Just care — unlocked with your member code.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button 
                variant="accent" 
                size="lg"
                className="group w-full sm:w-auto"
                onClick={() => document.getElementById('unlock-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Confirm My NABV Rate
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See What&apos;s Included
              </Button>
            </div>

            <div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                <span>NABV-negotiated rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                <span>Up to 8 people per family</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-primary" aria-hidden="true" />
                <span>No insurance needed</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl bg-primary-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <Image
                src="/images/hero-family-care.svg"
                alt="Family using virtual care on tablet with doctor on screen"
                fill
                className="object-cover relative z-10"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 max-w-sm mx-4 text-center shadow-xl">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <HeartPulse className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">Dr. Sarah Chen, MD</p>
                  <p className="text-sm text-gray-500">Family Medicine • Available now</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 lg:-left-10 w-32 h-32 rounded-full bg-warm-bg/50 animate-float-slow" aria-hidden="true" />
            <div className="absolute -top-4 -right-4 lg:-right-10 w-24 h-24 rounded-full bg-primary-100/50 animate-float-slower" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}