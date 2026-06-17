import Link from "next/link";
import Image from "next/image";

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
      {/* ヒーロー */}
      <div className="relative h-[460px] lg:h-[600px]">
        <Image
          src="/hero.png"
          alt="GUEST HOUSE NISHIBORAKAN 外観"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-10 left-6 text-white lg:left-16 lg:bottom-16">
          <h1 className="text-lg font-bold leading-snug tracking-widest lg:text-3xl">
            GUEST HOUSE
            <br />
            NISHIBORAKAN
          </h1>
          <p className="text-[9px] mt-3 lg:text-xs lg:mt-4">
            鷲ヶ岳スキー場に一番近いゲストハウス
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block border border-white text-[9px] px-[60px] py-2 rounded-lg lg:text-xs lg:mt-6"
          >
            空室を確認する
          </Link>
        </div>
      </div>

      {/* 宿泊セクション */}
      <section className="py-[52px] px-8 bg-white lg:py-20 lg:px-16">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:flex-row lg:gap-16 lg:max-w-5xl lg:mx-auto">
          {/* デスクトップ用画像 */}
          <div className="hidden lg:block relative w-full h-[220px] rounded-sm shrink-0 lg:w-1/2 lg:h-[320px]">
            <Image
              src="/aroom.jpg"
              alt="客室の様子"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="flex flex-col items-center gap-5 w-full lg:w-auto lg:items-start">
            <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">
              Hostel
            </h2>
            <p className="text-[11px] text-[#999999]">宿泊のご案内</p>
            {/* モバイル用画像 */}
            <div className="lg:hidden relative w-full h-[220px] rounded-sm">
              <Image
                src="/aroom.jpg"
                alt="客室の様子"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <p className="text-[13px] text-[#555555] text-center leading-[1.8] lg:text-left">
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
          </div>
        </div>
      </section>

      <hr className="border-[#eeeeee]" />

      {/* 食事セクション */}
      <section className="py-[52px] px-8 bg-white lg:py-20 lg:px-16">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:flex-row-reverse lg:gap-16 lg:max-w-5xl lg:mx-auto">
          {/* デスクトップ用画像 */}
          <div className="hidden lg:block relative w-full h-[220px] rounded-sm shrink-0 lg:w-1/2 lg:h-[320px]">
            <Image
              src="/dinnersample.png"
              alt="夕食の様子"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="flex flex-col items-center gap-5 w-full lg:w-auto lg:items-start">
            <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">
              Meals
            </h2>
            <p className="text-[11px] text-[#999999]">お食事のご案内</p>
            {/* モバイル用画像 */}
            <div className="lg:hidden relative w-full h-[220px] rounded-sm">
              <Image
                src="/dinnersample.png"
                alt="夕食の様子"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <p className="text-[13px] text-[#555555] text-center leading-[1.8] lg:text-left">
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
          </div>
        </div>
      </section>

      {/* インフォメーションセクション */}
      <section className="flex flex-col items-center py-12 px-8 bg-[#f0f0f0] lg:py-20 lg:px-16">
        <div className="w-full bg-white rounded-2xl shadow-lg p-7 sm:max-w-xl lg:max-w-2xl">
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
      <section className="py-[52px] px-8 bg-white lg:py-20 lg:px-16">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:flex-row lg:gap-16 lg:max-w-5xl lg:mx-auto">
          <div className="flex flex-col items-center gap-3 lg:items-start lg:shrink-0">
            <h2 className="text-[11px] font-bold tracking-[0.4em] text-[#333333]">
              ACCESS
            </h2>
            <div className="w-6 h-0.5 bg-[#333333]" />
            <a
              href="https://goo.gl/maps/jnDoPDMRp4hcGeDSA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#555555]"
            >
              📍 Google Maps で表示
            </a>
          </div>
          <div className="w-full h-[330px] rounded-sm overflow-hidden lg:flex-1 lg:h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.5783768870026!2d136.91445042189744!3d35.93929999303958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002889f846c1901%3A0x38091c508ceb5a3c!2sNISHIBORAKAN!5e0!3m2!1sja!2sjp!4v1781691554108!5m2!1sja!2sjp"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
