import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-8">お問い合わせ</h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">電話</h2>
          <p className="text-gray-600">070-5667-7101</p>
          <p className="text-gray-500 text-sm mt-1">繋がりやすい時間：15:00〜21:00</p>
          <p className="text-gray-500 text-sm">出られない場合は折り返しあり</p>
        </div>

        <div className="border rounded p-6">
          <h2 className="text-lg font-semibold mb-2">Instagram</h2>
          <a
            href="https://www.instagram.com/guesthouse_nishiborakan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            @guesthouse_nishiborakan
          </a>
        </div>
      </div>

      <Link href="/" className="mt-12 text-blue-600 underline">
        トップへ戻る
      </Link>
    </main>
  );
}
