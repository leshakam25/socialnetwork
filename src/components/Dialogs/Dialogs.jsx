import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let state = props.store.getState().dialogs;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message text={m.text} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
}
export default Dialogs;
