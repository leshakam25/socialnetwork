import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Chat from "./Chat/Chat";

function Dialogs(props) {
  let state = props.store.getState().dialogs;

  let dialogsElements = props.dialogs.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogs.messagesData.map((m) => (
    <Message text={m.text} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <Chat newMessageBody={props.newMessageBody} dispatch={props.dispatch} />
    </div>
  );
}
export default Dialogs;
