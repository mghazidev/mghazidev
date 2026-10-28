import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { Aurora } from "@/components/aurora";
import { MotionProvider } from "@/components/motion-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/profile";

import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://mghazidev.vercel.app"),
  title: { default: title, template: `%s — ${profile.name}` },
  description: profile.summary,
  openGraph: {
    type: "website",
    title,
    description: profile.summary,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title, description: profile.summary },
};

export const viewport: Viewport = {
  themeColor: "#06060b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="relative min-h-dvh overflow-x-clip">
        {/* Entrance animations are server-rendered at opacity 0 and revealed by
            JavaScript. Without JavaScript nothing would reveal them, and most of
            the page would look empty — so show everything as-is instead. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Aurora />
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
