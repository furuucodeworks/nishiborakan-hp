import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // さくらのレンタルサーバでも公開できるよう、HTML/CSS/JS を out に書き出す
  output: "export",
  // /contact/index.html として出力し、URL 直接開き・再読み込みでも表示できるようにする
  trailingSlash: true,
  // Next.js サーバーの画像最適化を使わず、元画像をそのまま配信する
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
