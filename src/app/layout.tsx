import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nishiborakan.com"),
  title: "GUEST HOUSE NISHIBORAKAN",
  description:
    "鷲ヶ岳スキー場に徒歩すぐのゲストハウス「NISHIBORAKAN」。ドミトリー¥3,000〜、個室¥25,000〜。夕食は鍋。12月〜3月営業。",
  openGraph: {
    title: "GUEST HOUSE NISHIBORAKAN",
    description:
      "鷲ヶ岳スキー場に徒歩すぐのゲストハウス「NISHIBORAKAN」。ドミトリー¥3,000〜、個室¥25,000〜。夕食は鍋。12月〜3月営業。",
    siteName: "GUEST HOUSE NISHIBORAKAN",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/home/hero.png",
        alt: "GUEST HOUSE NISHIBORAKAN",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />

        {children}

        <footer className="flex flex-col items-center py-9 px-8 gap-3 bg-[#f0f0f0] lg:flex-row lg:justify-between lg:px-16">
          <p className="text-[11px] tracking-[0.2em] font-bold text-[#333333]">
            GUEST HOUSE NISHIBORAKAN
          </p>
          <a
            href="https://www.instagram.com/guesthouse_nishiborakan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#333333] transition-opacity duration-200 hover:opacity-60"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <p className="text-[10px] text-[#666666]">
            © 2024 NISHIBORAKAN. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
