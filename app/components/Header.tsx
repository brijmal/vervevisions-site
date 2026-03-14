import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-zinc-800 dark:bg-zinc-950/95 dark:supports-[backdrop-filter]:bg-zinc-950/80">
      <div className="mx-auto flex min-h-24 max-w-6xl items-end justify-between px-6 py-2">
        <Link
          href="/"
          className="flex items-end text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          style={{ gap: "4px" }}
        >
          <Image
            src="/logo.png"
            alt="Verve Visions"
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 translate-y-1 rounded-lg object-contain"
            priority
          />
          <span className="hidden pb-1.5 sm:inline">Verve Visions</span>
        </Link>
        <nav className="flex items-end gap-8 pb-1.5" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
