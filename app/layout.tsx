import "./globals.css";   // ✅ 전역 스타일 복구
import Link from "next/link";
import ContactMenu from "./components/ContactMenu";
import { Analytics } from "@vercel/analytics/react";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-lg">
              Kwon Hyukwoo
            </Link>

        
            {/* <div className="hidden sm:block"><ContactMenu /></div> */}


            <Link href="/contact" className="rounded-full border px-3 py-1 text-xs hover:bg-neutral-50">
              Contact
            </Link>
          </div>
        </header>

        {children}

        <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500">
          © {new Date().getFullYear()} Kwon Hyukwoo
        </footer>

         <Analytics />
      </body>
    </html>
  );
}

