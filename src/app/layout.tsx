import "./globals.css";
import type { Metadata } from "next";
import { Ruwudu } from "next/font/google";

const inter = Ruwudu({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Ghazi Zaidi",
  description:
    "Frontend Engineer with over a year of experience in designing and developing user-centric web interfaces, proficient in modern frontend technologies and passionate about delivering exceptional user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
