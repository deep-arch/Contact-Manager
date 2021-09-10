import AddInfo from "./AddInfo";
import ShowInfo from "./ShowInfo";

const Header = ({
  contactName,
  setContactName,
  contactNumber,
  setContactNumber,
  elements,
  setElements,
  toggleAddAndEdit,
  setToggleAddAndEdit,
  updateInfo,
  setUpdateInfo,
}) => {
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
