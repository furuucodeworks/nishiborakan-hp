import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "宿泊プラン・料金 | GUEST HOUSE NISHIBORAKAN",
  description:
    "MIXドミトリー平日¥3,000〜、個室4-5名は平日¥25,000〜。鷲ヶ岳スキー場に一番近いゲストハウスの宿泊プランをご案内します。",
};

type Plan = {
  name: string;
  sub?: string;
  prices: [string, string][];
  desc: string;
  img?: string;
};

const dormPlans: Plan[] = [
  {
    name: "MIXドミトリー 2段ベッド",
    sub: "MAX 6名",
    prices: [
      ["平日", "¥3,000"],
      ["休日前", "¥4,000"],
      ["年末年始", "¥5,000"],
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

const stayNotes = [
  "チェックイン時間が予定時間を過ぎる場合は、事前にご連絡ください。",
  "ナイターに行かれるお客様はナイター前にチェックインを済ませていただくことをお勧めします。",
  "館内は禁煙です（喫煙スペースあり）。館内での喫煙が確認された場合（疑わしい場合も含む）罰金¥10,000を申し受けます。",
  "門限はありませんが、消灯時間は23:00です。以降は他のお客様へのご配慮をお願いし、静かにお過ごしください。",
  "貴重品は各自で管理をお願いいたします。紛失や盗難などの責任は負いかねます。",
  "当ゲストハウスは共用設備が中心です。マナーとルールを守ってご利用ください。",
  "お車でお越しの際は、必ずスタッドレスタイヤを装着し、チェーンをご持参ください。",
];

const cancelFees: [string, string][] = [
  ["4-5日前", "50%"],
  ["2-3日前", "70%"],
  ["前日", "100%"],
  ["当日", "100%＋夕食費"],
];

const privatePlans: Plan[] = [
  {
    name: "個室 3名",
    prices: [
      ["平日", "¥18,000"],
      ["休日前", "¥24,000"],
      ["年末年始", "¥27,000"],
    ],
    desc: "ご夫婦やカップルでの利用にもおすすめの個室です。",
    img: "/images/accommodation/typed.jpg",
  },
  {
    name: "個室 4-5名",
    prices: [
      ["平日", "¥25,000"],
      ["休日前", "¥35,000"],
      ["年末年始", "¥40,000"],
    ],
    desc: "グループやファミリーでの利用に最適な個室です。荷物を気にせずゆったりお過ごしいただけます。",
    img: "/images/accommodation/typea.jpg",
  },
  {
    name: "個室 6名",
    prices: [
      ["平日", "¥30,000"],
      ["休日前", "¥42,000"],
      ["年末年始", "¥48,000"],
    ],
    desc: "少人数のグループ旅行にぴったりのコンパクトな個室です。",
    img: "/images/accommodation/typeb.jpg",
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
        {plan.sub && (
          <p className="text-[11px] text-[#999999]">{plan.sub}</p>
        )}
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
          className="mt-auto flex items-center justify-center w-full h-11 bg-[#333333] rounded-lg text-white text-xs transition-colors duration-200 hover:bg-[#555555]"
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
        <p className="text-[11px] text-[#999999] tracking-widest mb-2">
          ACCOMMODATION
        </p>
        <h1 className="text-2xl font-bold tracking-[0.2em] text-[#333333] lg:text-3xl">
          宿泊プラン・料金
        </h1>
      </section>

      {/* ドミトリーセクション */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-6 sm:max-w-xl sm:mx-auto lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 sm:max-w-lg">
            <div className="flex flex-col items-center gap-2 border border-[#eeeeee] rounded-xl py-6 px-4">
              <span className="text-[11px] tracking-[0.2em] text-[#999999]">
                CHECK-IN
              </span>
              <span className="text-[11px] text-[#999999]">チェックイン</span>
              <span className="text-xl font-bold tracking-wide text-[#333333]">
                16:00〜22:00
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 border border-[#eeeeee] rounded-xl py-6 px-4">
              <span className="text-[11px] tracking-[0.2em] text-[#999999]">
                CHECK-OUT
              </span>
              <span className="text-[11px] text-[#999999]">チェックアウト</span>
              <span className="text-xl font-bold tracking-wide text-[#333333]">
                〜10:00
              </span>
            </div>
          </div>
          <h2 className="mt-[10px] text-2xl font-bold tracking-[0.2em] text-[#333333]">
            Dormitory
          </h2>
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
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">
            Private Room
          </h2>
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

      <hr className="border-[#eeeeee]" />

      {/* ご留意事項 */}
      <section className="py-12 px-8 bg-white lg:py-20">
        <div className="flex flex-col items-center gap-6 sm:max-w-xl sm:mx-auto lg:max-w-2xl">
          <h2 className="text-2xl font-bold tracking-[0.2em] text-[#333333]">
            Notes
          </h2>
          <p className="text-[11px] text-[#999999]">
            宿泊に際してご留意いただきたい事項
          </p>
          <ul className="flex flex-col gap-4 w-full">
            {stayNotes.map((note) => (
              <li
                key={note}
                className="text-[13px] text-[#555555] leading-[1.8] pl-4 border-l border-[#eeeeee]"
              >
                {note}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 w-full">
            <h3 className="text-base font-bold text-[#333333]">入浴について</h3>
            <p className="text-[13px] text-[#555555] leading-[1.8]">
              NISHIBORAKANは共同のお風呂です。宿泊者が少ない場合、一つのお風呂を男女で時間を区切ってご利用いただきます。ご理解とご協力をお願いいたします。
            </p>
            <p className="text-[13px] text-[#555555] leading-[1.8]">
              利用時間 16:00〜23:00（状況によって変動あり）
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h3 className="text-base font-bold text-[#333333]">
              キャンセル料金について
            </h3>
            <p className="text-[13px] text-[#555555] leading-[1.8]">
              ご宿泊をキャンセルされる場合は、下記のキャンセル料を申し受けます。お早めにご連絡ください。キャンセル料は、理由にかかわらず免除できません。当日のキャンセルに限り、ご予約の夕食費も申し受けます。
            </p>
            <div className="flex flex-col">
              {cancelFees.map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-3 border-b border-[#eeeeee]"
                >
                  <span className="text-[12px] text-[#999999]">{label}</span>
                  <span className="text-sm font-bold text-[#333333]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
