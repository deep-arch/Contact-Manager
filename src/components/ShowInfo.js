import Change from "./Change";

export const ShowInfo = ({
  elements,
  setElements,
  setToggleAddAndEdit,
  setContactName,
  setContactNumber,
  setUpdateInfo,
}) => {
  return (
    <div className="showInfo">
      <h2 className="header">Directory</h2>
      {elements.length > 0
        ? elements.map((info) => {
            return (
              <div className="eachInfo" key={info.id}>
                <h3>{info.name}</h3>
                <h4>{info.number}</h4>
                <Change
                  setElements={setElements}
                  elements={elements}
                  setToggleAddAndEdit={setToggleAddAndEdit}
                  setContactName={setContactName}
                  setContactNumber={setContactNumber}
                  setUpdateInfo={setUpdateInfo}
                  info={info}
                />
              </div>
            );
          })
        : "No contacts to show."}
    </div>
  );
};

export default ShowInfo;
