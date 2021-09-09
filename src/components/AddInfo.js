const AddInfo = ({
  contactName,
  setContactName,
  contactNumber,
  setContactNumber,
  onChange,
  toggleAddAndEdit,
}) => {
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
          onClick={onChange}
          className="btn-secondary"
        >
          Create New Contact
        </button>
      ) : (
        <button
          title="Update Contact Details"
          onClick={onChange}
          className="btn-edit"
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default AddInfo;
