import Link from "next/link";

export default function Access() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-8">アクセス</h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">場所</h2>
          <p className="text-gray-600">鷲ヶ岳スキー場の敷地内（料金所を超えた先）</p>
        </div>

        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">駐車場</h2>
          <p className="text-gray-600">あり（満車時はCAFENANASHI隣を利用）</p>
        </div>

        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">Googleマップ</h2>
          <a
            href="https://goo.gl/maps/jnDoPDMRp4hcGeDSA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            地図を開く
          </a>
        </div>
      </div>

      <Link href="/" className="mt-12 text-blue-600 underline">
        トップへ戻る
      </Link>
    </main>
  );
}
