import { useState } from "react";
import "../App.css";
import AddInfo from "./AddInfo";
import ShowInfo from "./ShowInfo";

const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [elements, setElements] = useState([]);
  const [toggleAddAndEdit, setToggleAddAndEdit] = useState(true);
  const [updateInfo, setUpdateInfo] = useState("null");

  //Adding Infos

  const addElements = () => {
    if (
      !contactName ||
      !contactNumber ||
      contactNumber < 1000000000 ||
      contactNumber > 9999999999
    ) {
      alert("Please enter a valid input!");
    } else if (contactName && contactNumber && !toggleAddAndEdit) {
      setElements(
        elements.map((elem) => {
          if (elem.id === updateInfo)
            return { ...elem, name: contactName, number: contactNumber };
          return elem;
        })
      );
      alert("Saved Successfully!");

      setToggleAddAndEdit(true);

      setContactName("");
      setContactNumber("");

      setUpdateInfo(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: contactName,
        number: contactNumber,
      };
      alert("Saved Successfully!");

      setElements([...elements, allInputData]);
      setContactName("");
      setContactNumber("");
    }
  };

  // Deleting Infos

  const deleteElements = (id) => {
    const updatedInfo = elements.filter((info) => {
      return info.id !== id;
    });

    setElements(updatedInfo);
  };

  // Editing Infos

  const editInfo = (id) => {
    let infoToEdit = elements.find((info) => {
      return info.id === id;
    });

    setToggleAddAndEdit(false);

    setContactName(infoToEdit.name);
    setContactNumber(infoToEdit.number);

    setUpdateInfo(id);
  };

  return (
    <>
      <div className="container">
        <h1 className="header">Contacts</h1>
        <AddInfo
          contactName={contactName}
          setContactName={setContactName}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          onChange={addElements}
          toggleAddAndEdit={toggleAddAndEdit}
        />
        <ShowInfo
          elements={elements}
          deleteElements={deleteElements}
          editInfo={editInfo}
        />
      </div>
    </>
  );
};

export default Contact;
