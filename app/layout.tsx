import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(
  "https://goi17.github.io/playwright-flow-recorder-kit-free/",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Playwright Flow Recorder Kit | Alfred Labs",
  description:
    "Record a real browser journey, add expected results, replay it, and export reproducible evidence—without writing test code.",
  keywords: [
    "QA workflow",
    "product management",
    "Playwright recorder",
    "browser journey",
    "test evidence",
    "Gherkin",
  ],
  openGraph: {
    title: "Playwright Flow Recorder Kit",
    description:
      "Record the journey. Hand off the evidence. Built for product managers and QA.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: new URL("og.png", siteUrl),
        width: 1731,
        height: 909,
        alt: "Playwright Flow Recorder Kit by Alfred Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playwright Flow Recorder Kit",
    description:
      "Record the journey. Hand off the evidence. Built for product managers and QA.",
    images: [new URL("og.png", siteUrl)],
  },
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
