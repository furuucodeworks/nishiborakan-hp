import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "GUEST HOUSE NISHIBORAKAN",
  description: "鷲ヶ岳スキー場に一番近いゲストハウス",
  openGraph: {
    title: "GUEST HOUSE NISHIBORAKAN",
    description: "鷲ヶ岳スキー場に一番近いゲストハウス",
    url: "https://nishiborakan-hp.vercel.app",
    siteName: "GUEST HOUSE NISHIBORAKAN",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://nishiborakan-hp.vercel.app/hero.png",
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
        <header className="flex items-center justify-between px-5 h-14 bg-white lg:px-16 lg:h-16">
          <Link
            href="/"
            className="text-xs font-bold tracking-[0.2em] text-[#333333]"
          >
            NISHIBORAKAN
          </Link>
          <nav className="hidden lg:flex gap-8">
            <Link
              href="/accommodation"
              className="text-xs text-[#555555] hover:text-[#333333]"
            >
              宿泊
            </Link>
            <Link
              href="/meals"
              className="text-xs text-[#555555] hover:text-[#333333]"
            >
              食事
            </Link>
            <Link
              href="/facilities"
              className="text-xs text-[#555555] hover:text-[#333333]"
            >
              部屋・施設
            </Link>
            <Link
              href="/access"
              className="text-xs text-[#555555] hover:text-[#333333]"
            >
              アクセス
            </Link>
            <Link
              href="/contact"
              className="text-xs text-[#555555] hover:text-[#333333]"
            >
              お問い合わせ
            </Link>
          </nav>
          <span className="text-xl text-[#333333] lg:hidden">≡</span>
        </header>

        {children}

        <footer className="flex flex-col items-center py-9 px-8 gap-3 bg-[#f0f0f0] lg:flex-row lg:justify-between lg:px-16">
          <p className="text-[11px] tracking-[0.2em] font-bold text-[#333333]">
            GUEST HOUSE NISHIBORAKAN
          </p>
          <p className="text-[10px] text-[#666666]">
            © 2024 NISHIBORAKAN. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
