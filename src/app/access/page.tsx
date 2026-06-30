import type { Metadata } from "next";

const MAP_LINK = "https://goo.gl/maps/jnDoPDMRp4hcGeDSA";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.5783768870026!2d136.91445042189744!3d35.93929999303958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002889f846c1901%3A0x38091c508ceb5a3c!2sNISHIBORAKAN!5e0!3m2!1sja!2sjp!4v1781691554108!5m2!1sja!2sjp";

export const metadata: Metadata = {
  title: "アクセス | GUEST HOUSE NISHIBORAKAN",
  description:
    "鷲ヶ岳スキー場敷地内のアクセス・駐車場情報。岐阜県奥美濃エリア、Googleマップでご確認いただけます。",
};

export default function Access() {
  return (
    <main>

      {/* ページタイトル */}
      <section className="py-16 px-8 bg-[#f0f0f0] text-center lg:py-24">
        <p className="text-[11px] text-[#999999] tracking-widest mb-2">ACCESS</p>
        <h1 className="text-2xl font-bold tracking-[0.2em] text-[#333333] lg:text-3xl">
          アクセスのご案内
        </h1>
      </section>

      {/* 所在地 */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:max-w-2xl">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">Location</h2>
          <p className="text-[11px] text-[#999999]">所在地</p>
          <p className="text-[13px] text-[#555555] text-center leading-[1.8] lg:text-left w-full">
            岐阜県奥美濃エリア
            <br />
            鷲ヶ岳スキー場の敷地内（料金所を超えた先）
          </p>
        </div>
      </section>

      <hr className="border-[#eeeeee]" />

      {/* 駐車場 */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:max-w-2xl">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">Parking</h2>
          <p className="text-[11px] text-[#999999]">駐車場</p>
          <p className="text-[13px] text-[#555555] text-center leading-[1.8] lg:text-left w-full">
            駐車場をご用意しております。
            <br />
            満車の場合は CAFENANASHI 隣の駐車場をご利用ください。
          </p>
        </div>
      </section>

      <hr className="border-[#eeeeee]" />

      {/* 地図 */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:max-w-2xl">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">Map</h2>
          <p className="text-[11px] text-[#999999]">地図</p>
          <div className="w-full h-[220px] rounded-sm overflow-hidden lg:h-[360px]">
            <iframe
              src={MAP_EMBED}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#555555]"
          >
            📍 Google Maps で表示
          </a>
        </div>
      </section>

    </main>
  );
}
