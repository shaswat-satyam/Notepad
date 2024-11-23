import Form from "./Form.tsx";
import NoteComponent from "./NoteComponent.tsx";
import { useState } from "react";

export default function Body({ formVisible, setFormVisbility }) {
  let [Notes, setNotes] = useState([]);
  return (
    <div className="pt-20 px-16">
      <h1 className="text-4xl font-bold">My Notes</h1>
      <div className="grid">
        {Notes.length > 0 ? (
          Notes.map((note) => (
            <NoteComponent
              title={note.title}
              tagline={note.tagline}
              body={note.body}
              isPinned={note.isPinned}
              updatedAt={note.updatedAt}
            />
          ))
        ) : (
          <h2>No Notes Found</h2>
        )}
      </div>
      {formVisible ? (
        <Form
          setFormVisbility={setFormVisbility}
          setNotes={setNotes}
          notes={Notes}
        />
      ) : (
        <div />
      )}
    </div>
  );
}
