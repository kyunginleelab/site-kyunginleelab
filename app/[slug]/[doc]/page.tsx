import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps } from "@/content/apps";
import { LEGAL_DOC_LABELS, LEGAL_DOC_SLUGS, legalDocKeys, type LegalDocKey } from "@/content/legal";
import LegalDocView from "@/components/legal-doc";
import JsonLd, { breadcrumb } from "@/components/json-ld";
import { openGraph } from "@/lib/seo";
import { site } from "@/site.config";

// URL 조각 → 문서 키
const keyBySlug: Record<string, LegalDocKey> = {
  [LEGAL_DOC_SLUGS.privacy]: "privacy",
  [LEGAL_DOC_SLUGS.deleteAccount]: "deleteAccount",
  [LEGAL_DOC_SLUGS.terms]: "terms",
};

export function generateStaticParams() {
  return apps
    .filter((a) => a.legal)
    .flatMap((a) => legalDocKeys(a.legal!).map((k) => ({ slug: a.slug, doc: LEGAL_DOC_SLUGS[k] })));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string; doc: string }> };

function resolve(slug: string, doc: string) {
  const app = apps.find((a) => a.slug === slug);
  const key = keyBySlug[doc];
  const legal = app?.legal?.[key];
  if (!app?.legal || !key || !legal) return null;
  return { app, key, legal };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, doc } = await params;
  const r = resolve(slug, doc);
  if (!r) return {};
  const title = `${r.app.name} ${r.legal.title}`;
  return {
    title,
    description: r.legal.description,
    alternates: { canonical: `/${slug}/${doc}/` },
    openGraph: openGraph({
      title,
      description: r.legal.description,
      path: `/${slug}/${doc}/`,
    }),
  };
}

export default async function AppLegalPage({ params }: Props) {
  const { slug, doc } = await params;
  const r = resolve(slug, doc);
  if (!r) notFound();

  const siblings = legalDocKeys(r.app.legal!)
    .filter((k) => k !== r.key)
    .map((k) => ({ label: LEGAL_DOC_LABELS[k], href: `/${slug}/${LEGAL_DOC_SLUGS[k]}/` }));
  return (
    <>
      <JsonLd
        data={breadcrumb(site.url, [
          { name: "홈", path: "/" },
          { name: r.app.name, path: `/${slug}/` },
          { name: LEGAL_DOC_LABELS[r.key], path: `/${slug}/${doc}/` },
        ])}
      />
      <LegalDocView
        appName={r.app.name}
        appHref={`/${slug}/`}
        doc={r.legal}
        siblings={siblings}
      />
    </>
  );
}
