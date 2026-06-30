import type { Metadata } from "next";

const PHONE = "070-5667-7101";
const INSTAGRAM_URL = "https://www.instagram.com/guesthouse_nishiborakan/";
const INSTAGRAM_HANDLE = "@guesthouse_nishiborakan";

export const metadata: Metadata = {
  title: "お問い合わせ | GUEST HOUSE NISHIBORAKAN",
  description:
    "空室確認・ご予約はお電話またはInstagramのDMでお問い合わせください。070-5667-7101（15:00〜21:00）。",
};

export default function Contact() {
  return (
    <main>

      {/* ページタイトル */}
      <section className="py-16 px-8 bg-[#f0f0f0] text-center lg:py-24">
        <p className="text-[11px] text-[#999999] tracking-widest mb-2">CONTACT</p>
        <h1 className="text-2xl font-bold tracking-[0.2em] text-[#333333] lg:text-3xl">
          お問い合わせ
        </h1>
      </section>

      {/* 電話 */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:max-w-2xl">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">Phone</h2>
          <p className="text-[11px] text-[#999999]">電話</p>
          <div className="flex flex-col gap-2 w-full text-center lg:text-left">
            <a
              href={`tel:${PHONE}`}
              className="text-lg font-bold text-[#333333] tracking-wide"
            >
              {PHONE}
            </a>
            <p className="text-[13px] text-[#555555] leading-[1.8]">
              繋がりやすい時間：15:00〜21:00
              <br />
              出られない場合は折り返しのご連絡を差し上げます。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-[#eeeeee]" />

      {/* Instagram */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:max-w-2xl">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">Instagram</h2>
          <p className="text-[11px] text-[#999999]">Instagram</p>
          <p className="text-[13px] text-[#555555] text-center leading-[1.8] lg:text-left w-full">
            DMでのお問い合わせも受け付けております。
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#555555]"
          >
            📷 {INSTAGRAM_HANDLE}
          </a>
        </div>
      </section>

    </main>
  );
}
