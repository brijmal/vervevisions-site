import { SOCIAL_LABELS, SOCIAL_LINKS } from "@/lib/social";

type SocialLinksProps = {
  className?: string;
  variant?: "dark" | "light";
};

export default function SocialLinks({
  className = "",
  variant = "dark",
}: SocialLinksProps) {
  const titleClass =
    variant === "dark" ? "text-white" : "text-zinc-900 dark:text-zinc-50";
  const linkClass =
    variant === "dark"
      ? "text-zinc-400 hover:text-white"
      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white";

  return (
    <div className={className}>
      <p className={`text-sm font-semibold ${titleClass}`}>Follow us</p>
      <ul className="mt-3 space-y-2 text-sm">
        <li>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium transition-colors ${linkClass}`}
          >
            Instagram · {SOCIAL_LABELS.instagram}
          </a>
        </li>
        <li>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium transition-colors ${linkClass}`}
          >
            {SOCIAL_LABELS.facebook}
          </a>
        </li>
      </ul>
    </div>
  );
}
