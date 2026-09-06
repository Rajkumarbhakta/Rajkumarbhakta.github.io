import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Flex, Roboto_Mono } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { themeInitScript } from "@/lib/use-theme";
import { profile } from "@/data/profile";
import "./globals.css";

/**
 * Roboto Flex is the display face specifically for its `wdth` axis — headings
 * get wider as well as heavier, which is the part of the Expressive look that
 * weight alone cannot reach. Roboto carries body text and Roboto Mono the
 * eyebrows, labels and numerals.
 */
const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://me.rkbapps.in"),
  manifest: "/manifest.webmanifest",
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name} — ${profile.role}. ${profile.specialisms}. Three years shipping production Android and cross-platform apps, with 30K+ downloads on Google Play.`,
  openGraph: {
    type: "website",
    title: `${profile.name} | ${profile.role}`,
    description: profile.intro,
    url: "https://me.rkbapps.in",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.intro,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#131315" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning on <html> because themeInitScript sets
    // data-theme on it before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link
          rel="preload"
          href="/fonts/material-symbols-rounded.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      {/* suppressHydrationWarning on <body> as well: browser extensions commonly
          inject attributes here before React hydrates. */}
      <body
        className={`${roboto.variable} ${robotoFlex.variable} ${robotoMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
