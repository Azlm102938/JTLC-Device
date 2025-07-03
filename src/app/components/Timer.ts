// useInactivityTimer.ts
"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function useInactivityTimer(
  redirectTo: string = "/dashboard",
  timeoutMs: number = 300000 // 300 secs (5 minutes)
) {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      router.push(redirectTo);
    }, timeoutMs);
  };

  useEffect(() => {
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "touchstart",
    ];

    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer(); // Initial run

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
}
