import type { Metadata } from "next";
import { FacilityImages, type Facility } from "./FacilityImages";

export const metadata: Metadata = {
  title: "部屋・施設 | GUEST HOUSE NISHIBORAKAN",
  description:
    "受付・共用スペース・売店・食堂・お風呂・洗面所など、館内施設をご案内します。",
};

const facilities: Facility[] = [
  { name: "受付", images: ["/images/facilities/uketuke.jpg"] },
  { name: "共用スペース", images: ["/images/facilities/kyouyou1.jpg", "/images/facilities/kyouyou2.jpg", "/images/facilities/kyouyou3.jpg"] },
  { name: "売店", images: [] },
  { name: "食堂", images: ["/images/facilities/eatingroom.jpg"] },
  { name: "風呂（脱衣所）", images: ["/images/facilities/menchangingroom.jpg"] },
  {
    name: "風呂（浴槽）",
    images: [
      "/images/facilities/menbuth.jpg",
      "/images/facilities/menshower.jpg",
      "/images/facilities/womenbuth.jpg",
      "/images/facilities/womenshower.jpg",
    ],
  },
  { name: "洗面所", images: ["/images/facilities/washroom.jpg"] },
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
              <FacilityImages
                facility={facility}
                className="hidden lg:block w-full h-[320px] shrink-0 lg:w-1/2"
              />
              <div className="flex flex-col items-center gap-3 w-full lg:w-auto lg:items-start">
                <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">
                  {facility.name}
                </h2>
                {/* モバイル用画像 */}
                <FacilityImages facility={facility} className="lg:hidden w-full h-[220px]" />
              </div>
            </div>
          </section>
          {index < facilities.length - 1 && <hr className="border-[#eeeeee]" />}
        </div>
      ))}

    </main>
  );
}
