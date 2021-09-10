import "../App.css";
import { useState } from "react";
import Header from "./Header";
const Manager = () => {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [elements, setElements] = useState([]);
  const [toggleAddAndEdit, setToggleAddAndEdit] = useState(true);
  const [updateInfo, setUpdateInfo] = useState("null");

  return (
    <div>
      <Header
        contactName={contactName}
        setContactName={setContactName}
        contactNumber={contactNumber}
        setContactNumber={setContactNumber}
        toggleAddAndEdit={toggleAddAndEdit}
        setToggleAddAndEdit={setToggleAddAndEdit}
        elements={elements}
        setElements={setElements}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
      />
    </div>
  );
};

export default Manager;
