import React, { useState } from "react";
// import './AddUser.css';
import AddUserForm from "./AddUserForm";
import Card from "../UI/Card";

const AddUser = (props) => {
    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString(),
        };
        props.onAddUser(userData);
        console.log(userData);
    }
  return (
    <div>
        <AddUserForm onSaveUserData={saveUserDataHandler}/>
    </div>
  );
};

export default AddUser;
