import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import ThreeBackground from "@/components/layout/ThreeBackground";
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
                  const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
                  document.documentElement.dataset.theme = theme;
                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch {
                  document.documentElement.dataset.theme = "dark";
                  document.documentElement.classList.add("dark");
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <LanguageProvider>
          <ThreeBackground />
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">
              <main>{children}</main>
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
