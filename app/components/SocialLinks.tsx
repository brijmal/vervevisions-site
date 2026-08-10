import { SOCIAL_LABELS, SOCIAL_LINKS } from "@/lib/social";

type SocialLinksProps = {
  className?: string;
  variant?: "dark" | "light";
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

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
            className={`inline-flex items-center gap-2 font-medium transition-colors ${linkClass}`}
          >
            <InstagramIcon className="h-4 w-4 shrink-0" />
            Instagram · {SOCIAL_LABELS.instagram}
          </a>
        </li>
        <li>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-medium transition-colors ${linkClass}`}
          >
            <FacebookIcon className="h-4 w-4 shrink-0" />
            {SOCIAL_LABELS.facebook}
          </a>
        </li>
      </ul>
    </div>
  );
}
