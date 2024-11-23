export default function NoteComponent({ title, body, tagline }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{tagline}</h3>
      <p>{body}</p>
    </div>
  );
}
