import { Note } from "../../type";

export default function NoteComponent({
  title,
  body,
  tagline,
  isPinned,
  updatedAt,
}: Note) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{tagline}</h3>
      <p>{body}</p>
      <h3>{isPinned}</h3>
      <h4>{String(updatedAt)}</h4>
    </div>
  );
}
