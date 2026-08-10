import Link from "next/link";
import Image from "next/image";
import { MTH_PRODUCT_PATH } from "@/lib/mth/constants";
import { seoPages } from "@/lib/mth/seo-pages";

const navLinks = [
  { href: "/", label: "Home" },
  { href: MTH_PRODUCT_PATH, label: "MTH" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-lg object-contain"
              aria-hidden
            />
            <div>
              <p className="font-semibold text-white">Verve Visions</p>
              <p className="mt-1 max-w-sm text-sm text-zinc-400">
                We make apps to enrich lives of the people.
              </p>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold text-white">Site</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-medium text-zinc-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="MTH solutions">
            <p className="text-sm font-semibold text-white">MTH solutions</p>
            <ul className="mt-4 space-y-2 text-sm">
              {seoPages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}`}
                    className="font-medium text-zinc-400 transition-colors hover:text-white"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Verve Visions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
