import Link from "next/link";
import Image from "next/image";
import {
  MTH_DOWNLOAD_URL,
  MTH_LOGO_PATH,
  MTH_PRODUCT_NAME,
  MTH_PRODUCT_PATH,
} from "@/lib/mth/constants";

type DownloadCTAProps = {
  variant?: "primary" | "inline";
  showLogo?: boolean;
  className?: string;
};

export default function DownloadCTA({
  variant = "primary",
  showLogo = false,
  className = "",
}: DownloadCTAProps) {
  if (variant === "inline") {
    return (
      <Link
        href={MTH_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50 ${className}`}
      >
        Download {MTH_PRODUCT_NAME} →
      </Link>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-zinc-900 px-6 py-12 text-center dark:bg-zinc-800 sm:px-10 ${className}`}
    >
      {showLogo && (
        <Image
          src={MTH_LOGO_PATH}
          alt=""
          width={64}
          height={64}
          className="mx-auto rounded-xl shadow-md"
          aria-hidden
        />
      )}
      <h2 className={`text-2xl font-semibold text-white sm:text-3xl ${showLogo ? "mt-6" : ""}`}>
        Ready to check in with peace of mind?
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-zinc-300">
        {MTH_PRODUCT_NAME} makes daily wellness check-ins simple—for you and the
        people who care about you.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href={MTH_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          Download the app
        </Link>
        <Link
          href={MTH_PRODUCT_PATH}
          className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-400"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
