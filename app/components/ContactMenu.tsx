"use client";

import Image from "next/image";
import site from "@/lib/site";

type IconLinkProps = {
  href: string;         // 이동할 URL
  label: string;        // 접근성용 라벨
  src: string;          // /public 기준 아이콘 경로
  size?: number;        // 아이콘 크기(px)
};

function IconLink({ href, label, src, size = 40 }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-[56px] items-center justify-center
                 rounded-full bg-white/90 shadow-sm hover:shadow-md transition
                 border-0 ring-0 outline-none
                 focus-visible:outline-2 focus-visible:outline-neutral-300 focus-visible:outline-offset-2"
      // ↑ 완전히 없애고 싶으면 focus-visible… 3개도 지워도 됨
    >
      <Image
        src={src}
        alt={label}
        width={size}
        height={size}
        className="object-contain"
        priority={false}
      />
    </a>
  );
}

export default function ContactMenu() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Portfolio inquiry")}`;

  return (
    <div className="mt-4 flex gap-3">
      <IconLink href={mailto} label="Email"     src="/icons/gmail@2x.png"     size={40} />
      <IconLink href={site.linkedin} label="LinkedIn" src="/icons/linkedin@2x.png"  size={40} />
      {/* instagram이 선택값이면 조건부 렌더링 */}
      {site.instagram && (
        <IconLink href={site.instagram} label="Instagram" src="/icons/instagram@2x.png" size={40} />
      )}
    </div>
  );
}
