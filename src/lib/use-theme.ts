"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/**
 * Inlined into <head> so the document is stamped with data-theme before first
 * paint. Without this the page renders in the CSS default and then flips,
 * which is very visible on a dark-default site. Kept as a string because there
 * is no server under `output: 'export'` to resolve the preference for us.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${STORAGE_KEY}");
    // Dark is the default when the visitor has not chosen: it is the site's
    // established look. prefers-color-scheme only decides once they have.
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

/** Fires whenever anything changes data-theme on <html>. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/**
 * Undefined on the server and during hydration: the real value is written to
 * the DOM by themeInitScript, so rendering it before hydration would mismatch.
 */
function getServerSnapshot(): undefined {
  return undefined;
}

export function useTheme() {
  // The DOM attribute is the source of truth, so this reads it as an external
  // store rather than mirroring it into state inside an effect.
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing or storage disabled — the attribute still applies for
      // this session, it just will not be remembered.
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
  }, [setTheme]);

  return { theme, setTheme, toggleTheme, mounted: theme !== undefined };
}
