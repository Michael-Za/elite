"use client";

import React, { useEffect, useState } from "react";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export function NumberTicker({ 
  value, 
  suffix = "", 
  decimals = 0,
  duration = 2000 
}: NumberTickerProps) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(progress * value);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  if (!mounted) {
    return (
      <span>
        0{suffix}
      </span>
    );
  }

  return (
    <span>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
