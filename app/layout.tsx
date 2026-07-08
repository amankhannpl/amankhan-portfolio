import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Khan Portfolio",
  description: "Software Engineering & Global Trade Execution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Forces the browser to load Tailwind CSS utility scripts immediately */}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.className} bg-[#09090b]`}>{children}</body>
    </html>
  );
}