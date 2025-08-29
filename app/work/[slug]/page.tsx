import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/projects";
import ProjectViewer from "./ProjectViewer";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 👈 비동기로 받기
  const p = projects.find((x) => x.id === slug);
  if (!p) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{p.title}</h1>
          <p className="text-sm text-neutral-500">
             {p.period && <span> · {p.period}</span>}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/" className="text-sm underline underline-offset-4">
            Back
          </Link>
        </div>
      </header>

      {/* 슬라이드 뷰어 */}
      <ProjectViewer slides={p.slides} title={p.title} />

      <section className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
        <div className="rounded-xl border p-4">
          <p className="font-medium">Role</p>
          <p className="mt-1">{p.role}</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border p-4 md:col-span-2">
          <p className="font-medium">Overview</p>
          <p className="mt-1 text-neutral-700 leading-relaxed">{p.blurbEN ?? p.blurbKR}</p>
        </div>
      </section>
    </main>
  );
}
