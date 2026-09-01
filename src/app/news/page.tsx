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
        </FadeIn>

        <div className="space-y-5">
          {news.map((item, i) => (
            <FadeIn key={`${item.date}-${item.title}`} delay={0.05 * i}>
              <article className="leading-relaxed">
                <time className="font-medium text-[var(--text)]">{item.date}:</time>{" "}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] hover:underline"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-[var(--text-secondary)]">{item.title}</span>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
