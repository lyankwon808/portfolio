"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
// 경로가 맞다면 그대로, 절대 경로를 쓰면 더 안전합니다: import { projects } from "@/lib/projects";
import { projects } from "../lib/projects";

export default function Home() {
  const [filter, setFilter] =
    useState<"ALL" | "PRODUCTION" | "CONCEPT">("ALL");

  const visible = useMemo(() => {
    if (filter === "PRODUCTION") return projects.filter(p => p.type === "Production");
    if (filter === "CONCEPT")    return projects.filter(p => p.type === "Concept");
    return projects;
  }, [filter]);

  return (
    <main className="mx-auto max-w-[1400px] px-4 pt-16 pb-10">
      {/* 상단 필터 */}
      <section className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Work</h1>
        <div className="flex flex-wrap gap-2 text-sm">
          <button onClick={() => setFilter("ALL")}
            className={`rounded-full border px-3 py-1 ${filter === "ALL" ? "bg-black text-white" : "hover:bg-neutral-50"}`}>
            All
          </button>
          <button onClick={() => setFilter("PRODUCTION")}
            className={`rounded-full border px-3 py-1 ${filter === "PRODUCTION" ? "bg-black text-white" : "hover:bg-neutral-50"}`}>
            Production
          </button>
          <button onClick={() => setFilter("CONCEPT")}
            className={`rounded-full border px-3 py-1 ${filter === "CONCEPT" ? "bg-black text-white" : "hover:bg-neutral-50"}`}>
            Concept
          </button>
        </div>
      </section>

      {/* 썸네일 3:1 카드 그리드 */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {visible.map((p) => (
          <Link
            key={p.id}
            href={`/work/${p.id}`}
            className="group block focus:outline-none text-white visited:text-white no-underline"
            style={{ color: "#fff" }}
          >
            <article
              className="rounded-xl overflow-hidden border border-neutral-200/60 bg-white
                         transition-shadow duration-300 ease-out
                         hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,.35)]
                         focus-visible:ring-2 focus-visible:ring-black/60"
            >
              <div className="relative isolate overflow-hidden" style={{ aspectRatio: "3 / 1" }}>
                {/* 이미지 */}
                <Image
                  src={p.thumb ?? p.slides[0]}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="z-0 object-cover transition duration-300 ease-out
                             brightness-[.82] group-hover:brightness-100 group-hover:scale-[1.03]
                             will-change-transform"
                />

                {/* 어둡게 → hover에서 사라짐 */}
                <div className="absolute inset-0 z-10 bg-black/30 opacity-100
                                transition-opacity duration-300 ease-out group-hover:opacity-0" />

                {/* 자막 (오버레이 위에 오도록 z-30) */}
                <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-start pl-[32px] sm:pl-[36px] md:pl-[40px]">
                  <span
                    className="font-brand text-white text-left select-none
                               [font-size:clamp(18px,3.4vw,54px)]
                               leading-tight tracking-tight
                               drop-shadow-[0_3px_14px_rgba(0,0,0,.65)]
                               transition duration-300 ease-out
                               translate-y-[30px] group-hover:translate-y-[34px]"
                  >
                    {p.subtitle ?? p.title}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Contact */}
{/* Contact (아이콘 버튼 버전) */}
<section id="contact" className="mt-12 max-w-3xl">
  <h2 className="text-2xl font-semibold">Contact</h2>
  <p className="mt-2 text-neutral-700">
    Open to collaboration, roles, and studio inquiries.
  </p>

  <div className="mt-5 flex items-center gap-3">
    {/* Email */}
    <a
      href="lyankwon808@gmail.com?subject=Portfolio%20inquiry"
      aria-label="Email"
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 hover:bg-black hover:text-white transition"
    >
      {/* Envelope icon */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <path d="M3 7l9 6 9-6"></path>
      </svg>
      <span className="sr-only">Email</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/hyukwoo-leon-kwon-33190161/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 hover:bg-[#0a66c2] hover:text-white transition"
    >
      {/* LinkedIn logo */}
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM.5 8.5h4.95V24H.5zM8.5 8.5h4.74v2.1h.07c.66-1.25 2.28-2.57 4.69-2.57 5.01 0 5.94 3.3 5.94 7.58V24h-4.95v-6.7c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24H8.5z"/>
      </svg>
      <span className="sr-only">LinkedIn</span>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/leon_h_kwon"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white transition"
      style={{ backgroundClip: "padding-box" }}
    >
      {/* Instagram outline */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle>
      </svg>
      <span className="sr-only">Instagram</span>
    </a>
  </div>
</section>


    </main>
  );
}
