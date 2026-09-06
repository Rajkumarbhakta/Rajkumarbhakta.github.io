import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

// Required for `output: export` — this is a route handler, and without it Next
// refuses to prerender it.
export const dynamic = "force-static";

/**
 * Emits /manifest.webmanifest at build time. The maskable variants let Android
 * crop the mark to whatever shape the launcher uses without clipping the
 * monogram; the plain ones are used everywhere else.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.name,
    description: profile.intro,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8fb",
    theme_color: "#fbf8fb",
    icons: [
      { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { src: "/icon-192-maskable.png", type: "image/png", sizes: "192x192", purpose: "maskable" },
      { src: "/icon-512-maskable.png", type: "image/png", sizes: "512x512", purpose: "maskable" },
    ],
  };
}
