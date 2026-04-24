import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Email Writer - Write Professional Emails in Seconds",
  description: "Write better emails faster with AI. Perfect for sales, support, and business communication. Generate professional, engaging emails instantly.",
  keywords: "AI email writer, email generator, professional email, sales email, customer support email",
  openGraph: {
    title: "AI Email Writer - Write Professional Emails in Seconds",
    description: "Write better emails faster with AI. Perfect for sales, support, and business communication.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
