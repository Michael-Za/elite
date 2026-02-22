import { cn } from "@/lib/utils";
import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";

interface GlassButtonProps extends ButtonProps {
  glassVariant?: "primary" | "secondary" | "accent";
}

export function GlassButton({ children, className, glassVariant = "primary", ...props }: GlassButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300 active:scale-95 rounded-2xl border px-6 py-6 font-medium shadow-sm",
        glassVariant === "primary" && "bg-blue-600/20 backdrop-blur-md border-blue-400/40 text-foreground hover:bg-blue-600/30",
        glassVariant === "secondary" && "bg-blue-500/10 backdrop-blur-xl border-white/30 text-foreground hover:bg-blue-500/20",
        glassVariant === "accent" && "bg-accent/20 backdrop-blur-md border-accent/40 text-foreground hover:bg-accent/30",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
