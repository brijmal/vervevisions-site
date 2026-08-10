import Link from "next/link";
import DownloadCTA from "./DownloadCTA";

export type ContentSection = {
  heading: string;
  subheading?: string;
  paragraphs: string[];
};

export type ContentPageProps = {
  title: string;
  description: string;
  intro: string;
  sections: ContentSection[];
  relatedLinks?: { href: string; label: string }[];
  breadcrumb?: { label: string; href?: string };
  showLearnMoreInCTA?: boolean;
  ctaDescription?: string;
};

export default function ContentPage({
  title,
  description,
  intro,
  sections,
  relatedLinks,
  breadcrumb,
  showLearnMoreInCTA = false,
  ctaDescription,
}: ContentPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {breadcrumb && (
          <nav className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
            {breadcrumb.href ? (
              <Link
                href={breadcrumb.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                {breadcrumb.label}
              </Link>
            ) : (
              <span>{breadcrumb.label}</span>
            )}
            <span className="mx-2">/</span>
            <span className="text-zinc-700 dark:text-zinc-300">{title}</span>
          </nav>
        )}

        <header>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </header>

        {intro ? (
          <p className="mt-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {intro}
          </p>
        ) : null}

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                {section.heading}
              </h2>
              {section.subheading ? (
                <h3 className="mt-3 text-lg font-medium text-zinc-800 dark:text-zinc-200">
                  {section.subheading}
                </h3>
              ) : null}
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {relatedLinks && relatedLinks.length > 0 && (
          <aside className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Related reading
            </h2>
            <ul className="mt-4 space-y-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="mt-16">
          <DownloadCTA
            description={ctaDescription}
            showLearnMore={showLearnMoreInCTA}
          />
        </div>
      </article>
    </div>
  );
}
