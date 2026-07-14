"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { notes } from "@/data/notes";

export default function NotesIndex() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <Link
            href="/#notes-talks"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Notes</h1>
          <div className="w-12 h-1 bg-[var(--accent)] rounded mb-4" />
          <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-12">
            A growing collection of my study notes in mathematics and theoretical computer science.
            Click any note to read it inline.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {notes.map((note, i) => (
            <FadeIn key={note.slug} delay={0.05 * i} className="h-full">
              <Link
                href={`/notes/${note.slug}`}
                className="group block h-full p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                    {note.title}
                    {note.status === "draft" && (
                      <span className="ml-2 align-middle px-2 py-0.5 text-xs rounded-full bg-[var(--accent-light)] text-[var(--accent)] font-medium">
                        Updating
                      </span>
                    )}
                  </h2>
                  <span className="shrink-0 text-xs font-medium text-[var(--accent)]">{note.meta}</span>
                </div>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{note.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-[var(--accent-light)] text-[var(--accent)] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read note
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
