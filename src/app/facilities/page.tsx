import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "部屋・施設 | GUEST HOUSE NISHIBORAKAN",
  description:
    "受付・共用スペース・売店・食堂・お風呂・乾燥室・洗面所など、館内施設をご案内します。",
};

type Facility = {
  name: string;
  img?: string;
};

const facilities: Facility[] = [
  { name: "受付", img: "/uketuke.jpg" },
  { name: "共用スペース" },
  { name: "売店" },
  { name: "食堂" },
  { name: "風呂（脱衣所）" },
  { name: "風呂（浴槽）" },
  { name: "乾燥室" },
  { name: "洗面所" },
];

export default function Facilities() {
  return (
    <main>

      {/* ページタイトル */}
      <section className="py-16 px-8 bg-[#f0f0f0] text-center lg:py-24">
        <p className="text-[11px] text-[#999999] tracking-widest mb-2">FACILITIES</p>
        <h1 className="text-2xl font-bold tracking-[0.2em] text-[#333333] lg:text-3xl">
          部屋・施設のご案内
        </h1>
      </section>

      {facilities.map((facility, index) => (
        <div key={facility.name}>
          <section className="py-12 px-8 bg-white lg:py-20">
            <div
              className={`flex flex-col items-center gap-5 sm:max-w-xl sm:mx-auto lg:flex-row lg:gap-16 lg:max-w-4xl ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* デスクトップ用画像 */}
              <div className="hidden lg:block relative w-full h-[220px] rounded-sm shrink-0 bg-gray-200 lg:w-1/2 lg:h-[320px]">
                {facility.img && (
                  <Image
                    src={facility.img}
                    alt={facility.name}
                    fill
                    className="object-cover rounded-sm"
                  />
                )}
              </div>
              <div className="flex flex-col items-center gap-3 w-full lg:w-auto lg:items-start">
                <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">
                  {facility.name}
                </h2>
                {/* モバイル用画像 */}
                <div className="lg:hidden relative w-full h-[220px] rounded-sm bg-gray-200">
                  {facility.img && (
                    <Image
                      src={facility.img}
                      alt={facility.name}
                      fill
                      className="object-cover rounded-sm"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
          {index < facilities.length - 1 && <hr className="border-[#eeeeee]" />}
        </div>
      ))}

    </main>
  );
}
