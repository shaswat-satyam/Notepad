import Heading from "./components/Heading";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [isFormVisible, setFormVisibility] = useState<boolean>(false);
  return (
    <>
      <div className="h-content ">
        <Heading setFormVisibility={setFormVisibility} />
        <Body
          formVisible={isFormVisible}
          setFormVisibility={setFormVisibility}
        />
      </div>
    </>
  );
}

export default App;
