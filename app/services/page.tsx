import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Verve Visions",
  description:
    "Verve Visions builds apps that enrich lives. Explore our app development and design services.",
};

const services = [
  {
    title: "Mobile app development",
    description:
      "Native and cross-platform apps for iOS and Android that are fast, intuitive, and built to last.",
  },
  {
    title: "Web applications",
    description:
      "Modern web apps and platforms that work beautifully on every device and scale with your users.",
  },
  {
    title: "Product design",
    description:
      "User-centered design that puts people first—from research and wireframes to polished interfaces.",
  },
  {
    title: "Consulting & strategy",
    description:
      "We help you define your product vision, prioritize features, and plan a path to launch.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Our services
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            We build apps and experiences designed to enrich lives. Here’s how
            we can help.
          </p>
        </div>

        <ul className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {service.title}
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            Have a project in mind? We’d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
