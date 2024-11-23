import Form from "./Form.tsx";
import { useState } from "react";

export default function Body({ formVisible, setFormVisbility }) {
  let [Notes, setNote] = useState([{}]);
  return (
    <div className="pt-20 px-16">
      <h1 className="text-4xl font-bold">My Notes</h1>
      <div className="grid">{if Notes.length? > 0 : Notes.map(note => <NoteComponent title={note.title} tagline={note.tagline} body={Notes.body}/>) }</div>
      {formVisible ? <Form setFormVisbility={setFormVisbility} /> : <div />}
    </div>
  );
}
