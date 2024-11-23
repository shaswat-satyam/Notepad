import { Note } from "../../type";

export default function NoteComponent({
  title,
  body,
  tagline,
  isPinned,
  updatedAt,
  createdAt,
}: Note) {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6">
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
        </div>
        <p className="">{body}</p>
      </div>
    </div>
  );
}
