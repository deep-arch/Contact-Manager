import "../App.css";
import { useState } from "react";
import Header from "./Header";

const Manager = () => {
  const [elements, setElements] = useState([]);

  return (
    <div>
      <Header
        elements={elements}
        setElements={setElements}
      />
    </div>
  );
};

export default Manager;
