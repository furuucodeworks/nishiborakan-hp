import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-2">GUEST HOUSE NISHIBORAKAN</h1>
      <p className="text-gray-600 mb-12">鷲ヶ岳スキー場に一番近いゲストハウス</p>

      <nav className="flex flex-col gap-4 text-center">
        <Link href="/accommodation" className="text-blue-600 underline">宿泊</Link>
        <Link href="/meals" className="text-blue-600 underline">食事</Link>
        <Link href="/facilities" className="text-blue-600 underline">部屋・施設</Link>
        <Link href="/access" className="text-blue-600 underline">アクセス</Link>
        <Link href="/contact" className="text-blue-600 underline">お問い合わせ</Link>
      </nav>
    </main>
  );
}
