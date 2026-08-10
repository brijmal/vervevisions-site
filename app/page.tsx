import Link from "next/link";
import { MTH_PRODUCT_PATH } from "@/lib/mth/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            We make apps to enrich lives of the people.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            At Verve Visions, we build software that matters—apps that simplify,
            inspire, and make a real difference for the people who use them.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={MTH_PRODUCT_PATH}
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Main Theek Hoon
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Our product
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              Main Theek Hoon
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              A simple daily check-in app for seniors and people living alone.
              Privacy-first, no GPS tracking—peace of mind for you and your
              family.
            </p>
            <Link
              href={MTH_PRODUCT_PATH}
              className="mt-6 inline-block text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              Learn about MTH →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-zinc-900 px-6 py-16 text-center dark:bg-zinc-800 sm:px-12">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready to build something that matters?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            Tell us about your idea. We’d love to help you bring it to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
