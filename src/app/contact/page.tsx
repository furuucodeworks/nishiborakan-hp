import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

const PHONE = "070-5667-7101";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "お問い合わせ | GUEST HOUSE NISHIBORAKAN",
  description:
    "空室確認・ご予約はお電話またはお問い合わせフォームでご連絡ください。070-5667-7101（15:00〜21:00）。",
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
          <div className="flex flex-col gap-2 w-full text-center">
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

      {/* お問い合わせフォーム */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:max-w-2xl">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">Form</h2>
          <p className="text-[11px] text-[#999999]">お問い合わせフォーム</p>
          <p className="text-[13px] text-[#555555] text-center leading-[1.8] w-full">
            空室確認・ご予約はフォームからもお問い合わせいただけます。内容を確認のうえ、ご連絡いたします。
          </p>
          <ContactForm accessKey={process.env.WEB3FORMS_ACCESS_KEY?.trim() ?? ""} />
        </div>
      </section>

    </main>
  );
}
