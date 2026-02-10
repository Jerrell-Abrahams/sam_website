"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/sam-logo.svg"
            alt="SAM Logo"
            width={100}
            height={100}
            className="invert"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#work">
            Work
          </a>
          <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/about-us">
            About
          </a>
          <a
            href="/contact-us"
            className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all active:scale-95"
          >
            Start a Project
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-black/90 backdrop-blur border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-6">
            <a
              onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
              href="#work"
            >
              Work
            </a>
            <a
              onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
              href="/about-us"
            >
              About
            </a>

            <a
              onClick={() => setOpen(false)}
              href="/contact-us"
              className="mt-4 bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-bold text-center transition-all active:scale-95"
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
