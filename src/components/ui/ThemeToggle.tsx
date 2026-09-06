"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IconButton } from "./IconButton";
import { Icon } from "./Icon";
import { useTheme } from "@/lib/use-theme";
import { springs } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <IconButton
      variant="standard"
      onClick={toggleTheme}
      label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className={cn("size-[34px] rounded-full", className)}
    >
      {/* Nothing until mounted, so the icon cannot contradict the theme the
          init script already applied to <html>. */}
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={theme}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={springs.transition}
            className="inline-flex"
          >
            <Icon name={theme === "light" ? "dark_mode" : "light_mode"} size={19} />
          </motion.span>
        )}
      </AnimatePresence>
    </IconButton>
  );
}
