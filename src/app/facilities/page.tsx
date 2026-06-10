import Link from "next/link";

export default function Facilities() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-8">部屋・施設</h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="border rounded p-6">
          <p className="text-gray-600">詳細情報は準備中です。</p>
        </div>
      </div>

      <Link href="/" className="mt-12 text-blue-600 underline">
        トップへ戻る
      </Link>
    </main>
  );
}
