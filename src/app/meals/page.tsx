import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "お食事 | GUEST HOUSE NISHIBORAKAN",
  description: "夕食は鍋をご用意。事前予約制です。鷲ヶ岳スキー場に一番近いゲストハウスの食事情報をご案内します。",
};

export default function Meals() {
  return (
    <main>

      {/* ページタイトル */}
      <section className="py-16 px-8 bg-[#f0f0f0] text-center lg:py-24">
        <p className="text-[11px] text-[#999999] tracking-widest mb-2">MEALS</p>
        <h1 className="text-2xl font-bold tracking-[0.2em] text-[#333333] lg:text-3xl">
          お食事のご案内
        </h1>
      </section>

      {/* 夕食セクション */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">Dinner</h2>
          <p className="text-[11px] text-[#999999]">夕食</p>

          <div className="flex flex-col gap-3 w-full">
            <p className="text-[13px] text-[#555555] leading-[1.8]">
              事前予約が必要です。宿泊日の3日前までに必ずご予約ください。3日前を過ぎますとお断りする場合がございます（材料調達ができない可能性があるため）。
            </p>
            <p className="text-[13px] text-[#555555] leading-[1.8]">
              夕食時間は18:00〜20:00です。当日チェックイン時にお時間をご予約いただきます。
            </p>
            <p className="text-[13px] text-[#555555] leading-[1.8]">
              メニューは鍋です。スープの味は複数ご用意しており、当日チェックインの際にお伺いします。6名様まではひと鍋でのご用意となりますので、ご了承ください。
            </p>
          </div>

          <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full h-[220px]">
              <Image
                src="/dinnersample.png"
                alt="夕食の様子"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <p className="text-[10px] text-[#999999] text-right">※ 画像は参考画像です</p>

              <div className="flex flex-col mt-3">
                <div className="flex justify-between items-center py-3.5 border-b border-[#eeeeee]">
                  <span className="text-[11px] text-[#999999] tracking-wide">時間</span>
                  <span className="text-sm font-bold text-[#333333]">18:00〜20:00（最終21:30）</span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-[#eeeeee]">
                  <span className="text-[11px] text-[#999999] tracking-wide">大人（中学生以上）</span>
                  <span className="text-sm font-bold text-[#333333]">¥2,400</span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-[#eeeeee]">
                  <span className="text-[11px] text-[#999999] tracking-wide">子供</span>
                  <span className="text-sm font-bold text-[#333333]">¥1,200</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-5 flex items-center justify-center w-full h-11 bg-[#333333] rounded-lg text-white text-xs"
              >
                夕食を予約する
              </Link>
            </div>
          </div>
        </div>
      </section>

      <p className="text-[13px] font-bold text-[#c0392b] text-center py-6 px-8">
        ※ 朝食のご用意はありません
      </p>

    </main>
  );
}
