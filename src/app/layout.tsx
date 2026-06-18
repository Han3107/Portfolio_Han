import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import CuteChickenCursor from "@/components/ui/CuteChickenCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Han Han Portfolio",
  description:
    "Digital portfolio for QA testing and software quality projects. 3rd-year IT student passionate about software testing.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem("theme");
                  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                  const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;
                  document.documentElement.dataset.theme = theme;
                } catch {
                  document.documentElement.dataset.theme = "light";
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">
            <main>{children}</main>
          </div>
        </div>
        <CuteChickenCursor />
      </body>
    </html>
  );
}
