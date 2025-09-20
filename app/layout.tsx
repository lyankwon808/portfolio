// app/layout.tsx (일부)
import Link from "next/link";
import ContactMenu from "./components/ContactMenu"; // 원하면 헤더에도 표시

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-lg">
              Kwon Hyukwoo
            </Link>

            {/* 헤더 우측에 아이콘도 보이고 싶으면 이 줄 주석 해제 */}
            {/* <div className="hidden sm:block"><ContactMenu /></div> */}

            {/* 반드시 /#contact 가 아니라 /contact 로! */}
            <Link href="/contact" className="rounded-full border px-3 py-1 text-xs hover:bg-neutral-50">
              Contact
            </Link>
          </div>
        </header>

        {children}

        <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500">
          © {new Date().getFullYear()} Kwon Hyukwoo
        </footer>
      </body>
    </html>
  );
}
