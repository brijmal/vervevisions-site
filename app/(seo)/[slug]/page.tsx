import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/app/components/mth/ContentPage";
import { getSEOPage } from "@/lib/mth/seo-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { seoPages } = await import("@/lib/mth/seo-pages");
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSEOPage(slug);
  if (!page) return {};
  return {
    title: `${page.title} | Verve Visions`,
    description: page.description,
  };
}

export default async function SEOPage({ params }: Props) {
  const { slug } = await params;
  const page = getSEOPage(slug);
  if (!page) notFound();
  return <ContentPage {...page} />;
}
