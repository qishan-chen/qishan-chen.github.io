"use client";

import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    title: "Deep Learning Image Classification System",
    desc: "An image classification model built with PyTorch, achieving 95% accuracy on the CIFAR-10 dataset.",
    tags: ["Python", "PyTorch", "Deep Learning"],
  },
  {
    title: "Campus Information Management Platform",
    desc: "A full-stack web application providing course management and grade inquiry features for students.",
    tags: ["React", "Node.js", "MySQL"],
  },
  {
    title: "NLP Text Summarization Tool",
    desc: "An automatic text summarization tool based on the Transformer architecture.",
    tags: ["NLP", "Transformers", "Python"],
  },
];

const publications = [
  {
    title: "No publications yet",
    desc: "Actively participating in research projects. Stay tuned!",
    venue: "",
    year: "",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <FadeIn>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              Q
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Qishan Chen</h1>
              <p className="text-xl text-[var(--text-secondary)] mb-2">XX University · Undergraduate</p>
              <p className="text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed">
                An undergraduate passionate about Computer Science and Artificial Intelligence, focusing on Machine Learning and Natural Language Processing.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#contact" className="px-5 py-2.5 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Contact Me
                </a>
                <a href="#cv" className="px-5 py-2.5 border border-[var(--border)] rounded-lg text-sm font-medium hover:bg-[var(--bg-secondary)] transition-colors">
                  Download CV
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <div className="w-12 h-1 bg-[var(--accent)] rounded mb-8" />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-lg font-semibold mb-4">Education</h3>
                <div className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm">
                  <p className="font-medium">XX University</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">B.S. in Computer Science</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">2022 - 2026 (Expected)</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-lg font-semibold mb-4">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Natural Language Processing", "Computer Vision", "Deep Learning", "Data Mining"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-sm rounded-full bg-[var(--accent-light)] text-[var(--accent)] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">
                  Currently exploring the applications and optimization of Large Language Models, with a strong interest in applying AI to real-world scenarios.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-2">Publications</h2>
            <div className="w-12 h-1 bg-[var(--accent)] rounded mb-8" />
          </FadeIn>
          {publications.map((pub, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm mb-4">
                <p className="font-medium">{pub.title}</p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{pub.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <div className="w-12 h-1 bg-[var(--accent)] rounded mb-8" />
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow h-full">
                  <h3 className="font-semibold mb-2">{proj.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-2">Curriculum Vitae</h2>
            <div className="w-12 h-1 bg-[var(--accent)] rounded mb-8 mx-auto" />
            <p className="text-[var(--text-secondary)] mb-6">Download my full CV for more details</p>
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV (PDF)
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
            <div className="w-12 h-1 bg-[var(--accent)] rounded mb-8 mx-auto" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:your@email.com" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span className="text-sm">your@email.com</span>
              </a>
              <a href="https://github.com/X-Capybara-CQS" target="_blank" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://scholar.google.com" target="_blank" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                <span className="text-sm">Google Scholar</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto text-center text-sm text-[var(--text-secondary)]">
          © 2025 Qishan Chen. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
