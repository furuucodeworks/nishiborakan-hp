import Link from "next/link";

export default function Accommodation() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-8">宿泊プラン・料金</h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">ドミトリー（2段ベッドタイプ）</h2>
          <p className="text-gray-600">平日 ¥2,500〜</p>
        </div>

        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">個室 TypeA（5人部屋）</h2>
          <p className="text-gray-600">¥25,000〜（部屋単位）</p>
        </div>
      </div>

      <Link href="/" className="mt-12 text-blue-600 underline">
        トップへ戻る
      </Link>
    </main>
  );
}
