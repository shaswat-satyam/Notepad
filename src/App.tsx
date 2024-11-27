import Heading from "./components/Heading";
import Body from "./components/Body";
import { useState } from "react";
import { initializeApp } from "firebase/app";

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
function App() {
  initializeApp(firebaseConfig);
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
