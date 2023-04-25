import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "올바르지 않은 입력",
        message: "이름과 나이가 입력되어야 합니다. 😮",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "올바르지 않은 입력",
        message: "나이는 0이상의 정수여야 합니다. 😮",
      });
      return;
    }

    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form className={classes.form} onSubmit={addUserHandler}>
          <div className={classes.inputBox}>
            <label className={classes.label} htmlFor="username">
              Username
            </label>
            <input
              type="text"
              value={enteredUsername}
              id="username"
              onChange={usernameChangeHandler}
            />
          </div>
          <div className={classes.inputBox}>
            <label className={classes.label} htmlFor="age">
              Age (Years)
            </label>
            <input
              type="number"
              value={enteredAge}
              id="age"
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
