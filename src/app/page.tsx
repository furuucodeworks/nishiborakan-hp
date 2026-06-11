import Link from "next/link";

const infoRows = [
  ["OPENING SEASON", "12月〜3月"],
  ["CHECK-IN", "16:00〜"],
  ["CHECK-OUT", "〜10:00"],
  ["DORMITORY", "¥3,000〜(平日)"],
  ["PRIVATE ROOM", "¥25,000〜(平日)"],
];

export default function Home() {
  return (
    <main>
      {/* ヘッダー */}
      <header className="flex items-center justify-between px-5 h-14 bg-white">
        <span className="text-xs font-bold tracking-[0.2em] text-[#333333]">
          NISHIBORAKAN
        </span>
        <span className="text-xl text-[#333333]">≡</span>
      </header>

      {/* ヒーロー */}
      <div className="relative h-[460px] bg-gray-400">
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-10 left-6 text-white">
          <h1 className="text-lg font-bold leading-snug tracking-widest">
            GUEST HOUSE
            <br />
            NISHIBORAKAN
          </h1>
          <p className="text-[9px] mt-3">
            鷲ヶ岳スキー場に一番近いゲストハウス
          </p>
          <button className="mt-4 border border-white text-[9px] px-[60px] py-2 rounded-lg">
            空室を確認する
          </button>
        </div>
      </div>

      {/* 宿泊セクション */}
      <section className="flex flex-col items-center py-[52px] px-8 gap-5 bg-white">
        <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">
          Hostel
        </h2>
        <p className="text-[11px] text-[#999999]">宿泊のご案内</p>
        <div className="w-full h-[220px] bg-gray-200 rounded-sm" />
        <p className="text-[13px] text-[#555555] text-center leading-[1.8]">
          ドミトリーまたは個室でお過ごしいただけます。
          <br />
          スキー場まで徒歩すぐの好立地です。
        </p>
        <Link
          href="/accommodation"
          className="border border-[#333333] text-[12px] text-[#333333] px-[60px] py-2 rounded-lg"
        >
          Room Information
        </Link>
      </section>

      <hr className="border-[#eeeeee]" />

      {/* 食事セクション */}
      <section className="flex flex-col items-center py-[52px] px-8 gap-5 bg-white">
        <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">
          Meals
        </h2>
        <p className="text-[11px] text-[#999999]">お食事のご案内</p>
        <div className="w-full h-[220px] bg-gray-200 rounded-sm" />
        <p className="text-[13px] text-[#555555] text-center leading-[1.8]">
          夕食は鍋、朝食は洋食をご用意しています。
          <br />
          いずれも事前予約制です。
        </p>
        <Link
          href="/meals"
          className="border border-[#333333] text-[12px] text-[#333333] px-[60px] py-2 rounded-lg"
        >
          Meal Information
        </Link>
      </section>

      {/* インフォメーションセクション */}
      <section className="flex flex-col items-center py-12 px-8 bg-[#f0f0f0]">
        <div className="w-full bg-white rounded-2xl shadow-lg p-7">
          <div className="flex flex-col gap-2 mb-5">
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#333333]">
              INFORMATION
            </h3>
            <div className="w-6 h-0.5 bg-[#333333]" />
          </div>
          {infoRows.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between items-center py-3.5 border-b border-[#eeeeee]"
            >
              <span className="text-[11px] text-[#999999] tracking-wide">
                {label}
              </span>
              <span className="text-sm font-bold text-[#333333]">{value}</span>
            </div>
          ))}
          <Link
            href="/accommodation"
            className="mt-5 flex items-center justify-center w-full h-[52px] bg-[#333333] rounded-lg text-white text-sm"
          >
            宿泊についてはこちら
          </Link>
        </div>
      </section>

      {/* アクセスセクション */}
      <section className="flex flex-col items-center py-[52px] px-8 gap-5 bg-white">
        <h2 className="text-[11px] font-bold tracking-[0.4em] text-[#333333]">
          ACCESS
        </h2>
        <div className="w-6 h-0.5 bg-[#333333]" />
        <div className="w-full h-[220px] bg-gray-200 rounded-sm" />
        <a
          href="https://goo.gl/maps/jnDoPDMRp4hcGeDSA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-[#555555]"
        >
          📍 Google Maps で表示
        </a>
      </section>

      {/* フッター */}
      <footer className="flex flex-col items-center py-9 px-8 gap-3 bg-[#f0f0f0]">
        <p className="text-[11px] tracking-[0.2em] font-bold text-[#333333]">
          GUEST HOUSE NISHIBORAKAN
        </p>
        <p className="text-[10px] text-[#666666]">
          © 2024 NISHIBORAKAN. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
