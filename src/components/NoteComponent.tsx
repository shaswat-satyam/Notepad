export default function NoteComponent({
  title,
  body,
  tagline,
  isPinned,
  updatedAt,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{tagline}</h3>
      <p>{body}</p>
      <h3>{isPinned}</h3>
      <h4>{updatedAt}</h4>
    </div>
  );
}
