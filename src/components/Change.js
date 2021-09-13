import { useContext } from "react";
import { ManageContext } from "./Manager";
import { HeadContext } from "./Header";

const Change = ({ info }) => {
  const { elements, setElements } = useContext(ManageContext);
  const {
    setContactName,
    setContactNumber,
    setToggleAddAndEdit,
    setUpdateInfo,
  } = useContext(HeadContext);

  // Deleting Infos

  const deleteElements = (id) => {
    const updatedInfo = elements.filter((info) => {
      return info.id !== id;
    });
    alert("Contact Deleted!");

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
    <div>
      <button
        title="Update Contact Details"
        className="btn btn-secondary"
        onClick={() => editInfo(info.id)}
      >
        Update
      </button>
      <button
        title="Delete Contact Details"
        className="btn-edit"
        onClick={() => deleteElements(info.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Change;
