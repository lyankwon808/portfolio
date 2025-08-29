"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ProjectViewer({
  slides,
  title,
}: {
  slides: string[];
  title: string;
}) {
  const [dir, setDir] = useState<"h" | "v">("h");
  const ref = useRef<HTMLDivElement>(null);

  // scroll을 안정화 (dir 변경 시에만 새로 생성)
  const scroll = useCallback((d: number) => {
    const el = ref.current;
    if (!el) return; // 안전가드

    const amt = dir === "h" ? el.clientWidth : el.clientHeight;
    el.scrollBy({
      left: dir === "h" ? amt * d : 0,
      top: dir === "v" ? amt * d : 0,
      behavior: "smooth",
    });
  }, [dir]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // ← 키보드 화살표/페이지 키로 넘기기
      if (dir === "h" && (e.key === "ArrowRight" || e.key === "PageDown")) { e.preventDefault(); scroll(1); }
      if (dir === "h" && (e.key === "ArrowLeft"  || e.key === "PageUp"))   { e.preventDefault(); scroll(-1); }
      if (dir === "v" &&  e.key === "ArrowDown")                           { e.preventDefault(); scroll(1); }
      if (dir === "v" &&  e.key === "ArrowUp")                             { e.preventDefault(); scroll(-1); }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dir, scroll]); // ← scroll을 의존성에 추가

  return (
    <section
      ref={ref}
      className={`mt-6 relative ${
        dir === "h" ? "overflow-x-auto snap-x" : "overflow-y-auto snap-y"
      } snap-mandatory h-[85vh] rounded-xl ring-1 ring-black/5 bg-white`}
    >
      <div className={dir === "h" ? "flex h-full" : "flex flex-col min-h-full"}>
        {slides.map((src, i) => (
          <div
            key={i}
            className={`${
              dir === "h" ? "min-w-full h-full" : "w-full min-h-full"
            } flex items-center justify-center snap-center p-2`}
          >
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              width={1800}
              height={1200}
              className="max-w-full max-h-full object-contain"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* 좌우 네비게이션 버튼 */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <button
          onClick={() => scroll(-1)}
          className="pointer-events-auto px-3 py-2 bg-white/70 rounded-full"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => scroll(1)}
          className="pointer-events-auto px-3 py-2 bg-white/70 rounded-full"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* 방향 토글 */}
      <div className="absolute top-2 right-2">
        <button
          onClick={() => setDir(dir === "h" ? "v" : "h")}
          className="border rounded-full px-3 py-1 text-xs bg-white/80"
          aria-label="Toggle orientation"
        >
          {dir === "h" ? "↕ Vertical" : "⟷ Horizontal"}
        </button>
      </div>
    </section>
  );
}
