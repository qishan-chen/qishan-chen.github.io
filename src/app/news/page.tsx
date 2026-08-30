import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <Link
            href="/#news"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">News</h1>
          <div className="w-12 h-1 bg-[var(--accent)] rounded mb-4" />
          <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-12">
            Recent activities and academic experiences.
          </p>
        </FadeIn>

        <div className="relative ml-2 border-l border-[var(--border)] pl-8 md:ml-4">
          {news.map((item, i) => (
            <FadeIn key={`${item.date}-${item.title}`} delay={0.05 * i}>
              <article className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]"
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                  <time className="shrink-0 text-sm font-medium text-[var(--link-muted)] sm:w-20">
                    {item.date}
                  </time>
                  <p className="leading-relaxed text-[var(--text-secondary)]">{item.title}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
