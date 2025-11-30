"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href === "/" && pathname?.startsWith("/work"));

  const Item = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className={`px-3 py-1 rounded-full text-sm hover:bg-neutral-100 ${
        isActive(href) ? "bg-black text-white hover:bg-black" : ""
      }`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="flex items-center gap-2">
      <Item href="/">Work</Item>
      <Item href="/about">About</Item>
      <Item href="/contact">Contact</Item>
    </nav>
  );
}
