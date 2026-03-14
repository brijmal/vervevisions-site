import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-lg object-contain"
              aria-hidden
            />
            <div>
              <p className="font-semibold text-white">
                Verve Visions
              </p>
              <p className="mt-1 max-w-sm text-sm text-zinc-400">
                We make apps to enrich lives of the people.
              </p>
            </div>
          </div>
          <nav
            className="flex flex-wrap gap-6 text-sm"
            aria-label="Footer navigation"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Verve Visions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
