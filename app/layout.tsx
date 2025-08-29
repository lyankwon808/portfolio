// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import Nav from "./components/Nav";
import localFont from "next/font/local";

const brandon = localFont({
  src: [
    { path: "./fonts/brandon-text/BrandonText-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/brandon-text/BrandonText-Medium.otf",  weight: "500", style: "normal" },
    { path: "./fonts/brandon-text/BrandonText-Bold.otf",    weight: "700", style: "normal" },
  ],
  variable: "--font-brand",
  display: "swap",
});

export const metadata = {
  title: "Kwon Hyukwoo — Portfolio",
  description: "Industrial / Mobility designer portfolio",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Kwon Hyukwoo — Portfolio",
    description: "Industrial / Mobility designer portfolio",
    images: ["/images/oakley-00.jpg"], // 대표 썸네일 하나 지정
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
     <html lang="en" className={brandon.variable}>
      <body className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-black selection:text-white">
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-lg">Kwon Hyukwoo</Link>

           <header className="...">
  <div className="...">
    <Link href="/" className="...">Kwon Hyukwoo</Link>

    {/* <Nav /> */}   {/* ← 이 줄만 이렇게 바꾸면 됩니다 */}

    <Link href="#contact" className="...">Contact</Link>
  </div>
</header>

            <Link
              href="#contact"
              className="hidden sm:inline-block rounded-full border px-3 py-1 text-xs hover:bg-neutral-50"
            >
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