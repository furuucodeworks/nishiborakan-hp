"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/accommodation", label: "宿泊" },
  { href: "/meals", label: "食事" },
  { href: "/facilities", label: "部屋・施設" },
  { href: "/access", label: "アクセス" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="flex items-center justify-between px-5 h-14 lg:px-16 lg:h-16">
        <Link
          href="/"
          className="text-xs font-bold tracking-[0.2em] text-[#333333] transition-opacity duration-200 hover:opacity-60"
        >
          NISHIBORAKAN
        </Link>

        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-[#555555] transition-colors duration-200 hover:text-[#333333] hover:underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-[#333333] transition-opacity duration-200 hover:opacity-50 lg:hidden"
          aria-label="メニューを開く"
        >
          {isOpen ? "×" : "≡"}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden flex flex-col bg-white border-t border-[#eeeeee]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-[#555555] px-5 py-4 border-b border-[#eeeeee] transition-colors duration-200 hover:bg-[#f0f0f0] hover:text-[#333333]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
