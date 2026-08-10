import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/app/components/mth/ContentPage";
import { getResourcePage } from "@/lib/mth/resource-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { resourcePages } = await import("@/lib/mth/resource-pages");
  return resourcePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(slug);
  if (!page) return {};
  return {
    title: `${page.title} | Verve Visions`,
    description: page.description,
  };
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const page = getResourcePage(slug);
  if (!page) notFound();
  return <ContentPage {...page} showLearnMoreInCTA />;
}
