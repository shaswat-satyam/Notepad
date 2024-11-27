import Form from "./Form.tsx";
import NoteComponent from "./NoteComponent.tsx";
import Pagination from "./Pagination.tsx";

import { Note } from "../../type.ts";

import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

type Props = {
  formVisible: boolean;
  setFormVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Body({ formVisible, setFormVisibility }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [Notes, setNotes] = useState<Array<Note>>([]);
  const [fetchedNotes, setFetchedNotes] = useState<Array<Note>>([]);

  const dbRef = ref(getDatabase());
  get(child(dbRef, `notes`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((element) => {
          const child = element.val();

          // Check if child.id already exists in fetchedNotes
          if (!fetchedNotes.some((note) => note.id === child.id)) {
            setFetchedNotes((prevNotes) => [...prevNotes, child]);
          }
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  useEffect(() => {
    const uniqueNotes: Array<Note> = [];

    fetchedNotes.forEach((note) => {
      // Use .some() to check if the note already exists in uniqueNotes
      if (!uniqueNotes.some((uniqueNote) => uniqueNote.id === note.id)) {
        uniqueNotes.push(note); // Use push to add new notes
      }
    });

    setNotes((prevNotes) => [...prevNotes, ...uniqueNotes]); // Append unique notes
  }, [fetchedNotes]);

  const currentNotes = Notes.filter((note) => note.isPinned)
    .sort((note) => note.updatedAt)
    .concat(
      Notes.filter((note) => !note.isPinned).sort((note) => note.updatedAt)
    );

  return (
    <div className="pt-20 px-16">
      <div className="flex space-x-5">
        <h1 className="text-4xl font-bold">My Notes</h1>

        {!formVisible ? (
          <button
            onClick={() => setFormVisibility(true)}
            className="border-blue-600 border-2  rounded-full bg-blue-400 text-white hover:bg-blue-800 p-2"
          >
            Add New Note
          </button>
        ) : (
          <></>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {Notes.length > 0 ? (
          currentNotes
            .slice(6 * currentPage, 6 * (currentPage + 1))
            .map((note: Note) => (
              <NoteComponent
                notes={Notes}
                setNotes={setNotes}
                id={note.id}
                title={note.title}
                tagline={note.tagline}
                body={note.body}
                isPinned={note.isPinned}
                updatedAt={note.updatedAt}
                createdAt={note.createdAt}
                key={note.id}
              />
            ))
        ) : (
          <></>
        )}
      </div>
      <div className="py-5 flex justify-center w-full center">
        {Notes.length > 6 ? (
          <Pagination
            pageCount={Math.ceil(Notes.length / 6)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
