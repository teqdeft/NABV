"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-100">
      <div className="container-main flex items-center justify-between h-20 gap-4">
        <div className="flex items-center shrink-0 gap-4">
          <div className="h-12 w-auto flex items-center">
            <Image
              src="/images/IWTIW_Banner_logo.png"
              alt="iWILL 'til I'm Well"
              height={60}
              width={200}
              className="h-full w-auto"
              priority
            />
          </div>
          <div className="h-12 w-auto flex items-center ml-4 border-l border-primary-200 pl-4">
            <Image
              src="/images/NABV_logo.png"
              alt="NABV - National Association of Veterinary Business"
              height={24}
              width={74}
              className="h-full w-auto"
            />
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-2 shrink-0">
          <a
            href="#features"
            className="text-sm font-medium text-primary hover:text-primary-800 transition-colors"
          >
            What's Included
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-primary hover:text-primary-800 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-primary hover:text-primary-800 transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="default"
            className="hidden sm:inline-flex"
            onClick={() =>
              window.open("https://app.iwilltilimwell.com/login", "_blank")
            }
          >
            Sign In
          </Button>
          <Button
            variant="accent"
            className="w-auto"
            onClick={() =>
              window.open("https://app.iwilltilimwell.com/register", "_blank")
            }
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
