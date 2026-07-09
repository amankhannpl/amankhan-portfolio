import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Khan | AI Builder & Creative Technologist",
  description:
    "A cinematic personal brand experience for Aman Khan, software engineer, AI builder, founder, and creative technologist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}