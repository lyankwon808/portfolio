"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 바깥 클릭 & ESC로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="rounded-full border px-3 py-1 text-xs hover:bg-neutral-50"
      >
        Contact
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-56 rounded-xl border border-neutral-200/70 bg-white/95 backdrop-blur shadow-lg p-2 text-sm"
        >
          <a
            href="mailto:lyankwon808@gmail.com"
            className="block rounded-md px-3 py-2 hover:bg-neutral-50"
          >
            ✉️ Email
          </a>
          <a
            href="https://www.linkedin.com/in/hyukwoo-leon-kwon-33190161/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-3 py-2 hover:bg-neutral-50"
          >
            in&nbsp;LinkedIn
          </a>
          <a
            href="https://instagram.com/leon_h_kwon"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-3 py-2 hover:bg-neutral-50"
          >
            📷 Instagram
          </a>
        </div>
      )}
    </div>
  );
}