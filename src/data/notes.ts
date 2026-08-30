export type Note = {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
  meta: string; // e.g. "PDF · 52 pages"
  date: string; // e.g. "2025"
  pdf: string; // path under /public
  status?: "complete" | "draft";
};

export const notes: Note[] = [
  {
    slug: "meta-complexity",
    title: "Meta-Complexity Notes",
    desc: "Handwritten notes on MCSP, Kolmogorov complexity, learning theory, and open problems in meta-complexity.",
    tags: ["Meta-Complexity", "Complexity Theory"],
    meta: "PDF · 13 pages",
    date: "2026",
    pdf: "/notes/meta-complexity-notes.pdf?v=4ea8c57",
    status: "complete",
  },
  {
    slug: "sketching-algorithms",
    title: "Sketching Algorithms Notes",
    desc: "Notes based on the Sketching Algorithms lecture notes by Jelani Nelson, Fall 2020.",
    tags: ["Sketching", "Randomized Numerical Linear Algebra"],
    meta: "PDF · 21 pages",
    date: "2025",
    pdf: "/notes/sketching-algorithms-notes.pdf",
    status: "draft",
  },
  {
    slug: "abstract-algebra",
    title: "Abstract Algebra Notes",
    desc: "Notes from the undergraduate Abstract Algebra course at Sun Yat-sen University, based on the textbook published by USTC Press, covering groups, rings, and fields.",
    tags: ["Groups", "Rings", "Fields"],
    meta: "PDF · 52 pages",
    date: "2025",
    pdf: "/notes/abstract-algebra-notes.pdf",
    status: "complete",
  },
];

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}
