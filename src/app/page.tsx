import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { AffiliateReward } from "@/components/AffiliateReward";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";
import { UnlockForm } from "@/components/UnlockForm";
import { DonateSection } from "@/components/DonateSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <Features />
        <Pricing />
        <AffiliateReward />
        <Testimonial />
        <FAQ />
        <UnlockForm />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}