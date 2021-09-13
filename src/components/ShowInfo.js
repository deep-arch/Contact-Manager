import { useContext } from "react";
import { ManageContext } from "./Manager";
import Change from "./Change";

const ShowInfo = () => {
  const { elements } = useContext(ManageContext);

  return (
    <div className="showInfo">
      <h2 className="header">Directory</h2>
      {elements.length > 0
        ? elements.map((info) => {
            return (
              <div className="eachInfo" key={info.id}>
                <h3>{info.name}</h3>
                <h4>{info.number}</h4>
                <Change info={info} />
              </div>
            );
          })
        : "No contacts to show."}
    </div>
  );
};

export default ShowInfo;
