import Form from "./Form.tsx";
export default function Body({ formVisible }) {
  return (
    <div className="pt-20 px-16">
      <h1 className="text-4xl font-bold">My Notes</h1>
      <div className="grid">{}</div>
      {formVisible ? <Form /> : <div />}
    </div>
  );
}
