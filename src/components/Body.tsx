import Form from "./Form.tsx";
import NoteComponent from "./NoteComponent.tsx";

import { Note } from "../../type.ts";

import { Dispatch, useState } from "react";
import Pagination from "./Pagination.tsx";

type Props = {
  formVisible: boolean;
  setFormVisibility: Dispatch<React.SetStateAction<boolean>>;
};

export default function Body({ formVisible, setFormVisibility }: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [Notes, setNotes] = useState<Array<Note>>([
    {
      title: "Do Laundry",
      tagline: "",
      body: "Do laundry before winter",
      isPinned: false,
      updatedAt: 0,
      createdAt: 0,
    },
    {
      title: "Do Laundry",
      tagline: "",
      body: "Do laundry before winter",
      isPinned: false,
      updatedAt: 0,
      createdAt: 0,
    },
    {
      title: "Do Laundry",
      tagline: "",
      body: "Do laundry before winter",
      isPinned: false,
      updatedAt: 0,
      createdAt: 0,
    },
    {
      title: "Do Laundry",
      tagline: "",
      body: "Do laundry before winter",
      isPinned: false,
      updatedAt: 0,
      createdAt: 0,
    },
    {
      title: "Do Laundry",
      tagline: "",
      body: "Do laundry before winter",
      isPinned: false,
      updatedAt: 0,
      createdAt: 0,
    },
    {
      title: "Do Laundry",
      tagline: "",
      body: "Do laundry before winter",
      isPinned: false,
      updatedAt: 0,
      createdAt: 0,
    },
    {
      title: "Do Laundry",
      tagline: "",
      body: "Do laundry before winter",
      isPinned: false,
      updatedAt: 0,
      createdAt: 0,
    },
  ]);
  const currentNotes = Notes.filter((note) => note.isPinned)
    .sort((note) => note.updatedAt)
    .concat(
      Notes.filter((note) => !note.isPinned).sort((note) => note.updatedAt)
    );
  return (
    <div className="pt-20 px-16">
      <h1 className="text-4xl font-bold">My Notes</h1>
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
            .map((note: Note, i) => (
              <NoteComponent
                title={note.title}
                tagline={note.tagline}
                body={note.body}
                isPinned={note.isPinned}
                updatedAt={note.updatedAt}
                createdAt={note.createdAt}
                key={note.title + i}
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
