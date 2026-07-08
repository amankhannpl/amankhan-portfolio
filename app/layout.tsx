import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // If you don't have this file, you can safely remove this line

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}