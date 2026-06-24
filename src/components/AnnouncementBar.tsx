"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="announcement-bar bg-primary w-full">
      <div className="container-main flex items-center justify-center gap-3 pr-8">
        <span className="font-medium text-white">
          Exclusive for NABV Members: Virtual care for your whole family — already negotiated.
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-md transition-colors text-white"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}