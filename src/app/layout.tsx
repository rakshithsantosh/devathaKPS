import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devatha KPS — Government Primary School, Rampura",
  description:
    "A premium government-supported English-medium primary school in Rampura, Karnataka. Built with sustainable architecture — natural granite, wire-cut bricks, and natural ventilation.",
  keywords: [
    "Devatha KPS",
    "Rampura school",
    "Karnataka primary school",
    "English medium",
    "sustainable school",
    "government school",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
