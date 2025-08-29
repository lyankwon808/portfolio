"use client";

import Image from "next/image";
import site from "@/lib/site";

type IconLinkProps = {
  href: string;
  label: string;
  src: string;     // /public 기준 경로 (/icons/...)
  size?: number;   // 버튼 지름
  icon?: number;   // 아이콘 픽셀 크기
  newTab?: boolean;
};

function IconLink({
  href,
  label,
  src,
  size = 44,
  icon = 24,
  newTab = true,
}: IconLinkProps) {
  return (
    <a
      href={href}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={label}
      className="
        group inline-flex items-center justify-center
        rounded-full border border-neutral-300
        hover:border-purple-600 hover:bg-purple-50
        transition-colors
      "
      style={{ width: size, height: size }}
    >
      <span className="sr-only">{label}</span>
      <Image
        src={src}             // 예: "/icons/email@2x.png"
        alt=""
        width={icon}
        height={icon}
        // PNG가 또렷하게 보이도록(가능한 브라우저에서)
        style={{ imageRendering: "crisp-edges" as any }}
      />
    </a>
  );
}

export default function ContactMenu() {
  // 기본 메일앱 열기(간단/확실)
  const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Portfolio inquiry"
  )}`;

  return (
    <div className="mt-4 flex items-center gap-8">
      <IconLink
        href={emailHref}
        label="Email"
        src="/icons/email@2x.png"
        size={44}
        icon={24}
        newTab={false}
      />
      <IconLink
        href={site.linkedin}
        label="LinkedIn"
        src="/icons/linkedin@2x.png"
        size={44}
        icon={24}
      />
      <IconLink
        href={site.instagram}
        label="Instagram"
        src="/icons/instagram@2x.png"
        size={44}
        icon={24}
      />
    </div>
  );
}
