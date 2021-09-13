import { useContext } from "react";
import { ManageContext } from "./Manager";
import { HeadContext } from "./Header";

const AddInfo = () => {
  const { elements, setElements } = useContext(ManageContext);
  const {
    contactName,
    setContactName,
    contactNumber,
    setContactNumber,
    toggleAddAndEdit,
    setToggleAddAndEdit,
    updateInfo,
    setUpdateInfo,
  } = useContext(HeadContext);

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
  
  return (
    <div className="addInfo">
      <label className="header">Name</label>
      <input
        type="text"
        placeholder="Add Contact Name"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
      />
      <label className="header">Phone Number</label>
      <input
        type="number"
        placeholder="Add Contact Number"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
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
          title="Update Contact Details"
          onClick={addElements}
          className="btn-edit"
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default AddInfo;
