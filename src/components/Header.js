import { useState } from "react";
import AddInfo from "./AddInfo";
import ShowInfo from "./ShowInfo";

const Header = ({ elements, setElements }) => {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [toggleAddAndEdit, setToggleAddAndEdit] = useState(true);
  const [updateInfo, setUpdateInfo] = useState("null");

  return (
    <div className="container">
      <h1 className="header">Contacts</h1>
      <AddInfo
        contactName={contactName}
        setContactName={setContactName}
        contactNumber={contactNumber}
        setContactNumber={setContactNumber}
        elements={elements}
        setElements={setElements}
        toggleAddAndEdit={toggleAddAndEdit}
        setToggleAddAndEdit={setToggleAddAndEdit}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
      />
      <ShowInfo
        elements={elements}
        setElements={setElements}
        setToggleAddAndEdit={setToggleAddAndEdit}
        setContactName={setContactName}
        setContactNumber={setContactNumber}
        setUpdateInfo={setUpdateInfo}
      />
    </div>
  );
};

export default Header;
