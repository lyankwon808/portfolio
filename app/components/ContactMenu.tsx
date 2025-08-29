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
      className="inline-flex items-center justify-center rounded-full border-2
                 border-purple-600/60 hover:border-purple-700/80 transition
                 size-[56px] bg-white/85 shadow-sm"
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
