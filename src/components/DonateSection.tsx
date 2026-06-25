"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DonateSection() {
  const paypalDonateUrl =
    process.env.NEXT_PUBLIC_PAYPAL_DONATE_URL ??
    "https://www.paypal.com/ncp/payment/83ZFTP5CLTNF4";

  return (
    <section
      className="section-padding bg-white border-t border-primary-100"
      aria-labelledby="donate-heading"
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-warm-bg text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" aria-hidden="true" />
            <span>Support Our Mission</span>
          </div>

          <h2
            id="donate-heading"
            className="text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-4"
          >
            Help us keep care accessible
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Your donation helps us expand virtual care access to more families.
            Every contribution makes a difference.
          </p>

          <Button
            variant="accent"
            className="w-auto bg-green-500 texxt-white"
            onClick={() =>
              window.open(paypalDonateUrl, "_blank", "noopener,noreferrer")
            }
          >
            <Heart className="w-4 h-4" aria-hidden="true" />
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
