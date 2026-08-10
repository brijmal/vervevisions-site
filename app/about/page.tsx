import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Verve Visions",
  description:
    "Learn about Verve Visions and our mission to create technology that enriches people's lives.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            About Verve Visions
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            We create technology to enrich people's lives.
          </p>

          <div className="mt-12 space-y-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              That mission drives everything we do. We believe technology should
              serve people—not the other way around. Every product we build is
              designed with real users in mind, solving real problems and
              creating moments of clarity, connection, or joy.
            </p>
            <p>
              Whether we’re crafting a mobile app, a web platform, or something
              entirely new, we focus on quality, usability, and impact. Our goal
              is to leave every project better than we found it and every user
              better off for having used what we built.
            </p>
            <p>
              We’d love to hear about your vision. If you have an idea that could
              enrich someone’s life, we’re here to help you bring it to life.
            </p>
          </div>

          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
