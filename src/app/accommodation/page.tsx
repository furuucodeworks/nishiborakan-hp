import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "宿泊プラン・料金 | GUEST HOUSE NISHIBORAKAN",
  description:
    "MIXドミトリー平日¥2,500〜、個室TypeA平日¥25,000〜。鷲ヶ岳スキー場に一番近いゲストハウスの宿泊プランをご案内します。",
};

type Plan = {
  name: string;
  sub: string;
  prices: [string, string][];
  desc: string;
  img?: string;
};

const dormPlans: Plan[] = [
  {
    name: "MIXドミトリー 2段ベッド",
    sub: "MAX 6名",
    prices: [
      ["平日", "¥2,500"],
      ["休日前", "¥3,500"],
      ["年末年始", "¥4,500"],
    ],
    desc: "プライバシーに配慮したカーテン付きの2段ベッドです。スキー・スノーボード仲間との出会いも楽しめます。",
    img: "/images/accommodation/dorm-bunk.jpeg",
  },
  {
    name: "MIXドミトリー シングルベッド",
    sub: "MAX 5名",
    prices: [
      ["平日", "¥4,000"],
      ["休日前", "¥5,000"],
      ["年末年始", "¥6,000"],
    ],
    desc: "ゆとりのあるシングルベッドタイプのドミトリーです。一人旅にもおすすめです。",
    img: "/images/accommodation/dorm-single.jpg",
  },
];

const privatePlans: Plan[] = [
  {
    name: "個室 TypeA",
    sub: "4-5人部屋",
    prices: [
      ["平日", "¥25,000"],
      ["休日前", "¥35,000"],
      ["年末年始", "¥40,000"],
    ],
    desc: "グループやファミリーでの利用に最適な個室です。荷物を気にせずゆったりお過ごしいただけます。",
    img: "/images/accommodation/typea.jpg",
  },
  {
    name: "個室 TypeB",
    sub: "6人部屋",
    prices: [
      ["平日", "¥30,000"],
      ["休日前", "¥42,000"],
      ["年末年始", "¥48,000"],
    ],
    desc: "少人数のグループ旅行にぴったりのコンパクトな個室です。",
    img: "/images/accommodation/typeb.jpg",
  },
  {
    name: "個室 TypeD",
    sub: "3人部屋",
    prices: [
      ["平日", "¥18,000"],
      ["休日前", "¥24,000"],
      ["年末年始", "¥27,000"],
    ],
    desc: "ご夫婦やカップルでの利用にもおすすめの個室です。",
    img: "/images/accommodation/typed.jpg",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="w-full h-full border border-[#eeeeee] rounded-xl overflow-hidden flex flex-col">
      <div className="relative w-full h-[180px] bg-gray-200">
        {plan.img && (
          <Image src={plan.img} alt={plan.name} fill className="object-cover" />
        )}
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-base font-bold text-[#333333]">{plan.name}</h3>
        <p className="text-[11px] text-[#999999]">{plan.sub}</p>
        <div className="flex flex-col">
          {plan.prices.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between items-center py-2 border-b border-[#eeeeee]"
            >
              <span className="text-[12px] text-[#999999]">{label}</span>
              <span className="text-sm font-bold text-[#333333]">{value}</span>
            </div>
          ))}
        </div>
        <p className="text-[13px] text-[#555555] leading-[1.8]">{plan.desc}</p>
        <Link
          href="/contact"
          className="mt-auto flex items-center justify-center w-full h-11 bg-[#333333] rounded-lg text-white text-xs"
        >
          空室確認
        </Link>
      </div>
    </div>
  );
}

export default function Accommodation() {
  return (
    <main>

      {/* ページタイトル */}
      <section className="py-16 px-8 bg-[#f0f0f0] text-center lg:py-24">
        <p className="text-[11px] text-[#999999] tracking-widest mb-2">ACCOMMODATION</p>
        <h1 className="text-2xl font-bold tracking-[0.2em] text-[#333333] lg:text-3xl">
          宿泊プラン・料金
        </h1>
      </section>

      {/* ドミトリーセクション */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-6 sm:max-w-xl sm:mx-auto lg:max-w-4xl">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">Dormitory</h2>
          <p className="text-[11px] text-[#999999]">ドミトリーのご案内</p>
          <p className="text-[13px] text-[#555555] text-left leading-[1.8] w-full lg:w-[450px]">
            ドミトリーは、一部屋に複数のベッドが設置された共同宿泊スペースです。
            <br />
            各ベッドはプライバシーを確保するためカーテンなどで仕切られています。
            <br />
            このタイプの部屋は男女混合です。
            <br />
            <br />
            2段ベッドタイプとシングルベッドタイプの2種類の部屋があり、それぞれ料金が異なります。
            <br />
            ご予約の際はご確認ください。
          </p>
          <p className="text-[13px] font-bold text-[#c0392b] text-left leading-[1.8] w-full lg:w-[450px]">
            1人につき1ベッドのご利用となります。
            <br />
            お子様が添い寝する場合も、1人としてカウントし料金をいただきます。
            <br />
            またグループ貸切をする場合は+1万円発生します。
          </p>
          <div className="grid grid-cols-1 gap-6 w-full lg:grid-cols-2">
            {dormPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-[#eeeeee]" />

      {/* プライベートルームセクション */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-6 sm:max-w-xl sm:mx-auto lg:max-w-5xl">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">Private Room</h2>
          <p className="text-[11px] text-[#999999]">個室のご案内</p>
          <p className="text-[13px] text-[#555555] text-left leading-[1.8] w-full lg:w-[450px]">
            こちらはファミリーやグループに最適なお部屋です。
            <br />
            料金は部屋単位で設定されているため、宿泊人数が変わっても料金は変動しません。
          </p>
          <div className="grid grid-cols-1 gap-6 w-full lg:grid-cols-3">
            {privatePlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
