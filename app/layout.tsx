import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
import Spotlight from "@/components/Spotlight";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Technologist & Developer",
  description:
    "Software engineer, game developer, and web craftsman. Building digital experiences at the intersection of code and creativity.",
  keywords: [
    "portfolio",
    "developer",
    "Software engineer",
    "game developer",
    "web developer",
    "creative technologist",
  ],
  openGraph: {
    title: "Portfolio | Creative Technologist & Developer",
    description:
      "Software engineer, game developer, and web craftsman.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Spotlight />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
