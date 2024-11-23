import Form from "./Form.tsx";
import NoteComponent from "./NoteComponent.tsx";

import { Note } from "../../type.ts";

import { Dispatch, useState } from "react";

type Props = {
  formVisible: boolean;
  setFormVisibility: Dispatch<React.SetStateAction<boolean>>;
};

export default function Body({ formVisible, setFormVisibility }: Props) {
  const [Notes, setNotes] = useState<Array<Note>>([]);
  return (
    <div className="pt-20 px-16">
      <h1 className="text-4xl font-bold">My Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {Notes.length > 0 ? (
          Notes.filter((note) => note.isPinned)
            .sort((note) => note.updatedAt)
            .map((note: Note) => (
              <NoteComponent
                title={note.title}
                tagline={note.tagline}
                body={note.body}
                isPinned={note.isPinned}
                updatedAt={note.updatedAt}
              />
            ))
        ) : (
          <></>
        )}

        {Notes.length > 0 ? (
          Notes.filter((note) => !note.isPinned).map((note: Note) => (
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
          setFormVisibility={setFormVisibility}
          setNotes={setNotes}
          notes={Notes}
        />
      ) : (
        <div />
      )}
    </div>
  );
}
