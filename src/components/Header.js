import React, { useState } from "react";
import AddInfo from "./AddInfo";
import ShowInfo from "./ShowInfo";

const HeadContext = React.createContext();
const Header = () => {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [toggleAddAndEdit, setToggleAddAndEdit] = useState(true);
  const [updateInfo, setUpdateInfo] = useState("null");

  return (
    <HeadContext.Provider
      value={{
        contactName,
        setContactName,
        contactNumber,
        setContactNumber,
        toggleAddAndEdit,
        setToggleAddAndEdit,
        updateInfo,
        setUpdateInfo,
      }}
    >
      <div className="container">
        <h1 className="header">Contacts</h1>
        <AddInfo />
        <ShowInfo />
      </div>
    </HeadContext.Provider>
  );
};

export default Header;
export { HeadContext };
