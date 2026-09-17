import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

// 独自ドメインが決まったら、下の metadata に次の1行を追加する。
// metadataBase: new URL("https://ここに本番ドメイン"),
export const metadata: Metadata = {
  title: "GUEST HOUSE NISHIBORAKAN",
  description: "鷲ヶ岳スキー場に一番近いゲストハウス",
  openGraph: {
    title: "GUEST HOUSE NISHIBORAKAN",
    description: "鷲ヶ岳スキー場に一番近いゲストハウス",
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
          <p className="text-[10px] text-[#666666]">
            © 2024 NISHIBORAKAN. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
