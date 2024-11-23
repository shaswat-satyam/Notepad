import Heading from "./components/Heading";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [isFormVisible, setFormVisibility] = useState(false);
  return (
    <>
      <div className="h-content ">
        <Heading
          setFormVisbility={setFormVisibility}
          formVisible={isFormVisible}
        />
        <Body formVisible={isFormVisible} />
      </div>
    </>
  );
}

export default App;
