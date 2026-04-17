import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Kane — Portfolio",
  description: "Designing human experiences in code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
