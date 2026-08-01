import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const metadataBase = host ? new URL(`${protocol}://${host}`) : undefined;

  return {
    metadataBase,
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
      images: [{ url: "/og.png", width: 1731, height: 909 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Playwright Flow Recorder Kit",
      description:
        "Record the journey. Hand off the evidence. Built for product managers and QA.",
      images: ["/og.png"],
    },
  };
}

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
