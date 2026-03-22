"use client";

import { useEffect, useState } from "react";

interface PageIntroProps {
  text: string;
  isDarkMode?: boolean;
  onComplete?: () => void;
}

export function PageIntro({ text, isDarkMode = false, onComplete }: PageIntroProps) {
  const [hidden, setHidden] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(() => {
        onComplete?.();
      }, 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        hidden ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
      style={{
        background: isDarkMode ? "#0a0a0a" : "#ffffff",
      }}
    >
      <div
        className="flex items-center gap-1"
        style={{
          color: isDarkMode ? "#ffffff" : "#0a0a0a",
        }}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              fontWeight: 300,
              letterSpacing: "0.5em",
              opacity: started ? 1 : 0,
              transform: started ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}
