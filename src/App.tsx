import Heading from "./components/Heading";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [isFormVisible, setFormVisibility] = useState(false);
  return (
    <>
      <div className="h-content ">
        <Heading setFormVisbility={setFormVisibility} />
        <Body
          formVisible={isFormVisible}
          setFormVisbility={setFormVisibility}
        />
      </div>
    </>
  );
}

export default App;
