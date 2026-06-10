import Link from "next/link";

export default function Meals() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-8">食事</h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">夕食</h2>
          <p className="text-gray-600">鍋（事前予約制）</p>
        </div>

        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">朝食</h2>
          <p className="text-gray-600">洋食（事前予約制）</p>
        </div>

        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">厨房セルフ利用</h2>
          <p className="text-gray-600">平日限定（要予約）</p>
        </div>
      </div>

      <Link href="/" className="mt-12 text-blue-600 underline">
        トップへ戻る
      </Link>
    </main>
  );
}
