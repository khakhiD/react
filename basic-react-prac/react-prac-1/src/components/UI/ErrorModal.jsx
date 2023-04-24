import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
    const enterKeyHandler = (e) => {
        if (e.key === 'Enter') {
            props.onConfirm();
        }
    }
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal} onKeyPress={enterKeyHandler}>
        <header className={classes.header}>
          <h3>{props.title}</h3>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="button" onClick={props.onConfirm}>확인</Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorModal;
