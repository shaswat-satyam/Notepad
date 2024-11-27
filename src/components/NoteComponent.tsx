import { useState } from "react";
import { Note } from "../../type";

export default function NoteComponent({
  notes,
  setNotes,
  id,
  title,
  body,
  tagline,
  isPinned,
  updatedAt,
  createdAt,
}: Note & Array<Note> & React.Dispatch<React.SetStateAction<Array<Note>>>) {
  const [isDisplay, setDisplay] = useState(true);

  const [upTitle, setTitle] = useState(title);
  const [upTagline, setTagLine] = useState(tagline);
  const [upBody, setBody] = useState(body);
  const [upIsPinned, setIsPinned] = useState(isPinned);

  return (
    <div>
      <div
        onClick={() => {
          setDisplay(false);
        }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="flex align-middle justify-between">
          <h2 className="text-xl pt-4 font-bold w-max text-purple-900 mb-4">
            {title}
          </h2>
          {isPinned ? (
            <img
              src={"./src/assets/pin.svg"}
              className=""
              width={30}
              alt="pin"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-between gap-5 text-gray-500">
          {tagline ? <h4>{tagline}</h4> : <></>}
          <h4>{Date(updatedAt)}</h4>

          <h4>{Date(createdAt)}</h4>
        </div>
        <p className="">{body}</p>
      </div>
      {isDisplay ? (
        <></>
      ) : (
        <div className="w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex align-middle justify-center">
          <form className="max-w-md fixed mx-auto w-11/12 h-2/3 mt-20 p-6 bg-white border rounded-lg shadow-lg">
            <div className="flex align-middle justify-between mb-6">
              <h2 className="text-2xl font-bold p-2">Add New Note</h2>
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setDisplay(true)}
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
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required:"
                id="title"
                type="text"
                value={upTitle}
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
                checked={upIsPinned}
                className="ml-5"
                onChange={(e) => setIsPinned(Boolean(e.target.checked))}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="tagline"
              >
                Tagline:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tagline"
                type="text"
                placeholder="Enter the tagline"
                value={upTagline}
                required
                onChange={(e) => setTagLine(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="body"
              >
                Body:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="body"
                rows={5}
                value={upBody}
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
                const updatedNote = notes.filter((note) => note.id === id)[0];
                updatedNote.title = upTitle;
                updatedNote.tagline = upTagline;
                updatedNote.body = upBody;
                updatedNote.isPinned = upIsPinned;
                updatedNote.updatedAt = Date.now();
                setNotes(
                  notes.filter((note) => note.id != id).concat(updatedNote)
                );
                setDisplay(true);
              }}
            >
              Update Note
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
