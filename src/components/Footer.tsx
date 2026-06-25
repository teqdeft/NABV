import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="section-padding bg-primary text-white"
      role="contentinfo"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-4 mb-2">
              <Image
                src="/logos/iwill-logo-white.svg"
                alt="iWILL 'til I'm Well"
                height={32}
                width={150}
              />
              <Image
                src="/logos/nav-w-logo.svg"
                alt="NABV"
                height={32}
                width={200}
              />
            </div>
            <p className="text-primary-100 text-sm leading-relaxed">
              Whole-family virtual care — Medical, Behavioral Health &amp;
              TeleVet — negotiated exclusively for NABV members.
            </p>
          </div>

          <nav aria-label="Product">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-primary-100">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  What's Included
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-primary-100">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/insurance-disclaimer"
                  className="hover:text-white transition-colors"
                >
                  Insurance Disclaimer
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Contact">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-100">
              <li>
                <a
                  href="mailto:support@iwilltilimwell.com"
                  className="hover:text-white transition-colors"
                >
                  support@iwilltilimwell.com
                </a>
              </li>
              <li>
                <a
                  href="tel:18005550199"
                  className="hover:text-white transition-colors"
                >
                  1-800-555-0199
                </a>
              </li>
              <li>
                NABV Members:{" "}
                <a
                  href="mailto:members@nabv.org"
                  className="hover:text-white transition-colors"
                >
                  members@nabv.org
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-200">
              <strong>Important Disclaimer:</strong> iWILL 'til I'm Well does
              not sell, dispense, or ship any drugs or medications. This is a
              subscription for virtual care access only. Third-party discount
              programs are not insurance.
            </p>
            <p className="text-sm text-primary-300">
              © 2026 iWILL 'til I'm Well. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
