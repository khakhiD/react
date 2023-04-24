import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  return (
    <Card className={classes.input}>
      <form className={classes.form} onSubmit={addUserHandler}>
        <div className={classes.inputBox}>
          <label className={classes.label} htmlFor="username">
            Username
          </label>
          <input type="text" value={enteredUsername} id="username" onChange={usernameChangeHandler}/>
        </div>
        <div className={classes.inputBox}>
          <label className={classes.label} htmlFor="age">
            Age (Years)
          </label>
          <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler}/>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
