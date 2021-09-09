const Change = (props) => {
  return (
    <div>
      <button
        title="Update Contact Details"
        className="btn btn-secondary"
        onClick={() => props.updateContact()}
      >
        Update
      </button>
      <button
        title="Delete Contact Details"
        className="btn-edit"
        onClick={() => props.deleteContact()}
      >
        Delete
      </button>
    </div>
  );
};

export default Change;
