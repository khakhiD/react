import React, { useState } from "react";
import "./AddUserForm.css";

const AddUserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name: enteredName,
      age: +enteredAge,
    };
    console.log(userData);

    props.onSaveUserData(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div className="new-user" onSubmit={submitHandler}>
      <form>
        <div className="add-users__contents">
          <div className="add-users__content">
            <label>Username</label>
            <input type="text" value={enteredName} onChange={nameChangeHandler} />
          </div>
          <div className="add-users__content">
            <label>Age (Years)</label>
            <input type="number" min="1" step="1" value={enteredAge} onChange={ageChangeHandler} />
          </div>
        </div>
        <div className="add-users__actions">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
