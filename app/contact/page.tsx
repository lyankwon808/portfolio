// app/contact/page.tsx
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact — Kwon Hyukwoo",
};

function pretty(url: string) {
  try {
    const u = new URL(url);
    return `${u.host}${u.pathname}`.replace(/\/$/, "");
  } catch {
    return url;
  }
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-neutral-600">
          Feel free to reach out via email or connect on LinkedIn.
          {site.instagram ? " You can also find me on Instagram." : ""}
        </p>
      </header>

      <section className="space-y-4 text-lg">
        {/* Email */}
        <div>
          <span className="font-medium mr-2">Email</span>
          <Link
            href={`mailto:${site.email}`}
            className="underline underline-offset-4 hover:opacity-80"
          >
            {site.email}
          </Link>
        </div>

        {/* LinkedIn */}
        <div>
          <span className="font-medium mr-2">LinkedIn</span>
          <Link
            href={site.linkedin}
            target="_blank"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {pretty(site.linkedin)}
          </Link>
        </div>

        {/* Instagram (옵션) */}
        {site.instagram && site.instagram.trim() !== "" && (
          <div>
            <span className="font-medium mr-2">Instagram</span>
            <Link
              href={site.instagram}
              target="_blank"
              className="underline underline-offset-4 hover:opacity-80"
            >
              {pretty(site.instagram)}
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
