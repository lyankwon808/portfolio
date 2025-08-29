export const metadata = { title: "About — Kwon Hyukwoo" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">About me</h1>
      <p className="mt-4 text-neutral-700 leading-relaxed">
        뮌헨 기반의 인더스트리얼/모빌리티 디자이너 권혁우입니다. 자동차 인테리어/익스테리어, HMI, UX, CMF를
        가로지르며 사람 중심의 경험을 설계합니다.
      </p>

      <h2 className="mt-8 text-xl font-medium">Selected programs</h2>
      <ul className="mt-3 space-y-2 text-neutral-700 text-sm">
        <li>• ONVO L60 — Production (NIO) · 2021.06–2023.10</li>
        <li>• Golden Sunflower — Concept (FAW) · 2023.12–2024.04</li>
        <li>• Baojun E300 — Interior · 2019.03–2019.08</li>
        <li>• Baojun RM-5 — Interior · 2018.10–2019.03</li>
      </ul>

      <div className="mt-10">
        <a href="/" className="underline underline-offset-4">← Back to Work</a>
      </div>
    </main>
  );
}