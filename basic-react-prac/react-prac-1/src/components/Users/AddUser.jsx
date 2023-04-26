import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "올바르지 않은 입력",
        message: "이름과 나이가 입력되어야 합니다. 😮",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "올바르지 않은 입력",
        message: "나이는 0이상의 정수여야 합니다. 😮",
      });
      return;
    }

    // console.log(enteredName, enteredUserAge);
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form className={classes.form} onSubmit={addUserHandler}>
          <div className={classes.inputBox}>
            <label className={classes.label} htmlFor="username">
              Username
            </label>
            <input type="text" id="username" ref={nameInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label className={classes.label} htmlFor="age">
              Age (Years)
            </label>
            <input type="number" id="age" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
