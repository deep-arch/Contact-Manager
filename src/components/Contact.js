import { useState } from "react";
import "../App.css";

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
        <h1 className="header">
          Contacts{" "}
          {toggleAddAndEdit ? (
            <button
              title="Add Contact Details"
              onClick={addElements}
              className="btn-secondary"
            >
              Create New Contact
            </button>
          ) : (
            <button
              title="Edit Contact Details"
              onClick={addElements}
              className="btn-edit"
            >
              Save Changes
            </button>
          )}
        </h1>

        <div className="addInfo">
          <label>Name</label>
          <input
            type="text"
            placeholder="Add Contact Name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="Add Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>

        <div className="showInfo">
          <h2 className="header">Directory</h2>
          {elements.length > 0
            ? elements.map((info) => {
                return (
                  <div className="eachInfo" key={info.id}>
                    <h3>{info.name}</h3>
                    <h4>{info.number}</h4>
                    <button
                      title="Update Contact Details"
                      onClick={() => editInfo(info.id)}
                      className="btn btn-secondary"
                    >
                      Update
                    </button>
                    <button
                      title="Delete Contact Details"
                      onClick={() => deleteElements(info.id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : "No contacts to show."}
        </div>
      </div>
    </>
  );
};

export default Contact;
