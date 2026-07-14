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
