import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "./analytics";
import { Footer } from "./footer";
import { Header } from "./header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Quigley's blog",
  description:
    "Ryan Quigley a software engineer, designer, and 3x entrepreneur",
  openGraph: {
    title: "Ryan Quigley's blog",
    description:
      "Ryan Quigley a software engineer, designer, and 3x entrepreneur",
    url: "https://quigleyr.com",
    siteName: "Ryan Quigley's blog",
  },
  metadataBase: new URL("https://quigleyr.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="m-auto max-w-2xl">
        <main className="min-h-screen p-6 pt-3 md:pt-6">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
