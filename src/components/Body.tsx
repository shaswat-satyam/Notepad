import Form from "./Form.tsx";
import NoteComponent from "./NoteComponent.tsx";

import { Note } from "../../type.ts";

import { Dispatch, useState, useReducer, useEffect } from "react";
import Pagination from "./Pagination.tsx";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDakBjopCjwbPK06EnbYm_blWObjJHa9e8",
  authDomain: "notepad-82c2e.firebaseapp.com",
  projectId: "notepad-82c2e",
  storageBucket: "notepad-82c2e.firebasestorage.app",
  messagingSenderId: "350688169353",
  appId: "1:350688169353:web:f9563a6c1561454bd56558",
  measurementId: "G-2VLFBPVNBY",
  databaseURL:
    "https://notepad-82c2e-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

type Props = {
  formVisible: boolean;
  setFormVisibility: Dispatch<React.SetStateAction<boolean>>;
};

export default function Body({ formVisible, setFormVisibility }: Props) {
  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1);
  }
  const forceUpdate = useForceUpdate();
  const [currentPage, setCurrentPage] = useState(0);
  const [Notes, setNotes] = useState<Array<Note>>([]);
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
