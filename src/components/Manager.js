import React, { useState } from "react";
import "../App.css";
import Header from "./Header";

const ManageContext = React.createContext();
const Manager = () => {
  const [elements, setElements] = useState([]);

  return (
    <ManageContext.Provider value={{ elements, setElements }}>
      <Header />
    </ManageContext.Provider>
  );
};

export default Manager;
export { ManageContext };
