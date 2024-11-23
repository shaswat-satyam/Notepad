import { useState } from "react";
import { Note } from "../../type";
type Props = {
  setFormVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setNotes: React.Dispatch<React.SetStateAction<Array<Note>>>;
  notes: Array<Note>;
};

export default function Form({ setFormVisibility, setNotes, notes }: Props) {
  const [title, setTitle] = useState("");
  const [tagline, setTagLine] = useState("");
  const [body, setBody] = useState("");
  const [isPinned, setIsPinned] = useState(false);
  return (
    <form className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
      <div className="flex align-middle justify-between mb-6">
        <h2 className="text-2xl font-bold p-2">Add New Note</h2>
        <button
          type="button"
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setFormVisibility(false)}
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Title:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required:"
          id="title"
          type="text"
          placeholder="Enter the title"
          required={true}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4 flex">
        <label
          className="block mt-2  text-gray-700 font-bold mb-2"
          htmlFor="pin"
        >
          Pinned:
        </label>
        <input
          id="pin"
          type="checkbox"
          placeholder="Pin the note"
          className="ml-5"
          onChange={(e) => setIsPinned(Boolean(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="tagline">
          Tagline:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tagline"
          type="text"
          placeholder="Enter the tagline"
          required
          onChange={(e) => setTagLine(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="body">
          Body:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="body"
          rows={5}
          placeholder="Enter the body"
          required={true}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setFormVisibility(false);
          console.log(body);
          setNotes([
            ...notes,
            {
              title: title,
              tagline: tagline,
              body: body,
              isPinned: isPinned,
              updatedAt: string(Date()),
            },
          ]);
        }}
      >
        Submit
      </button>
    </form>
  );
}
