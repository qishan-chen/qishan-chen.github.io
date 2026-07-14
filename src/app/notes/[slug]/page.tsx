import { notFound } from "next/navigation";
import { notes, getNote } from "@/data/notes";
import NoteView from "./NoteView";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const note = getNote(params.slug);
  return {
    title: note ? `${note.title} | Qishan Chen` : "Note | Qishan Chen",
    description: note?.desc,
  };
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNote(params.slug);
  if (!note) notFound();
  return <NoteView note={note} />;
}
