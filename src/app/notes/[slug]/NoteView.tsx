"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { Note } from "@/data/notes";

export default function NoteView({ note }: { note: Note }) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-6">
            <Link href="/notes" className="hover:text-[var(--text)] transition-colors">
              Notes
            </Link>
            <span>/</span>
            <span className="text-[var(--text)]">{note.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{note.title}</h1>
            <div className="flex gap-3 shrink-0">
              <a
                href={note.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-lg text-sm font-medium hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                Open
              </a>
              <a
                href={note.pdf}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download
              </a>
            </div>
          </div>

          {note.status === "draft" && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-lg bg-[var(--accent-light)] text-[var(--accent)] text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              This note is being actively updated
            </div>
          )}

          <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-4">{note.desc}</p>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-medium text-[var(--text-secondary)]">{note.meta}</span>
            <span className="text-[var(--border)]">·</span>
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full bg-[var(--accent-light)] text-[var(--accent)] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Inline PDF preview */}
        <FadeIn delay={0.1}>
          <div className="rounded-xl border border-[var(--border)] overflow-hidden shadow-sm bg-[var(--card)]">
            <iframe
              src={`${note.pdf}#view=FitH`}
              title={note.title}
              className="w-full h-[80vh]"
            />
          </div>
          <p className="mt-3 text-center text-sm text-[var(--text-secondary)]">
            Trouble viewing?{" "}
            <a href={note.pdf} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
              Open the PDF in a new tab
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
