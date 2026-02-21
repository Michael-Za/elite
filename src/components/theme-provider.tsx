"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "glass-light" | "glass-dark" | "ios-classic" | "aurora";
type Platform = "ios" | "android" | "web";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  platform: Platform;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("glass-light");
  const [platform, setPlatform] = useState<Platform>("web");

  useEffect(() => {
    // Platform detection
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(ua)) setPlatform("ios");
    else if (/Android/.test(ua)) setPlatform("android");
    else setPlatform("web");

    // Persist preference
    const savedTheme = localStorage.getItem("reflex-glass-theme") as Theme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("reflex-glass-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, platform }}>
      <div className={cn("min-h-screen", theme)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useGlassTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useGlassTheme must be used within ThemeProvider");
  return context;
}

import { cn } from "@/lib/utils";
