import type { Metadata } from "next";
import Link from "next/link";
import DownloadCTA from "@/app/components/mth/DownloadCTA";
import {
  MTH_DOWNLOAD_URL,
  MTH_PRODUCT_NAME,
  MTH_TAGLINE,
} from "@/lib/mth/constants";

export const metadata: Metadata = {
  title: `${MTH_PRODUCT_NAME} | Daily Check-In App | Verve Visions`,
  description:
    "Main Theek Hoon (MTH) is a simple daily check-in app for seniors and people living alone. Privacy-first, no GPS tracking. Give your family peace of mind.",
};

const features = [
  {
    title: "One-tap daily check-in",
    description:
      "Confirm you're okay with a single tap—no complicated menus or long forms.",
  },
  {
    title: "SMS alerts for family",
    description:
      "Trusted contacts get notified via text if you miss a check-in, so they know when to reach out.",
  },
  {
    title: "No GPS tracking",
    description:
      "Your location stays private. Reassurance without surveillance.",
  },
  {
    title: "Built for simplicity",
    description:
      "Designed for seniors and anyone who wants technology that just works.",
  },
];

const whoItsFor = [
  "Seniors who want independence with a safety net",
  "People living alone who want to reassure family",
  "Adult children checking on elderly parents",
  "Families spread across cities who want daily peace of mind",
];

export default function MainTheekHoonPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Verve Visions Product
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            {MTH_PRODUCT_NAME}
          </h1>
          <p className="mt-2 text-xl text-zinc-600 dark:text-zinc-400">
            {MTH_TAGLINE}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            &ldquo;Main theek hoon&rdquo; means &ldquo;I&apos;m fine&rdquo; in
            Hindi. MTH is a daily wellness check-in app that helps you stay
            connected with the people who care about you—simply, privately, and
            on your terms.
          </p>
          <Link
            href={MTH_DOWNLOAD_URL}
            className="mt-10 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Download the app
          </Link>
        </div>
      </section>

      {/* What MTH is */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              What MTH is
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Main Theek Hoon is a privacy-first daily check-in app. Each day,
              you confirm you&apos;re okay with one simple action. If you miss
              your check-in, the people you choose can be alerted—so they know
              to reach out, not to worry in silence.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              It&apos;s not an emergency response system or a location tracker.
              It&apos;s reassurance: for you, and for the family who loves you.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
            How it works
          </h2>
          <ol className="mt-8 space-y-8">
            {[
              {
                step: "1",
                title: "Set up your check-in",
                body: "Choose when you'd like to check in each day and add trusted family contacts.",
              },
              {
                step: "2",
                title: "Check in daily",
                body: "One tap when you're ready. That's it—no long forms or complicated steps.",
              },
              {
                step: "3",
                title: "Family stays informed",
                body: "If you miss a check-in, your contacts receive an SMS alert so they can reach out.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-zinc-50 dark:text-zinc-900">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
            Features
          </h2>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Privacy */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
            Privacy
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            MTH is built privacy-first. We don&apos;t track your GPS location.
            We collect only what&apos;s needed to run your daily check-in and
            notify the contacts you choose. Your data isn&apos;t sold to third
            parties.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Safety and surveillance are not the same thing—and we believe you
            deserve both peace of mind and respect for your independence.
          </p>
          <Link
            href="/privacy-first-safety-app"
            className="mt-6 inline-block text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            Learn about privacy-first safety →
          </Link>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              Who it&apos;s for
            </h2>
            <ul className="mt-8 space-y-3">
              {whoItsFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-lg text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900 dark:bg-zinc-50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <DownloadCTA />
      </section>
    </div>
  );
}
