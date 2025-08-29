// app/components/ContactMenu.tsx
import site from "../../lib/site";

export default function ContactMenu() {
  return (
    <div className="flex items-center gap-3">
      {/* Email */}
      <a
        href={`mailto:${site.email}?subject=Portfolio%20inquiry`}
        aria-label="Email"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-neutral-50"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <rect x="3" y="7" width="18" height="12" rx="2"></rect>
          <path d="M3 9l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <span className="sr-only">Email</span>
      </a>

      {/* LinkedIn */}
      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-neutral-50"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.9V24H.5V8.5zM9 8.5h4.7v2.11h.07c.66-1.24 2.27-2.55 4.67-2.55C22.9 8.06 24 10.1 24 13.43V24h-4.9v-9.2c0-2.2-.79-3.7-2.77-3.7-1.51 0-2.4 1.02-2.8 2.01-.14.34-.18.82-.18 1.3V24H8.99c.06-10.84.01-15.5.01-15.5z"/>
        </svg>
        <span className="sr-only">LinkedIn</span>
      </a>

      {/* Instagram */}
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:bg-neutral-50"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
        <span className="sr-only">Instagram</span>
      </a>
    </div>
  );
}
