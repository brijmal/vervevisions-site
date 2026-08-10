import type { Metadata } from "next";
import Link from "next/link";
import { resourcePages } from "@/lib/mth/resource-pages";
import { MTH_PRODUCT_PATH } from "@/lib/mth/constants";

export const metadata: Metadata = {
  title: "Resources | Verve Visions",
  description:
    "Articles on daily check-ins, family reassurance, privacy-first safety, and wellness—for people exploring Main Theek Hoon and peace of mind.",
};

export default function ResourcesIndexPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Resources
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            Answers to questions people ask before they&apos;re ready to
            download anything—daily check-ins, family reassurance, privacy, and
            more.
          </p>

          <ul className="mt-12 space-y-4">
            {resourcePages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/resources/${page.slug}`}
                  className="group block rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/30"
                >
                  <h2 className="text-lg font-semibold text-zinc-900 group-hover:underline dark:text-zinc-50">
                    {page.title}
                  </h2>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {page.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center">
            <Link
              href={MTH_PRODUCT_PATH}
              className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              Learn about Main Theek Hoon →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
