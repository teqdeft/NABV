import type { Metadata } from "next";
import { DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NABV Member Access | iWILL 'til I'm Well",
  description: "Unlock your NABV-negotiated virtual care benefit. Whole-family medical, behavioral health, and TeleVet — already secured for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}