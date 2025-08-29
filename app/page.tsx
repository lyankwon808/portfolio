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
      <section id="contact" className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-neutral-700">
          Open to collaboration, roles, and studio inquiries.
        </p>
        <a
          href="mailto:you@example.com"
          className="inline-block mt-3 rounded-full bg-black text-white px-5 py-2 text-sm"
        >
          Email me
        </a>
      </section>
    </main>
  );
}
