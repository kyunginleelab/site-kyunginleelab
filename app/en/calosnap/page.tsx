import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import { apps, appIcon, hreflang } from "@/content/apps";
import { calosnapEn as en } from "@/content/en/calosnap";
import { versioned, versionedScreens } from "@/content/asset-version";
import { openGraph } from "@/lib/seo";
import Reveal from "@/components/reveal";
import JsonLd, { breadcrumb } from "@/components/json-ld";

/**
 * CaloSnap 영문 페이지 — 국문 페이지(app/[slug]/page.tsx)와 같은 틀·같은 컴포넌트로 그린다.
 * 문구는 content/en/calosnap.ts, 아이콘·Play 주소·법적 문서 유무는 content/apps.ts 의 calosnap 항목.
 *
 * 국문 페이지와 다른 점
 *  - 스크린샷: 영문 스크린샷은 캡션과 기기 테두리가 이미 들어간 홍보용이라 폰 목업(ScrollShowcase)
 *    안에 넣을 수 없다. 그래서 국문 틀의 "스크린샷 격자 + 기능 격자" 쪽을 쓴다.
 *  - 요금제: 가격 대신 월 분석 횟수를 큰 글씨 자리에 둔다 (영문 등록정보에 달러 가격이 없다).
 *  - lang: <html lang="ko"> 는 루트 layout 것이라 건드리지 않고, 본문을 <div lang="en"> 으로 감싼다.
 *    헤더·푸터는 국문 그대로다.
 */
const found = apps.find((a) => a.slug === en.slug);
if (!found?.playUrl) {
  throw new Error(`content/apps.ts 에 playUrl 이 있는 "${en.slug}" 항목이 없다`);
}
const app = found;
const playUrl = found.playUrl;

/**
 * Play 버튼 주소 — 국문 페이지의 withReferrer 와 같은 install referrer 틀.
 * utm_source 만 달리해(kyunginleelab.com_en) Play Console 획득 보고서에서 영문 페이지에서
 * 나간 설치를 국문 페이지와 따로 센다. hl=en 은 스토어 화면을 영어로 연다.
 * 구조화 데이터의 installUrl 은 국문 페이지와 같이 깨끗한 주소를 그대로 쓴다.
 */
const referrer = `utm_source=kyunginleelab.com_en&utm_medium=website&utm_campaign=${app.slug}_app_page`;
const playLink = `${playUrl}${playUrl.includes("?") ? "&" : "?"}hl=en&referrer=${encodeURIComponent(referrer)}`;

const legalPill =
  "glass rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-accent-ink";

export const metadata: Metadata = {
  title: en.title,
  description: en.short,
  // 루트 layout 의 keywords 는 국문이다 — 영문 페이지는 영문 등록정보에 나오는 말로 바꾼다
  keywords: en.keywords,
  alternates: { canonical: en.path, languages: hreflang(app) },
  openGraph: {
    ...openGraph({
      title: en.title,
      description: en.short,
      path: en.path,
      image: {
        url: versioned(`/apps/${app.slug}/${en.ogImage.file}`),
        alt: en.ogImage.alt,
      },
    }),
    // lib/seo 의 openGraph 는 ko_KR 고정이라 이 페이지에서만 덮어쓴다
    locale: "en_US",
  },
};

export default function CaloSnapEnglishPage() {
  // 국문 페이지의 SoftwareApplication 과 같은 항목 — 주소와 설명만 영문 페이지 것
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${site.url}${en.path}#app`,
    name: app.name,
    description: en.short,
    url: `${site.url}${en.path}`,
    image: `${site.url}${appIcon(app)}`,
    applicationCategory: app.category ?? "HealthApplication",
    operatingSystem: "Android",
    installUrl: playUrl,
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <div lang="en">
      <JsonLd data={appLd} />
      <JsonLd
        data={breadcrumb(site.url, [
          { name: "Home", path: "/" },
          { name: app.name, path: en.path },
        ])}
      />

      {/* Hero */}
      <section className="hero-bg">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 text-center sm:pt-28">
          <Reveal>
            <Image
              src={appIcon(app)}
              alt={en.iconAlt}
              width={112}
              height={112}
              className="mx-auto h-24 w-24 rounded-[24px] border border-line shadow-sm sm:h-28 sm:w-28 sm:rounded-[28px]"
              priority
            />
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {app.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-muted sm:text-xl">
              {en.tagline}
            </p>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
              {en.short}
            </p>
            <div className="mt-8">
              <a
                href={playLink}
                className="inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-white transition-opacity hover:opacity-85"
              >
                {en.playLabel}
              </a>
            </div>
            {/* 안드로이드 전용임을 버튼 바로 아래에 밝힌다. 옆은 국문 페이지로 가는 링크 */}
            <p className="mt-4 text-sm text-muted">
              {en.platformNote}
              <span className="mx-2 opacity-50">·</span>
              <Link
                href={`/${app.slug}/`}
                hrefLang="ko"
                lang="ko"
                className="underline underline-offset-4 transition-colors hover:text-ink"
              >
                {en.koreanPageLabel}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 스크린샷 — 국문 틀의 격자와 같은 모양 (영문 홍보 스크린샷은 9:16) */}
      <section className="band">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-5 py-14 sm:grid-cols-4">
          {versionedScreens(app.slug, en.screens).map((s, i) => (
            <Reveal key={s.src} delay={i * 90}>
              <Image
                src={s.src}
                alt={s.alt}
                width={720}
                height={1280}
                className="w-full rounded-2xl border border-line"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 소개 + 기능 */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed text-muted">
            {en.intro}
          </p>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2">
          {en.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 110}>
              <h2 className="mb-2 text-lg font-bold">
                <span className="mr-2">{f.emoji}</span>
                {f.title}
              </h2>
              <p className="leading-relaxed text-muted">{f.body}</p>
            </Reveal>
          ))}
        </div>
        {/* 칼로리 값은 AI 추정치이고 의료 조언이 아니다 — 빼지 말 것 */}
        <Reveal>
          <p className="mt-14 text-center text-sm text-muted">{en.disclaimer}</p>
        </Reveal>
      </section>

      {/* Pricing — 가격 자리에 월 분석 횟수 */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Reveal>
            <h2 className="mb-2 text-center text-2xl font-bold tracking-tight">
              {en.pricing.heading}
            </h2>
            <p className="mb-10 text-center text-muted">{en.pricing.sub}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {en.pricing.plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 110} className="h-full">
                <div
                  className={`h-full rounded-3xl border p-7 ${
                    p.highlight
                      ? "border-accent bg-accent-soft/80 backdrop-blur-sm"
                      : "glass border-line"
                  }`}
                >
                  <h3 className="flex items-center gap-2 font-bold">
                    {p.name}
                    {p.highlight && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-bold tracking-tight text-bg">
                        {en.pricing.recommended}
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-2xl font-extrabold tracking-tight">
                    {p.headline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted">
              {en.pricing.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 법적 고지 — 문서는 국문만 있다. 번역하지 않고 국문 문서로 잇는다 */}
      {app.legal && (
        <section className="mx-auto max-w-6xl px-6 py-14 text-center">
          <p className="eyebrow mb-4">Legal</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={`/${app.slug}/privacy/`} hrefLang="ko" className={legalPill}>
              {en.legal.privacy}
            </Link>
            <Link
              href={`/${app.slug}/delete-account/`}
              hrefLang="ko"
              className={legalPill}
            >
              {en.legal.deleteAccount}
            </Link>
            {app.legal.terms && (
              <Link href={`/${app.slug}/terms/`} hrefLang="ko" className={legalPill}>
                {en.legal.terms}
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
