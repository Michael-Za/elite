import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark" | "ios";
}

export function GlassCard({ children, className, variant = "light", ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl transition-all duration-300",
        variant === "light" && "bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg",
        variant === "dark" && "bg-black/20 backdrop-blur-xl border border-white/10 shadow-lg",
        variant === "ios" && "bg-white/40 backdrop-blur-2xl border border-white/40 shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}